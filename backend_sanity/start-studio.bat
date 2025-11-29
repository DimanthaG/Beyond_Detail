@echo off

:: Navigate to backend Sanity folder
cd "c:\Users\Pemina\Documents\Beyond Detail\WEBSITE\Beyond_Detail\backend_sanity"

:: Ensure Sanity CLI is installed globally
npm install -g @sanity/cli

:: Install project dependencies (if not already installed)
npm install

:: Start Sanity Studio
sanity start
