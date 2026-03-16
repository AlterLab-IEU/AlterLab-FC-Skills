# AlterLab FC Skills — Claude Code CLI Prompts

> Copy-paste these prompts into Claude Code CLI in order.
> Run from: `C:\Users\Asus\Desktop\Cem ipek\AlterLab_Fc`

---

## PROMPT 1 — Generate All 36 Skills (Single Command)

```
Read CLAUDE.md and SKILL_TEMPLATE.md carefully. You are generating all 36 AlterLab FC Skills — 12 for PRA, 12 for CDM, 12 for NMC. Each skill replaces the placeholder SKILL.md in its folder under skills/.

CRITICAL RULES:
- Follow the SKILL_TEMPLATE.md format EXACTLY — emoji headers in order (🧠🎯🚨📋🛠️📊🎭📈💡), CamelCase agent names, YAML frontmatter with pushy trigger descriptions
- Each SKILL.md must be 150-300 lines, production-ready, zero placeholders
- NO university-specific references — these are universal for any communication student
- Use REAL industry frameworks, REAL output templates, REAL professional terminology
- Agent names and domains are defined in the registry table in CLAUDE.md — follow them exactly
- Every skill needs: 3+ mission areas, 3+ output formats with concrete templates, 5 example use cases

GENERATION ORDER:
1. First generate all 12 PRA skills (skills/pra/alterlab-pra-*/SKILL.md)
2. Then all 12 CDM skills (skills/cdm/alterlab-cdm-*/SKILL.md)
3. Then all 12 NMC skills (skills/nmc/alterlab-nmc-*/SKILL.md)

For each skill, read the registry entry in CLAUDE.md for the agent name and core domain, then write a complete SKILL.md following the template. Write the file directly — do not ask for confirmation between skills.

After all 36 are written, run validation:
- wc -l skills/*/*/SKILL.md (verify 150-300 lines each)
- grep -ri "ieu\|izmir\|ekonomi" skills/ (must return nothing)
- find skills -name "SKILL.md" | wc -l (must be 36)

Start now. Generate all 36 skills.
```

---

## ALTERNATIVE — Generate Department by Department

If the single prompt hits context limits, use these three separate prompts:

### PROMPT 2A — PRA Department Only

```
Read CLAUDE.md and SKILL_TEMPLATE.md. Generate all 12 PRA department skills. Each skill replaces the placeholder in skills/pra/alterlab-pra-*/SKILL.md.

The 12 PRA skills from the registry:
1. alterlab-pra-campaign-strategist — CampaignStrategist — IMC campaign planning, strategic briefs, ROSTIR model
2. alterlab-pra-copywriter — AdCopywriter — Headlines, slogans, body copy, scripts, AIDA framework
3. alterlab-pra-brand-analyst — BrandAnalyst — Brand audits, competitive intelligence, positioning, Keller CBBE
4. alterlab-pra-consumer-insight — ConsumerInsightResearcher — Personas, surveys, focus groups, journey mapping
5. alterlab-pra-media-planner — MediaPlanner — Channel strategy, budget allocation, CPM/GRP, flighting
6. alterlab-pra-pr-writer — PRWriter — Press releases, media kits, crisis comms, speeches
7. alterlab-pra-social-content — SocialContentCreator — Content calendars, platform-native posts, hashtag strategy
8. alterlab-pra-pitch-builder — PitchDeckBuilder — Client pitches, agency credentials, competition entries
9. alterlab-pra-csr-designer — CSRCampaignDesigner — Social responsibility campaigns, cause marketing, impact measurement
10. alterlab-pra-market-research — MarketResearchAnalyst — PESTEL, trend reports, competitive landscape
11. alterlab-pra-creative-brief — CreativeBriefWriter — One-page creative briefs, single-minded propositions
12. alterlab-pra-report-generator — CampaignReportGenerator — Performance reports, KPI dashboards, Barcelona Principles

Rules: Follow SKILL_TEMPLATE.md exactly. 150-300 lines each. No university references. Real industry frameworks. Write all 12 without stopping. Validate line counts after.
```

### PROMPT 2B — CDM Department Only

```
Read CLAUDE.md and SKILL_TEMPLATE.md. Generate all 12 CDM department skills. Each skill replaces the placeholder in skills/cdm/alterlab-cdm-*/SKILL.md.

The 12 CDM skills from the registry:
1. alterlab-cdm-screenwriter — ScreenwriterAssistant — Screenplay development, dialogue, structure, formatting
2. alterlab-cdm-preproduction — PreProductionPlanner — Shot lists, storyboards, breakdowns, shooting schedules
3. alterlab-cdm-film-analysis — FilmAnalysisCompanion — Film essays, formal analysis, theory application
4. alterlab-cdm-documentary-research — DocumentaryResearcher — Archival research, interview prep, treatments
5. alterlab-cdm-postproduction — PostProductionGuide — Editing strategy, color grading, sound post, delivery
6. alterlab-cdm-festival-strategy — FestivalStrategyWriter — Loglines, synopses, director statements, festival planning
7. alterlab-cdm-vfx-pipeline — VFXPipelineGuide — Compositing workflows, Nuke/After Effects, CGI integration
8. alterlab-cdm-sound-designer — SoundDesignPlanner — Sound maps, foley, music supervision, spatial audio
9. alterlab-cdm-film-pitch — FilmPitchDeveloper — Treatments, lookbooks, mood boards, funding proposals
10. alterlab-cdm-subtitle-loc — SubtitleLocalizationExpert — SRT/VTT creation, timing, translation, accessibility
11. alterlab-cdm-animation-previz — AnimationPreVizDesigner — Storyboards, animatics, character design briefs
12. alterlab-cdm-production-manager — ProductionManager — Budgets, scheduling, crew management, risk mitigation

Rules: Follow SKILL_TEMPLATE.md exactly. 150-300 lines each. No university references. Real cinema/film industry terminology and workflows. Write all 12 without stopping. Validate after.
```

### PROMPT 2C — NMC Department Only

```
Read CLAUDE.md and SKILL_TEMPLATE.md. Generate all 12 NMC department skills. Each skill replaces the placeholder in skills/nmc/alterlab-nmc-*/SKILL.md.

The 12 NMC skills from the registry:
1. alterlab-nmc-podcast-producer — PodcastProducer — Episode planning, scripts, show notes, distribution
2. alterlab-nmc-data-journalist — DataJournalist — Data visualization, data storytelling, spreadsheet analysis
3. alterlab-nmc-multimedia-story — MultimediaStoryBuilder — Cross-platform narratives, longform web features
4. alterlab-nmc-social-analyst — SocialMediaAnalyst — Platform analytics, strategy reports, audience insights
5. alterlab-nmc-portfolio-curator — DigitalPortfolioCurator — Portfolio architecture, case studies, presentation
6. alterlab-nmc-web-strategist — WebContentStrategist — SEO, UX writing, content architecture
7. alterlab-nmc-video-essay — VideoEssayCreator — Visual essays, narration scripts, argument-driven editing
8. alterlab-nmc-digital-ethics — DigitalEthicsAdvisor — Media ethics, AI ethics, misinformation analysis
9. alterlab-nmc-community-manager — CommunityManager — Engagement strategy, moderation, community health
10. alterlab-nmc-newsletter — NewsletterDesigner — Email content strategy, subject lines, CTA optimization
11. alterlab-nmc-media-theory — MediaTheoryCompanion — Academic writing, Foucault, Habermas, McLuhan, critical analysis
12. alterlab-nmc-digital-campaign — DigitalCampaignPlanner — Social impact campaigns, digital activism, civic tech

Rules: Follow SKILL_TEMPLATE.md exactly. 150-300 lines each. No university references. Real new media/journalism frameworks. Write all 12 without stopping. Validate after.
```

---

## PROMPT 3 — Validation & Fix

```
Run these validation checks on all generated skills:

1. Count all skills: find skills -name "SKILL.md" | wc -l (expect 36)
2. Line counts: wc -l skills/*/*/SKILL.md (flag any under 150 or over 300)
3. University leak check: grep -ri "ieu\|izmir\|ekonomi\|university of economics" skills/ (must return nothing)
4. Frontmatter check: for f in skills/*/*/SKILL.md; do head -1 "$f"; done (all must start with ---)
5. Emoji header check: for f in skills/*/*/SKILL.md; do echo "=== $f ==="; grep -c "###" "$f"; done (each should have 9 H3 sections)
6. Agent name check: grep -h "^You are \*\*" skills/*/*/SKILL.md (verify CamelCase names)

Fix any issues found. Then show me a summary table: skill name | lines | agent name | status (pass/fail).
```

---

## PROMPT 4 — Git Push

```
Initialize git, add all files, commit with message "feat: AlterLab FC Skills v1.0 — 36 Claude AI skills for communication students", and show me the git log and status. Do not push — I will set the remote and push manually.
```

---

## PROMPT 5 — Generate SKILL_REGISTRY.md

```
Read all 36 generated SKILL.md files and create a SKILL_REGISTRY.md in the project root. It should contain:

1. A summary table with columns: Department | Skill Name | Agent Name | Trigger Keywords | Lines
2. Department sections with 2-sentence descriptions of each skill
3. A "Quick Activation" section showing example prompts for each department
4. Cross-reference recommendations: "If you're working on X, also consider loading Y"

Write this as a polished reference document students can browse to find the right skill.
```
