#!/usr/bin/env node

/**
 * AlterLab FC Skills — Validation Script
 *
 * Validates all SKILL.md files for:
 *   - YAML frontmatter (name + description)
 *   - Emoji header order
 *   - Line count (150-300)
 *   - Forbidden terms
 *   - Folder naming convention
 *
 * Usage:
 *   node scripts/validate.js          # Full validation
 *   node scripts/validate.js --list   # List skills only
 *   node scripts/validate.js --fix    # Auto-fix trailing whitespace & line endings
 *
 * Exit code 1 if any failures.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SKILLS_DIR = path.join(ROOT, "skills");

const DEPARTMENTS = ["pra", "cdm", "nmc", "genai", "vcd", "rma"];

const EXPECTED_EMOJI_ORDER = [
  "\u{1F9E0}", // 🧠
  "\u{1F3AF}", // 🎯
  "\u{1F6A8}", // 🚨
  "\u{1F4CB}", // 📋
  "\u{1F6E0}\uFE0F", // 🛠️
  "\u{1F4CA}", // 📊
  "\u{1F3AD}", // 🎭
  "\u{1F4C8}", // 📈
  "\u{1F4A1}", // 💡
];

const FORBIDDEN_TERMS = ["ieu", "izmir", "ekonomi"];

const MIN_LINES = 150;
const MAX_LINES = 300;
const MIN_SKILL_COUNT = 48;

// ── Helpers ─────────────────────────────────────────────────────────

function findSkillFiles() {
  const skills = [];
  for (const dept of DEPARTMENTS) {
    const deptDir = path.join(SKILLS_DIR, dept);
    if (!fs.existsSync(deptDir)) continue;
    const entries = fs.readdirSync(deptDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const skillFile = path.join(deptDir, entry.name, "SKILL.md");
      if (fs.existsSync(skillFile)) {
        skills.push({
          dept,
          folder: entry.name,
          filePath: skillFile,
        });
      }
    }
  }
  // Also check for any skill folders outside known departments
  if (fs.existsSync(SKILLS_DIR)) {
    const topEntries = fs.readdirSync(SKILLS_DIR, { withFileTypes: true });
    for (const entry of topEntries) {
      if (!entry.isDirectory() || DEPARTMENTS.includes(entry.name)) continue;
      const subEntries = fs.readdirSync(path.join(SKILLS_DIR, entry.name), {
        withFileTypes: true,
      });
      for (const sub of subEntries) {
        if (!sub.isDirectory()) continue;
        const skillFile = path.join(
          SKILLS_DIR,
          entry.name,
          sub.name,
          "SKILL.md",
        );
        if (fs.existsSync(skillFile)) {
          skills.push({
            dept: entry.name,
            folder: sub.name,
            filePath: skillFile,
          });
        }
      }
    }
  }
  return skills.sort((a, b) => a.filePath.localeCompare(b.filePath));
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const raw = match[1];
  const result = {};
  // Simple YAML key extraction (handles multiline values with >)
  let currentKey = null;
  for (const line of raw.split(/\r?\n/)) {
    const keyMatch = line.match(/^(\w[\w-]*):\s*(.*)/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      result[currentKey] = keyMatch[2].trim();
    } else if (currentKey && (line.startsWith("  ") || line.startsWith("\t"))) {
      result[currentKey] += " " + line.trim();
    }
  }
  return result;
}

function extractEmojiHeaders(content) {
  const lines = content.split(/\r?\n/);
  const found = [];
  for (const line of lines) {
    const headerMatch = line.match(/^###\s+(.)/u);
    if (headerMatch) {
      // Extract the emoji (may be multi-codepoint)
      const afterHash = line.replace(/^###\s+/, "");
      for (const emoji of EXPECTED_EMOJI_ORDER) {
        if (afterHash.startsWith(emoji)) {
          found.push(emoji);
          break;
        }
      }
    }
  }
  return found;
}

function checkFolderNaming(folder) {
  return /^alterlab-[a-z]+-[a-z][a-z0-9-]*$/.test(folder);
}

function checkForbiddenTerms(content) {
  const lower = content.toLowerCase();
  const found = [];
  for (const term of FORBIDDEN_TERMS) {
    // Use word boundary-like check to avoid false positives
    const regex = new RegExp(term, "gi");
    if (regex.test(lower)) {
      found.push(term);
    }
  }
  return found;
}

// ── Validation ──────────────────────────────────────────────────────

function validateSkill(skill) {
  const errors = [];
  const warnings = [];
  const content = fs.readFileSync(skill.filePath, "utf-8");
  const lines = content.split(/\r?\n/);
  const lineCount = lines.length;

  // 1. Frontmatter
  const fm = parseFrontmatter(content);
  if (!fm) {
    errors.push("Missing YAML frontmatter (--- delimiters)");
  } else {
    if (!fm.name) errors.push("Frontmatter missing 'name' field");
    if (!fm.description) errors.push("Frontmatter missing 'description' field");
    // Check name matches folder
    if (fm.name) {
      const cleanName = fm.name.replace(/^["']|["']$/g, "");
      if (cleanName !== skill.folder) {
        warnings.push(
          `Frontmatter name "${cleanName}" does not match folder "${skill.folder}"`,
        );
      }
    }
  }

  // 2. Emoji header order
  const foundEmojis = extractEmojiHeaders(content);
  if (foundEmojis.length === 0) {
    errors.push("No emoji section headers found");
  } else {
    // Check order: each found emoji should appear in EXPECTED_EMOJI_ORDER
    // and they should be in increasing index order
    let lastIndex = -1;
    for (const emoji of foundEmojis) {
      const idx = EXPECTED_EMOJI_ORDER.indexOf(emoji);
      if (idx === -1) {
        errors.push(`Unexpected emoji header: ${emoji}`);
      } else if (idx <= lastIndex) {
        errors.push(
          `Emoji headers out of order: ${emoji} appears after ${EXPECTED_EMOJI_ORDER[lastIndex]}`,
        );
        break;
      } else {
        lastIndex = idx;
      }
    }
  }

  // 3. Line count
  if (lineCount < MIN_LINES) {
    errors.push(`Line count ${lineCount} is below minimum ${MIN_LINES}`);
  } else if (lineCount > MAX_LINES) {
    errors.push(`Line count ${lineCount} exceeds maximum ${MAX_LINES}`);
  }

  // 4. Forbidden terms
  const forbidden = checkForbiddenTerms(content);
  if (forbidden.length > 0) {
    errors.push(`Forbidden terms found: ${forbidden.join(", ")}`);
  }

  // 5. Folder naming
  if (!checkFolderNaming(skill.folder)) {
    errors.push(
      `Folder name "${skill.folder}" does not match pattern alterlab-{dept}-{name}`,
    );
  }

  return { errors, warnings, lineCount };
}

// ── Auto-fix ────────────────────────────────────────────────────────

function fixSkill(skill) {
  let content = fs.readFileSync(skill.filePath, "utf-8");
  let changed = false;

  // Fix CRLF to LF
  if (content.includes("\r\n")) {
    content = content.replace(/\r\n/g, "\n");
    changed = true;
  }

  // Trim trailing whitespace on each line
  const lines = content.split("\n");
  const trimmed = lines.map((line) => line.replace(/\s+$/, ""));
  const joined = trimmed.join("\n");
  if (joined !== content) {
    content = joined;
    changed = true;
  }

  // Ensure final newline
  if (!content.endsWith("\n")) {
    content += "\n";
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(skill.filePath, content, "utf-8");
  }
  return changed;
}

// ── Main ────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const listMode = args.includes("--list");
  const fixMode = args.includes("--fix");

  const skills = findSkillFiles();

  if (listMode) {
    console.log(`\nAlterLab FC Skills — ${skills.length} skills found\n`);
    const byDept = {};
    for (const s of skills) {
      if (!byDept[s.dept]) byDept[s.dept] = [];
      byDept[s.dept].push(s.folder);
    }
    for (const dept of Object.keys(byDept).sort()) {
      console.log(`  ${dept.toUpperCase()} (${byDept[dept].length}):`);
      for (const folder of byDept[dept]) {
        console.log(`    - ${folder}`);
      }
      console.log();
    }
    process.exit(0);
  }

  if (fixMode) {
    console.log("\nAlterLab FC Skills — Auto-fix mode\n");
    let fixCount = 0;
    for (const skill of skills) {
      const fixed = fixSkill(skill);
      if (fixed) {
        console.log(`  FIXED  ${skill.folder}`);
        fixCount++;
      }
    }
    console.log(`\n${fixCount} file(s) fixed.\n`);
    process.exit(0);
  }

  // Full validation
  console.log("\nAlterLab FC Skills — Validation Report\n");
  console.log("=".repeat(60));

  let totalErrors = 0;
  let totalWarnings = 0;
  let passed = 0;
  let failed = 0;

  for (const skill of skills) {
    const result = validateSkill(skill);
    const hasErrors = result.errors.length > 0;
    const status = hasErrors ? "FAIL" : "PASS";
    const icon = hasErrors ? "x" : "v";

    if (hasErrors) {
      console.log(
        `\n  [${icon}] ${status}  ${skill.folder} (${result.lineCount} lines)`,
      );
      for (const err of result.errors) {
        console.log(`         - ${err}`);
      }
      failed++;
    } else {
      console.log(
        `  [${icon}] ${status}  ${skill.folder} (${result.lineCount} lines)`,
      );
      passed++;
    }

    for (const warn of result.warnings) {
      console.log(`         ~ ${warn}`);
    }

    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;
  }

  console.log("\n" + "=".repeat(60));
  console.log(`\n  Total skills: ${skills.length}`);
  console.log(`  Passed:       ${passed}`);
  console.log(`  Failed:       ${failed}`);
  console.log(`  Errors:       ${totalErrors}`);
  console.log(`  Warnings:     ${totalWarnings}`);

  if (skills.length < MIN_SKILL_COUNT) {
    console.log(
      `\n  WARNING: Expected at least ${MIN_SKILL_COUNT} skills, found ${skills.length}`,
    );
    totalErrors++;
  }

  console.log();

  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
