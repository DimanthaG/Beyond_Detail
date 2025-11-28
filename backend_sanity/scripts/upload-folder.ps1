# PowerShell Script for Easy Bulk Upload
# Usage: .\upload-folder.ps1 <serviceType> <folderPath> [startOrder]

param(
    [Parameter(Mandatory=$true)]
    [string]$ServiceType,
    
    [Parameter(Mandatory=$true)]
    [string]$FolderPath,
    
    [Parameter(Mandatory=$false)]
    [int]$StartOrder = 1
)

# Check if token is set
if (-not $env:SANITY_API_TOKEN) {
    Write-Host "❌ Error: SANITY_API_TOKEN not set" -ForegroundColor Red
    Write-Host ""
    Write-Host "Set it with:" -ForegroundColor Yellow
    Write-Host '  $env:SANITY_API_TOKEN="your-token-here"' -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Or create a .env file in backend_sanity folder" -ForegroundColor Yellow
    exit 1
}

# Change to backend_sanity directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendPath = Join-Path $scriptPath ".."
Set-Location $backendPath

# Convert to absolute path if relative
if (-not [System.IO.Path]::IsPathRooted($FolderPath)) {
    $FolderPath = Resolve-Path $FolderPath
}

Write-Host ""
Write-Host "🚀 Starting bulk upload..." -ForegroundColor Green
Write-Host "Service Type: $ServiceType" -ForegroundColor Cyan
Write-Host "Folder: $FolderPath" -ForegroundColor Cyan
Write-Host "Start Order: $StartOrder" -ForegroundColor Cyan
Write-Host ""

# Run the Node.js script
node scripts/bulk-upload-complete.js $ServiceType $FolderPath $StartOrder

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Upload complete!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Upload failed. Check errors above." -ForegroundColor Red
    exit $LASTEXITCODE
}





