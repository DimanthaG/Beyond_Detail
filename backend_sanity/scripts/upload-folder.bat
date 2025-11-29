@echo off
REM Windows Batch Script for Easy Bulk Upload
REM Usage: upload-folder.bat <serviceType> <folderPath> [startOrder]

if "%~1"=="" (
    echo.
    echo Usage: upload-folder.bat ^<serviceType^> ^<folderPath^> [startOrder]
    echo.
    echo Example:
    echo   upload-folder.bat window-tint "C:\images\window-tint" 1
    echo.
    exit /b 1
)

set SERVICE_TYPE=%~1
set FOLDER_PATH=%~2
set START_ORDER=%~3

if "%START_ORDER%"=="" set START_ORDER=1

REM Check if token is set
if "%SANITY_API_TOKEN%"=="" (
    echo.
    echo ❌ Error: SANITY_API_TOKEN not set
    echo.
    echo Set it with:
    echo   set SANITY_API_TOKEN=your-token-here
    echo.
    exit /b 1
)

REM Change to backend_sanity directory
cd /d "%~dp0.."

echo.
echo 🚀 Starting bulk upload...
echo Service Type: %SERVICE_TYPE%
echo Folder: %FOLDER_PATH%
echo Start Order: %START_ORDER%
echo.

REM Run the Node.js script
node scripts/bulk-upload-complete.js "%SERVICE_TYPE%" "%FOLDER_PATH%" %START_ORDER%

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Upload complete!
) else (
    echo.
    echo ❌ Upload failed. Check errors above.
    exit /b %ERRORLEVEL%
)






