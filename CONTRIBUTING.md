# Contributing to AlterLab FC Skills

Thank you for your interest in contributing to AlterLab FC Skills. This guide explains how to add new skills, submit changes, and maintain quality across the project.

## Code of Conduct

All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before participating.

## How to Add a New Skill

### 1. Choose a Department

Skills must belong to one of the following departments:

| Department | Path | Description |
|-----------|------|-------------|
| PRA | skills/pra/ | Public Relations & Advertising |
| CDM | skills/cdm/ | Cinema & Digital Media |
| NMC | skills/nmc/ | New Media & Communication |
| GenAI | skills/genai/ | Generative AI Production |
| VCD | skills/vcd/ | Visual Communication Design |
| RMA | skills/rma/ | Research Methods & Academic Writing |

If your skill does not fit any existing department, open an issue to discuss adding a new one.

### 2. Naming Convention

- Folder name: `alterlab-{dept}-{name}` (lowercase, hyphenated)
- Examples: `alterlab-pra-campaign-strategist`, `alterlab-cdm-screenwriter`, `alterlab-genai-text-to-image`

### 3. Folder Structure

```
skills/{department}/alterlab-{dept}-{name}/
  SKILL.md          # The skill definition (required)
```

### 4. SKILL.md Template

Every skill must have a SKILL.md file with YAML frontmatter followed by the skill prompt content:

```yaml
---
name: "alterlab-{dept}-{name}"
description: "One-line description of what the skill does."
version: "1.0"
license: "MIT"
metadata:
  skill-author: "AlterLab"
  department: "{department}"
  tags:
    - tag1
    - tag2
---
```

**Required frontmatter fields:**

- `name` — must match `alterlab-{dept}-{name}` pattern
- `description` — concise, one-line summary
- `version` — semver format
- `license` — must be MIT
- `metadata.skill-author` — must be AlterLab
- `metadata.department` — must match the parent folder name

## Pull Request Process

1. Fork the repository and create a feature branch from `main`.
2. Follow the naming conventions described above.
3. Include a clear PR description explaining:
   - What the skill does
   - Which department it belongs to
   - Any external APIs or services it depends on
4. One skill per PR unless the skills are closely related.
5. Test your skill before submitting:
   - Verify the YAML frontmatter parses correctly
   - Confirm the skill works as intended with Claude
   - Check for prompt injection vulnerabilities in any user-facing input handling
6. Wait for review — a maintainer will review your PR and may request changes.

## Commit Convention

Follow the project commit convention:

- `feat: add {skill-name}` — new skill
- `improve: {skill-name} — {what changed}` — skill enhancement
- `fix: {skill-name} — {what was wrong}` — bug fix
- `docs: update {what}` — documentation changes
- `chore: {description}` — project maintenance

## Testing Guidelines

- Validate YAML frontmatter syntax (no tabs, proper quoting)
- Test the skill prompt with Claude to verify it produces expected behavior
- Check that the skill does not request or expose sensitive information (API keys, credentials)
- Verify the skill handles edge cases gracefully (empty input, malformed data)
- Review for prompt injection risks — skills should not blindly pass untrusted user input into sensitive operations

## Modifying Existing Skills

- Bump the `version` field in the frontmatter
- Describe the change in your commit message using the `improve:` prefix
- If the change is a breaking modification to the skill's behavior, note it in the PR description

## Reporting Issues

Open a GitHub issue with:

- The skill name and department
- Steps to reproduce the problem
- Expected vs. actual behavior
- Claude model version used (if relevant)

## Questions?

Open a discussion or issue on the repository. We welcome suggestions for new departments, skill improvements, and documentation enhancements.
