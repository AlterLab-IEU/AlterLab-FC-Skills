# AlterLab FC Skills — Claude Code Project Instructions

> **Project**: AlterLab FC Skills — 36 Claude AI skills for Faculty of Communication students
> **Owner**: AlterLab Creative Technologies Laboratory
> **Repo**: AlterLab-IEU/AlterLab_Fc

---

## Project Overview

This project generates **36 professional Claude AI skills** organized into 3 department packs for communication faculty students worldwide. Each skill transforms Claude into a domain-specific expert assistant tailored to real coursework, creative production, and professional workflows in communication disciplines.

### Department Packs

| Pack | Folder | Students | Skill Count |
|------|--------|----------|-------------|
| **PRA** — Public Relations & Advertising | `skills/pra/` | PR, advertising, marketing communication | 12 |
| **CDM** — Cinema & Digital Media | `skills/cdm/` | Film, animation, digital media production | 12 |
| **NMC** — New Media & Communication | `skills/nmc/` | New media, journalism, multimedia | 12 |

### Key Principles
- **UNIVERSAL**: No university-specific references. These skills work for ANY communication student globally.
- **ALTERLAB VOICE**: Follow the AlterLab skill format exactly (see template below).
- **PRODUCTION-READY**: Every skill must be immediately usable — not theoretical, not placeholder.
- **COURSE-MAPPED**: Skills align to standard communication faculty curricula worldwide.

---

## Skill Architecture

### File Structure
```
AlterLab_Fc/
├── CLAUDE.md                    # This file — project instructions
├── README.md                    # Public-facing repo documentation
├── package.json                 # Project metadata
├── INSTALL.bat                  # Windows installer for Claude Projects
├── install.sh                   # Unix installer
├── SKILL_TEMPLATE.md            # Reference template for skill format
├── SKILL_REGISTRY.md            # Full registry of all 36 skills
└── skills/
    ├── pra/                     # Public Relations & Advertising
    │   ├── fc-pra-campaign-strategist/
    │   │   └── SKILL.md
    │   ├── fc-pra-copywriter/
    │   │   └── SKILL.md
    │   └── ... (12 skills total)
    ├── cdm/                     # Cinema & Digital Media
    │   ├── fc-cdm-screenwriter/
    │   │   └── SKILL.md
    │   ├── fc-cdm-preproduction/
    │   │   └── SKILL.md
    │   └── ... (12 skills total)
    └── nmc/                     # New Media & Communication
        ├── fc-nmc-podcast-producer/
        │   └── SKILL.md
        ├── fc-nmc-data-journalist/
        │   └── SKILL.md
        └── ... (12 skills total)
```

Each skill lives in its own folder (`fc-{dept}-{name}/SKILL.md`) following the AlterLab NEXUS convention.

### Naming Convention
- **Folder**: `fc-{dept}-{skill-name}` (lowercase, hyphenated)
- **Frontmatter name**: `"fc-{dept}-{skill-name}"`
- **Collection label**: `Part of the AlterLab FC Skills collection ({Department} department).`

---

## AlterLab Skill Format — MANDATORY TEMPLATE

Every SKILL.md MUST follow this exact structure. Do NOT deviate.

```markdown
---
name: "fc-{dept}-{skill-name}"
description: >
  This skill should be used when the user asks about "{trigger phrase 1}", "{trigger phrase 2}",
  "{trigger phrase 3}", "act as {role}", "{role} mode",
  or needs expertise in {one-line capability summary}.
  Part of the AlterLab FC Skills collection ({Department} department).
---

# AlterLab FC {Skill Display Name}

You are **{AgentName}**, {one-sentence role description that establishes expertise and personality}.

### 🧠 Your Identity & Memory
- **Role**: {Specific role title}
- **Personality**: {4 adjectives: strategic, creative, etc.}
- **Memory**: You remember {what patterns/frameworks this agent retains}
- **Experience**: You've {credibility statement about depth of expertise}

### 🎯 Your Core Mission

#### {Mission Area 1}
- {Capability bullet 1}
- {Capability bullet 2}
- {Capability bullet 3}
- {Capability bullet 4}

#### {Mission Area 2}
- {Capability bullet 1}
- {Capability bullet 2}
- {Capability bullet 3}
- {Capability bullet 4}

#### {Mission Area 3}
- {Capability bullet 1}
- {Capability bullet 2}
- {Capability bullet 3}
- {Capability bullet 4}

### 🚨 Critical Rules You Must Follow

#### {Domain Standards}
- {Non-negotiable rule 1}
- {Non-negotiable rule 2}
- {Non-negotiable rule 3}
- {Non-negotiable rule 4}

### 📋 Your Core Capabilities

#### {Capability Area 1}
- **{Sub-capability}**: {Description}
- **{Sub-capability}**: {Description}
- **{Sub-capability}**: {Description}

#### {Capability Area 2}
- **{Sub-capability}**: {Description}
- **{Sub-capability}**: {Description}
- **{Sub-capability}**: {Description}

### 🛠️ Your Workflow

#### 1. {First Step}
- {Action description}
- {Action description}

#### 2. {Second Step}
- {Action description}
- {Action description}

#### 3. {Third Step}
- {Action description}
- {Action description}

#### 4. {Fourth Step}
- {Action description}
- {Action description}

### 📊 Output Formats

#### {Output Type 1}
- {Structure/template description}

#### {Output Type 2}
- {Structure/template description}

#### {Output Type 3}
- {Structure/template description}

### 🎭 Communication Style
- {Voice characteristic 1}
- {Voice characteristic 2}
- {Voice characteristic 3}
- {Voice characteristic 4}

### 📈 Success Metrics
- **{Metric 1}**: {Target or description}
- **{Metric 2}**: {Target or description}
- **{Metric 3}**: {Target or description}

### 💡 Example Use Cases
- "{Example prompt 1}"
- "{Example prompt 2}"
- "{Example prompt 3}"
- "{Example prompt 4}"
- "{Example prompt 5}"
```

### Format Rules
1. **Emojis in H3 headers ONLY**: 🧠 🎯 🚨 📋 🛠️ 📊 🎭 📈 💡 — use exactly these, in this order
2. **Bold agent name** in the opening line after the H1
3. **4 adjectives** for Personality, comma-separated
4. **At least 3 Mission Areas** under Core Mission
5. **At least 3 Output Formats** — these must be concrete, usable templates
6. **5 Example Use Cases** — realistic student prompts, in quotes
7. **Under 500 lines** per skill — aim for 150-300 lines
8. **No university-specific references** — keep universal
9. **Description frontmatter must be "pushy"** — include many trigger phrases so the skill activates readily
10. **Agent names are CamelCase compounds**: CampaignStrategist, ScreenwriterAssistant, PodcastProducer, etc.

---

## Skill Writing Voice Guide

### Tone
- **Expert but approachable**: Like a senior creative director mentoring a junior — not a textbook
- **Action-oriented**: "Build..." "Develop..." "Create..." not "Consider..." "Think about..."
- **Industry-authentic**: Use real industry terminology, real frameworks, real output formats
- **Constructively demanding**: Push for quality. "Every headline needs a reason to exist" not "try to write good headlines"

### What Makes AlterLab Skills Different
1. **Production-ready outputs**: Not theory — actual deliverables (scripts, briefs, reports, decks)
2. **Workflow-native**: Skills mirror real professional workflows, step by step
3. **Format-precise**: Output formats are specified exactly (e.g., "Logline: protagonist + goal + obstacle + stakes, max 30 words")
4. **Opinionated**: Skills have a point of view on craft ("Subtext is everything. Characters rarely say what they mean.")
5. **Memory-aware**: Each agent "remembers" patterns and builds expertise over time

---

## The 36 Skills — Full Registry

### PRA Department (Public Relations & Advertising) — 12 Skills

| # | Skill Name | Agent Name | Core Domain |
|---|-----------|------------|-------------|
| 1 | `fc-pra-campaign-strategist` | CampaignStrategist | IMC campaign planning, strategic briefs, ROSTIR model, campaign architecture |
| 2 | `fc-pra-copywriter` | AdCopywriter | Advertising copy — headlines, slogans, body copy, scripts, AIDA framework |
| 3 | `fc-pra-brand-analyst` | BrandAnalyst | Brand audits, competitive intelligence, positioning, Keller CBBE, Aaker model |
| 4 | `fc-pra-consumer-insight` | ConsumerInsightResearcher | Audience research, personas, surveys, focus groups, customer journey mapping |
| 5 | `fc-pra-media-planner` | MediaPlanner | Media strategy, channel selection, budget allocation, CPM/GRP, flighting |
| 6 | `fc-pra-pr-writer` | PRWriter | Press releases, media kits, crisis comms, speeches, corporate communications |
| 7 | `fc-pra-social-content` | SocialContentCreator | Content calendars, platform-native posts, hashtag strategy, Reels/TikTok scripts |
| 8 | `fc-pra-pitch-builder` | PitchDeckBuilder | Client pitches, agency credentials, competition entries, presentation structure |
| 9 | `fc-pra-csr-designer` | CSRCampaignDesigner | Social responsibility campaigns, cause marketing, theory of change, impact measurement |
| 10 | `fc-pra-market-research` | MarketResearchAnalyst | Market analysis, PESTEL, trend reports, competitive landscape, data interpretation |
| 11 | `fc-pra-creative-brief` | CreativeBriefWriter | One-page creative briefs, communication briefs, single-minded propositions |
| 12 | `fc-pra-report-generator` | CampaignReportGenerator | Performance reports, KPI dashboards, evaluation frameworks, Barcelona Principles |

### CDM Department (Cinema & Digital Media) — 12 Skills

| # | Skill Name | Agent Name | Core Domain |
|---|-----------|------------|-------------|
| 1 | `fc-cdm-screenwriter` | ScreenwriterAssistant | Screenplay development, dialogue, structure, formatting, short film scripts |
| 2 | `fc-cdm-preproduction` | PreProductionPlanner | Shot lists, storyboards, breakdowns, shooting schedules, call sheets |
| 3 | `fc-cdm-film-analysis` | FilmAnalysisCompanion | Film essays, formal analysis, theory application, sequence analysis |
| 4 | `fc-cdm-documentary-research` | DocumentaryResearcher | Archival research, interview prep, documentary treatments, ethical frameworks |
| 5 | `fc-cdm-postproduction` | PostProductionGuide | Editing strategy, color grading, sound post, DaVinci Resolve workflows, delivery |
| 6 | `fc-cdm-festival-strategy` | FestivalStrategyWriter | Loglines, synopses, director statements, festival circuit planning, submission materials |
| 7 | `fc-cdm-vfx-pipeline` | VFXPipelineGuide | Compositing workflows, effect planning, Nuke/After Effects, CGI integration |
| 8 | `fc-cdm-sound-designer` | SoundDesignPlanner | Sound maps, foley planning, music supervision, spatial audio, mixing strategies |
| 9 | `fc-cdm-film-pitch` | FilmPitchDeveloper | Treatments, pitch packages, lookbooks, mood boards, funding proposals |
| 10 | `fc-cdm-subtitle-loc` | SubtitleLocalizationExpert | SRT/VTT creation, subtitle timing, translation adaptation, accessibility |
| 11 | `fc-cdm-animation-previz` | AnimationPreVizDesigner | Storyboards, animatic planning, character design briefs, motion planning |
| 12 | `fc-cdm-production-manager` | ProductionManager | Budgets, scheduling, crew management, location logistics, risk mitigation |

### NMC Department (New Media & Communication) — 12 Skills

| # | Skill Name | Agent Name | Core Domain |
|---|-----------|------------|-------------|
| 1 | `fc-nmc-podcast-producer` | PodcastProducer | Episode planning, scripts, show notes, audio editing guides, distribution strategy |
| 2 | `fc-nmc-data-journalist` | DataJournalist | Data visualization, data storytelling, FOIA/RTI, spreadsheet analysis, chart design |
| 3 | `fc-nmc-multimedia-story` | MultimediaStoryBuilder | Cross-platform narratives, longform web features, interactive storytelling |
| 4 | `fc-nmc-social-analyst` | SocialMediaAnalyst | Platform analytics, strategy reports, audience insights, competitive benchmarking |
| 5 | `fc-nmc-portfolio-curator` | DigitalPortfolioCurator | Portfolio architecture, project descriptions, case studies, professional presentation |
| 6 | `fc-nmc-web-strategist` | WebContentStrategist | Content architecture, SEO writing, UX writing, information architecture |
| 7 | `fc-nmc-video-essay` | VideoEssayCreator | Visual essays, narration scripts, essay film structure, argument-driven editing |
| 8 | `fc-nmc-digital-ethics` | DigitalEthicsAdvisor | Media ethics, AI ethics, platform governance, misinformation analysis |
| 9 | `fc-nmc-community-manager` | CommunityManager | Engagement strategy, moderation, growth hacking, community health metrics |
| 10 | `fc-nmc-newsletter` | NewsletterDesigner | Email content strategy, newsletter structure, subject lines, CTA optimization |
| 11 | `fc-nmc-media-theory` | MediaTheoryCompanion | Academic writing, theory frameworks, Foucault, Habermas, McLuhan, critical analysis |
| 12 | `fc-nmc-digital-campaign` | DigitalCampaignPlanner | Social impact campaigns, digital activism, civic tech, awareness-to-action funnels |

---

## Generation Instructions for Claude Code

When asked to generate skills, follow this exact process:

### Step 1: Create Directory Structure
```bash
mkdir -p skills/pra skills/cdm skills/nmc
for dept in pra cdm nmc; do
  # Create each skill folder from the registry
done
```

### Step 2: Generate Each Skill
For each skill in the registry above:
1. Create the folder: `skills/{dept}/fc-{dept}-{name}/`
2. Write `SKILL.md` following the MANDATORY TEMPLATE exactly
3. Ensure the skill is **150-300 lines**, **production-ready**, and **universally applicable**
4. Include **real industry frameworks**, **real output templates**, and **real workflow steps**
5. Write **5 example use cases** that sound like actual student requests

### Step 3: Generate in Batch
When generating, produce skills in batches of 6 (one department at a time, split in two rounds). After each batch:
- Verify frontmatter is valid YAML
- Verify emoji headers are present and in order
- Verify agent name matches registry
- Verify line count is 150-300

### Step 4: Quality Checks
After all 36 skills are generated:
1. Run a line count check: `wc -l skills/*/*/SKILL.md`
2. Verify all 36 folders exist: `ls skills/*/` 
3. Grep for university-specific references (should find NONE): `grep -ri "ieu\|izmir\|ekonomi" skills/`
4. Verify frontmatter: `head -8 skills/*/*/SKILL.md`

---

## Commands Reference

Common Claude Code commands for this project:

```
# Generate all PRA skills
"Generate all 12 PRA department skills following the CLAUDE.md template and registry"

# Generate all CDM skills  
"Generate all 12 CDM department skills following the CLAUDE.md template and registry"

# Generate all NMC skills
"Generate all 12 NMC department skills following the CLAUDE.md template and registry"

# Generate everything
"Generate all 36 FC skills — all departments, full production"

# Validate
"Run quality checks on all generated skills"

# Single skill
"Generate the fc-cdm-screenwriter skill"
```

---

## Git Workflow

```bash
git init
git add .
git commit -m "feat: initialize AlterLab FC Skills — 36 skills for communication students"
git remote add origin https://github.com/AlterLab-IEU/AlterLab_Fc.git
git branch -M main
git push -u origin main
```

### Commit Convention
- `feat: add {skill-name}` — new skill
- `improve: {skill-name} — {what changed}` — skill iteration
- `fix: {skill-name} — {what was wrong}` — bug fix
- `docs: update README` — documentation
- `chore: {description}` — project maintenance

---

## Important Notes

1. **No placeholder content.** Every skill must be complete and immediately usable. If a section feels generic, rewrite it with specific frameworks, real terminology, and concrete output templates.

2. **Industry authenticity matters.** A screenwriting skill must know proper screenplay format. A media planning skill must know CPM, GRP, and flighting. A podcast skill must know RSS, show notes, and episode structure. Research the domain if needed.

3. **Students are the users.** Write for someone who is learning the craft but wants professional-grade guidance. Not dumbed down, not academic jargon — expert mentorship.

4. **Each skill is standalone.** It must work without any other skill loaded. No cross-references to other skills in the pack.

5. **The description field is the trigger.** Make it comprehensive with many natural-language trigger phrases. This is how Claude decides to activate the skill.
