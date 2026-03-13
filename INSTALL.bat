@echo off
echo.
echo  ╔══════════════════════════════════════════════╗
echo  ║   AlterLab FC Skills — Installation Guide    ║
echo  ║   36 Claude AI Skills for Communication      ║
echo  ╚══════════════════════════════════════════════╝
echo.
echo  DEPARTMENTS:
echo    PRA — Public Relations ^& Advertising (12 skills)
echo    CDM — Cinema ^& Digital Media (12 skills)
echo    NMC — New Media ^& Communication (12 skills)
echo.
echo  ──────────────────────────────────────────────
echo  HOW TO USE:
echo.
echo  Option 1: Claude Projects (Recommended)
echo    1. Go to claude.ai → Projects → Create Project
echo    2. Upload SKILL.md files from your department folder
echo    3. Start chatting with Claude
echo.
echo  Option 2: Claude Code CLI
echo    1. Open terminal in this folder
echo    2. Run: claude "act as my copywriter"
echo    3. Claude will auto-load relevant skills
echo.
echo  ──────────────────────────────────────────────
echo  SKILL FOLDERS:
echo.

set count=0
for /r "skills" %%f in (SKILL.md) do (
    set /a count+=1
)
echo    Total skills found: checking...
dir /s /b skills\*SKILL.md 2>nul | find /c "SKILL.md"
echo.
echo  Browse skills\ folder to see all available skills.
echo.
echo  ──────────────────────────────────────────────
echo  Built by AlterLab Creative Technologies Laboratory
echo.
pause
