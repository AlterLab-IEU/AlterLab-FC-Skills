# Contributing to AlterLab FC Skills

Thanks for your interest in improving these skills! Here's how to contribute.

## Ways to Contribute

- **Improve an existing skill** — Fix errors, add frameworks, improve prompts
- **Report issues** — Found a skill that gives bad output? Open an issue
- **Suggest new skills** — Have an idea for a skill we're missing? Let us know

## How to Submit a Change

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b improve/cdm-screenwriter
   ```
3. Edit the skill file (e.g., `skills/cdm/alterlab-cdm-screenwriter/SKILL.md`)
4. Run validation locally:
   ```bash
   npm run validate
   ```
5. Fix any auto-fixable issues:
   ```bash
   npm run validate:fix
   ```
6. Commit with a descriptive message:
   ```bash
   git commit -m "improve: alterlab-cdm-screenwriter — better dialogue coaching"
   ```
7. Push and open a Pull Request

## Skill File Format

Every skill follows the structure defined in [`SKILL_TEMPLATE.md`](./SKILL_TEMPLATE.md). Copy it as your starting point when creating a new skill.

Key sections in a skill file:

- **Frontmatter** — YAML block with `name` and `description` (trigger phrases)
- **Role definition** — Who Claude becomes
- **Core Mission** — At least 3 mission areas
- **Critical Rules** — Non-negotiable domain standards
- **Core Capabilities** — Detailed sub-capabilities
- **Workflow** — Step-by-step professional process
- **Output Formats** — At least 3 concrete, usable templates
- **Communication Style** — Voice characteristics
- **Success Metrics** — Measurable quality targets
- **Example Use Cases** — 5+ realistic student prompts

## Quality Requirements

All skills must pass `npm run validate` before merging. The validator checks:

### Line Count
- **Minimum**: 150 lines
- **Maximum**: 300 lines
- Aim for 200-250 lines for optimal density

### YAML Frontmatter
- Must include `name` field matching the folder name
- Must include `description` field with multiple trigger phrases
- Description should be "pushy" — include many natural-language phrases so Claude activates the skill readily

### Emoji Header Order
H3 section headers must use these emojis in this exact order (some may be omitted, but order must be preserved):

🧠 🎯 🚨 📋 🛠️ 📊 🎭 📈 💡

### Forbidden Content
- No university-specific references (e.g., "IEU", "Izmir", "Ekonomi")
- Skills must be universally applicable to any communication student globally

### Naming Convention
- Folder: `alterlab-{dept}-{skill-name}` (lowercase, hyphenated)
- Agent names: CamelCase compounds (e.g., `CampaignStrategist`, `PodcastProducer`)
- Departments: `pra`, `cdm`, `nmc`, `genai`

## Pull Request Process

1. Ensure `npm run validate` passes with zero errors
2. Fill out the PR template completely (all checkboxes)
3. One skill per PR for new skills; multiple improvements can be batched
4. PRs are reviewed for both technical validity and content quality
5. CI will automatically run validation on every PR

## Commit Message Convention

We use a simple prefix convention:

- `feat:` — Adding a new skill
- `improve:` — Enhancing an existing skill
- `fix:` — Correcting errors in a skill
- `docs:` — Documentation changes
- `chore:` — Maintenance tasks

## Code of Conduct

Be respectful, constructive, and inclusive. We're building tools to help students learn.

## Questions?

Open an issue or reach out to the [AlterLab](https://github.com/AlterLab-IEU) team.
