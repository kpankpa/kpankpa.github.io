@echo off
echo ================================================
echo   Starting Portfolio Website Server
echo ================================================
echo.
echo Server will start on: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ================================================
echo.

cd /d "%~dp0"
python -m http.server 8000

pause
