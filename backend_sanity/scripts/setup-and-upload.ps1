# Quick Setup and Upload Script
# This sets your token and runs the bulk upload

param(
    [Parameter(Mandatory=$true)]
    [string]$ServiceType,
    
    [Parameter(Mandatory=$true)]
    [string]$FolderPath,
    
    [Parameter(Mandatory=$false)]
    [int]$StartOrder = 1
)

# Set the API token
$env:SANITY_API_TOKEN="skXKR1KKefnf9OAJ1QCAutvquMrbFPhrNwFreFO3p72AAQE9PD7ncUNMNDIzLqNf52RUoQ5reHQCAbeq0s8KXciIRuiXzzhlVyBVhCgEyMQeBC9L0vzhpzNjMbFziIfbsdniUQJDVECy511TQTNioApcGKW6nCWVujLTizYyH9EIAGDucTWG"

Write-Host ""
Write-Host "✅ API Token set!" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Starting bulk upload..." -ForegroundColor Cyan
Write-Host "Service Type: $ServiceType" -ForegroundColor Yellow
Write-Host "Folder: $FolderPath" -ForegroundColor Yellow
Write-Host "Start Order: $StartOrder" -ForegroundColor Yellow
Write-Host ""

# Change to backend_sanity directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendPath = Join-Path $scriptPath ".."
Set-Location $backendPath

# Convert to absolute path if relative
if (-not [System.IO.Path]::IsPathRooted($FolderPath)) {
    $FolderPath = Resolve-Path $FolderPath
}

# Run the upload script
node scripts/bulk-upload-complete.js $ServiceType $FolderPath $StartOrder

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Upload complete!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Upload failed. Check errors above." -ForegroundColor Red
}

