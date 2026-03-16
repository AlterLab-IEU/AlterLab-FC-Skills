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
4. Commit with a descriptive message:
   ```bash
   git commit -m "improve: alterlab-cdm-screenwriter — better dialogue coaching"
   ```
5. Push and open a Pull Request

## Skill File Format

Every skill follows the structure defined in [`SKILL_TEMPLATE.md`](./SKILL_TEMPLATE.md). Please review it before making changes.

Key sections in a skill file:

- **Role definition** — Who Claude becomes
- **Frameworks** — Industry methodologies and models
- **Output templates** — Deliverable formats
- **Workflow** — Step-by-step process guidance
- **Principles** — Opinionated expert knowledge

## Commit Message Convention

We use a simple prefix convention:

- `improve:` — Enhancing an existing skill
- `fix:` — Correcting errors in a skill
- `feat:` — Adding a new skill
- `docs:` — Documentation changes
- `chore:` — Maintenance tasks

## Code of Conduct

Be respectful, constructive, and inclusive. We're building tools to help students learn.

## Questions?

Open an issue or reach out to the [AlterLab](https://github.com/AlterLab-IEU) team.
