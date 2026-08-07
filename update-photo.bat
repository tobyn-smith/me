@echo off
setlocal
cd /d "%~dp0"

if "%~1"=="" (
  echo(
  echo   ================================================
  echo    Update your profile photo in ONE step
  echo   ================================================
  echo(
  echo   Drag your new photo ^(JPG or PNG^) onto this file
  echo   ^(update-photo.bat^) and let go.
  echo(
  echo   It saves it as headshot.jpg, commits, and pushes.
  echo(
  pause
  exit /b 0
)

echo Updating profile photo from:
echo   %~1
echo(

copy /y "%~1" "headshot.jpg" >nul
if errorlevel 1 (
  echo [X] Could not copy that file. Make sure you dragged a valid image.
  echo(
  pause
  exit /b 1
)

git add "headshot.jpg"
git commit -m "Update profile photo"
git push

echo(
echo [OK] Photo updated and pushed. Live in about a minute at:
echo      https://tobyn-smith.github.io/me/
echo(
pause
