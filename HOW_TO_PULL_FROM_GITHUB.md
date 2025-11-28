# How to Pull from GitHub in Cursor

## Current Status
- **Current Branch**: `cursor/check-for-bugs-gemini-3-pro-preview-9ccb`
- **Remote**: Connected to `https://github.com/DimanthaG/Beyond_Detail`
- **Status**: Up to date with remote branch

## Method 1: Pull Current Branch (Recommended)

If you want to pull the latest changes for your current branch:

```bash
git pull origin cursor/check-for-bugs-gemini-3-pro-preview-9ccb
```

Or simply:
```bash
git pull
```

## Method 2: Pull from Main/Master Branch

If you want to pull from the main branch and merge into your current branch:

### Step 1: Fetch all branches
```bash
git fetch origin
```

### Step 2: Check what branch is the main branch
```bash
git branch -a
```

### Step 3: Pull from main/master
```bash
# If main branch is called "master"
git pull origin master

# OR if main branch is called "main"
git pull origin main
```

### Step 4: Merge main into your current branch (optional)
```bash
git merge origin/master
# OR
git merge origin/main
```

## Method 3: Using Cursor Desktop UI

1. **Open Source Control panel** (Ctrl/Cmd + Shift + G)
2. Click the **"..." menu** (three dots) at the top
3. Select **"Pull"** or **"Pull, Push"**
4. Or click the **sync icon** (circular arrows) in the bottom status bar

## Method 4: Switch to Main Branch and Pull

If you want to work on the main branch:

```bash
# Switch to master branch
git checkout master

# OR switch to main branch
git checkout main

# Pull latest changes
git pull origin master
# OR
git pull origin main
```

## Quick Commands Reference

```bash
# Fetch latest changes (doesn't merge)
git fetch origin

# Pull and merge current branch
git pull

# Pull specific branch
git pull origin <branch-name>

# See what branches are available
git branch -a

# See what changed on remote
git fetch origin
git log HEAD..origin/master --oneline
```

## Troubleshooting

### If you get "Your branch is ahead of origin"
You have local commits that aren't pushed. You can:
- Push them: `git push origin <branch-name>`
- Or pull with rebase: `git pull --rebase origin <branch-name>`

### If you get merge conflicts
1. Resolve conflicts in the files
2. Stage resolved files: `git add <file>`
3. Complete merge: `git commit`

### If you want to discard local changes
⚠️ **Warning**: This will lose your local changes!
```bash
git fetch origin
git reset --hard origin/<branch-name>
```

## Current Setup
- ✅ GitHub connection is working
- ✅ Remote is configured correctly
- ✅ Authentication token is set up
- ✅ Ready to pull/push
