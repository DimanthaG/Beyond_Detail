@echo off
echo ========================================
echo  Beyond Detail - Dev Server Restart
echo ========================================
echo.

echo [1/3] Stopping any running dev servers...
taskkill /F /IM node.exe /T 2>nul
timeout /t 2 /nobreak >nul

echo [2/3] Clearing React cache...
if exist "node_modules\.cache" (
    rmdir /s /q "node_modules\.cache"
    echo Cache cleared!
) else (
    echo No cache found.
)

echo [3/3] Starting dev server...
echo.
echo ========================================
echo  Server will start on http://localhost:3001
echo  Press Ctrl+C to stop the server
echo ========================================
echo.

npm start
