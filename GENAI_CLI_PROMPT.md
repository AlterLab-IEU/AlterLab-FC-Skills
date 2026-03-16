# AlterLab FC GenAI Pack — Claude Code CLI Guide

> 12 generative AI skills covering Higgsfield, ElevenLabs, and Suno
> Add to the AlterLab_Fc project as the `skills/genai/` directory

---

## STEP 1 — Create Directories

Run this in your AlterLab_Fc project root:

```bash
for skill in text-to-image image-to-video camera-director motion-designer talking-head voice-designer voice-cloner dubbing-specialist sound-effects audio-producer music-producer soundtrack-composer; do
  mkdir -p skills/genai/alterlab-genai-${skill}
  echo "# Placeholder" > skills/genai/alterlab-genai-${skill}/SKILL.md
done
```

---

## STEP 2 — CLI Prompt (Single Command)

Paste this into Claude Code:

```
Read CLAUDE.md and SKILL_TEMPLATE.md. You are generating 12 AlterLab FC GenAI skills — a generative AI production pack covering Higgsfield, ElevenLabs, and Suno. Each skill replaces the placeholder in skills/genai/alterlab-genai-*/SKILL.md.

CRITICAL CONTEXT: These skills teach students how to USE these specific cloud AI tools for creative production. Each skill must reference REAL features, REAL UI elements, REAL workflows, and REAL model names from these platforms. No generic AI advice — platform-specific mastery.

FORMAT: Follow SKILL_TEMPLATE.md exactly — emoji headers (🧠🎯🚨📋🛠️📊🎭📈💡), CamelCase agent names, YAML frontmatter, 150-300 lines, 5 example use cases, 3+ output formats. Collection label: "Part of the AlterLab FC Skills collection (GenAI pack)."

THE 12 SKILLS:

=== HIGGSFIELD (5 skills) ===

1. alterlab-genai-text-to-image — TextToImageCreator
   Platform: Higgsfield
   Features to cover: Nano Banana Pro (Gemini 3 Pro) for photorealism and text rendering, KLING for stylized outputs, Soul Cinema for cinematic-grade visuals, Seedance models. Prompt engineering for Higgsfield specifically — how to structure prompts for different models. Canvas workspace for staging and editing. Soul Inpaint for post-generation editing. Reference images for style consistency. Resolution options. Quality vs Fast modes. Character sheet workflows for consistency across generations using Soul ID.
   Key teaching: Model selection (which model for which job), prompt structure, reference image strategy, character consistency

2. alterlab-genai-image-to-video — ImageToVideoDirector
   Platform: Higgsfield
   Features to cover: Image-to-video pipeline — uploading stills and converting to motion. Soul ID for maintaining character identity across video generations. Soul Cinema Preview for cinematic-grade output. Camera motion application to still images (dolly, crane, orbit). Motion intensity and duration control. Multi-shot storytelling with Seedance 1.5 Pro. Input image quality requirements (high-res, clean subject, strong lighting). Platform format presets (16:9, 9:16, 1:1 for different social platforms). Upscaling workflow (1080p to 4K/8K).
   Key teaching: Input image optimization, motion style matching to subject, character consistency across shots

3. alterlab-genai-camera-director — AICameraDirector
   Platform: Higgsfield
   Features to cover: 50+ AI camera presets catalog — Dolly In/Out, Crane Up/Down, Crash Zoom, Bullet Time, 360 Orbit, FPV Arc, Pan, Tilt, Dutch Angle, Tracking Shot. Cinema Studio interface for director-level control — specifying camera angles, lens types, focal lengths. 21:9 cinematic format. Combining multiple camera moves in sequence. Matching camera style to content type (slow dolly for luxury, fast pan for lifestyle/hype, orbit for product showcase). Camera motion as storytelling tool — not just decoration. Turbo model for fast iteration.
   Key teaching: Camera language (when to use which move and why), combining moves for narrative effect, cinematic grammar

4. alterlab-genai-motion-designer — AIMotionDesigner
   Platform: Higgsfield
   Features to cover: VFX and effects — explosions, style transfers (Ghibli anime, watercolor, etc.), seamless transitions between scenes. Soul Inpaint for precise frame editing before animation. Canvas workspace for compositing and staging. Draw-to-Video for sketch-based animation. Kling Video Edit for adjusting elements in existing videos (expressions, backgrounds). Motion pacing and rhythm for social content. Multi-shot sequencing. Visual effects layering. Style consistency across a series. Batch generation for content series.
   Key teaching: Effects as storytelling, style transfer for brand consistency, motion pacing for engagement

5. alterlab-genai-talking-head — AITalkingHeadCreator
   Platform: Higgsfield
   Features to cover: UGC Builder (powered by Veo 3) for hyper-realistic talking-head videos. Lipsync Studio for syncing mouth movement to audio. Higgsfield Speak for generating narration with synchronized video. Selfie-to-video pipeline — uploading a photo and creating a talking presenter. Digital presenter creation for ads, testimonials, educational content. Audio input integration (upload voiceover, generate matching video). Expression and emotion control. Multiple language support for global content.
   Key teaching: Authentic-looking UGC creation, lip sync quality optimization, presenter consistency

=== ELEVENLABS (5 skills) ===

6. alterlab-genai-voice-designer — AIVoiceDesigner
   Platform: ElevenLabs
   Features to cover: Eleven v3 model — audio tags for directing emotion, pacing, non-verbal cues (sighs, laughter, pauses). Dialogue mode for conversational delivery. Voice library browsing (10,000+ voices, 70+ languages). Voice Design — creating entirely new voices from text descriptions. Stability, similarity, and style sliders for fine-tuning output. Model selection (v3 for emotional storytelling, v2.5 Turbo for fast narration). Text formatting tricks for controlling delivery. Speech-to-speech (Voice Changer) for mapping performance onto any voice.
   Key teaching: Directing AI voice performance like directing an actor, model selection for use case

7. alterlab-genai-voice-cloner — AIVoiceCloner
   Platform: ElevenLabs
   Features to cover: Instant Voice Cloning (IVC) — 10-second to 1-minute sample, fast results. Professional Voice Cloning (PVC) — longer training data, hyper-realistic results. Recording best practices (quiet room, consistent tone, 1+ minute minimum). Voice preservation for accessibility (ALS, speech conditions). Multilingual cloning — clone once, speak in 70+ languages. Voice Library monetization — sharing clones and earning credits. Consent and ethics protocols. Quality optimization — clean audio, consistent volume, no background noise.
   Key teaching: Recording techniques for best clones, instant vs professional trade-offs, ethical use

8. alterlab-genai-dubbing-specialist — AIDubbingSpecialist
   Platform: ElevenLabs
   Features to cover: Dubbing Studio — full pipeline for video translation. 29 supported languages. Automatic speaker detection and voice matching. Transcript editing and translation review before generation. Per-clip voice settings (stability, similarity, style). Clip management — merge, split, delete, move, regenerate. Timing synchronization with on-screen action. Direct import from YouTube, Vimeo, X. File format support (MP3, MP4, WAV, MOV). Multi-speaker dubbing with individual voice preservation.
   Key teaching: Quality control in dubbing workflow, when to edit transcripts vs regenerate, timing sync

9. alterlab-genai-sound-effects — AISoundEffectsDesigner
   Platform: ElevenLabs
   Features to cover: Text-to-SFX generation from natural language descriptions. Ambient audio and soundscape creation. Foley generation for film/video post-production. SFX library browsing and search. Specificity in prompts ("rain on a tin roof" not just "rain"). Layering multiple SFX for complex scenes. Sound design for different media (film, podcast, game, social video). Duration and intensity control. Combining generated SFX with voice and music.
   Key teaching: Descriptive prompting for precise results, building soundscapes from components

10. alterlab-genai-audio-producer — AIAudioProducer
    Platform: ElevenLabs
    Features to cover: Full audio post-production pipeline using ElevenLabs tools. Voice Isolator for removing background noise from recordings. Projects/Studio editor for multi-track audio assembly. Audio Native for embedding AI narration in web content. Voiceover Studio for long-form production (audiobooks, courses). Scribe v2 for transcription. Combining TTS + SFX + music into finished audio. Export formats and quality settings. Batch processing for content series. Integration with video editing workflows.
    Key teaching: End-to-end audio production pipeline, combining multiple ElevenLabs tools

=== SUNO (2 skills) ===

11. alterlab-genai-music-producer — AIMusicProducer
    Platform: Suno
    Features to cover: Song creation from text prompts — genre, mood, tempo, instrumentation. Lyrics writing and structure (verse, chorus, bridge, outro). Genre-specific prompting (lo-fi hip hop, cinematic orchestral, indie folk, electronic, etc.). Custom vs auto-generated lyrics. Song extending and variations. Covers and remixes of styles. Stems separation for mixing. Audio quality and format options. Creating music for specific durations (30-sec social, 3-min full track). Iterating on generations — what to keep, what to regenerate.
    Key teaching: Song structure basics for non-musicians, genre vocabulary, prompt iteration strategy

12. alterlab-genai-soundtrack-composer — AISoundtrackComposer
    Platform: Suno
    Features to cover: Instrumental-only generation for film, video, and content scoring. Mood-driven composition (tense, uplifting, melancholic, epic, intimate). Scene-matching — creating music that fits specific visual content. Tempo and energy arc design for longer pieces. Background music for podcasts, YouTube, social content. Ambient and atmospheric generation. Transition music and stingers. Creating consistent musical identity across a content series. Licensing considerations for generated music. Building a personal soundtrack library.
    Key teaching: Music as emotional architecture for visual content, mood vocabulary, scene-matching

GENERATION RULES:
- Write each SKILL.md directly, no confirmations between skills
- Reference ACTUAL platform features, model names, UI elements — not generic
- These are cloud tools students access via subscription, not local GPU
- Each skill teaches mastery of the SPECIFIC TOOL, not general concepts
- Include real prompting examples in Example Use Cases where relevant
- No university-specific references

After all 12, validate:
- wc -l skills/genai/*/SKILL.md
- grep -ri "ieu\|izmir\|ekonomi" skills/genai/
- find skills/genai -name "SKILL.md" | wc -l (expect 12)

Start now. Generate all 12 GenAI skills.
```

---

## STEP 3 — Update README

After generation, add this to the main README.md:

```markdown
### 🤖 GenAI — Generative AI Production (12 Skills)

| Tool | Skills | Coverage |
|------|--------|----------|
| **Higgsfield** | 5 | Text-to-image, image-to-video, camera direction, motion design, talking heads |
| **ElevenLabs** | 5 | Voice design, voice cloning, dubbing, SFX, audio production |
| **Suno** | 2 | Music production, soundtrack composition |
```

---

## STEP 4 — Git

```bash
git add skills/genai/
git commit -m "feat: add GenAI pack — 12 skills for Higgsfield, ElevenLabs, Suno"
git push
```

---

## Registry Addition

Add to CLAUDE.md registry:

### GenAI Pack — Generative AI Production (12 Skills)

| # | Skill Name | Agent Name | Platform | Core Domain |
|---|-----------|------------|----------|-------------|
| 1 | alterlab-genai-text-to-image | TextToImageCreator | Higgsfield | Nano Banana Pro, KLING, Soul Cinema, prompt engineering |
| 2 | alterlab-genai-image-to-video | ImageToVideoDirector | Higgsfield | Still-to-motion, Soul ID, multi-shot storytelling |
| 3 | alterlab-genai-camera-director | AICameraDirector | Higgsfield | 50+ camera presets, Cinema Studio, cinematic grammar |
| 4 | alterlab-genai-motion-designer | AIMotionDesigner | Higgsfield | VFX, style transfer, transitions, Canvas, Draw-to-Video |
| 5 | alterlab-genai-talking-head | AITalkingHeadCreator | Higgsfield | UGC Builder, Lipsync Studio, Speak, selfie-to-video |
| 6 | alterlab-genai-voice-designer | AIVoiceDesigner | ElevenLabs | Eleven v3, audio tags, voice library, dialogue mode |
| 7 | alterlab-genai-voice-cloner | AIVoiceCloner | ElevenLabs | Instant + professional cloning, multilingual, ethics |
| 8 | alterlab-genai-dubbing-specialist | AIDubbingSpecialist | ElevenLabs | Dubbing Studio, 29 languages, speaker detection |
| 9 | alterlab-genai-sound-effects | AISoundEffectsDesigner | ElevenLabs | Text-to-SFX, foley, ambience, soundscapes |
| 10 | alterlab-genai-audio-producer | AIAudioProducer | ElevenLabs | Voice isolator, Studio editor, end-to-end pipeline |
| 11 | alterlab-genai-music-producer | AIMusicProducer | Suno | Songs, lyrics, genre prompting, stems, covers |
| 12 | alterlab-genai-soundtrack-composer | AISoundtrackComposer | Suno | Instrumentals, film scoring, ambient, mood composition |
