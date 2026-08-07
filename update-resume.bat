@echo off
setlocal
cd /d "%~dp0"

if "%~1"=="" (
  echo(
  echo   ================================================
  echo    Update your resume in ONE step
  echo   ================================================
  echo(
  echo   Drag your new resume PDF onto this file
  echo   ^(update-resume.bat^) and let go.
  echo(
  echo   It will rename it, commit, and push automatically.
  echo(
  pause
  exit /b 0
)

echo Updating resume from:
echo   %~1
echo(

copy /y "%~1" "Tobyn-Smith-Resume.pdf" >nul
if errorlevel 1 (
  echo [X] Could not copy that file. Make sure you dragged a valid PDF.
  echo(
  pause
  exit /b 1
)

git add "Tobyn-Smith-Resume.pdf"
git commit -m "Update resume PDF"
git push

echo(
echo [OK] Resume updated and pushed. Live in about a minute at:
echo      https://tobyn-smith.github.io/me/
echo(
pause
