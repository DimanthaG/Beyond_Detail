# Beyond Detail - AGENTSJAN Architecture

## Overview
This project now follows the AGENTSJAN 3-layer architecture for reliable, maintainable development.

## Directory Structure

```
Beyond_Detail/
├── directives/                    # Layer 1: What to do (SOPs)
│   ├── apply_premium_design_standards.md
│   ├── create_premium_ui_components.md
│   ├── update_global_styles.md
│   ├── update_neighborhood_pages.md
│   └── test_website_changes.md
│
├── execution/                     # Layer 3: Doing the work (Scripts)
│   └── update_neighborhood_pages.py
│
├── .tmp/                         # Temporary/intermediate files
│   └── (auto-generated, not committed)
│
├── frontend_beyond_detail/       # React application
│   ├── src/
│   │   ├── components/          # UI components
│   │   ├── Pages/               # Page components
│   │   ├── constants/           # Constants and configs
│   │   └── ...
│   └── ...
│
├── frontend-design/              # Design documentation
│   ├── SKILL_Frontend.md        # Frontend design principles
│   ├── PREMIUM_DESIGN_IMPLEMENTATION.md
│   └── PREMIUM_DESIGN_COMPLETE_SUMMARY.md
│
└── AGENTSJAN.md                 # This architecture guide
```

## The 3 Layers

### Layer 1: Directives (What to do)
**Location**: `directives/`

SOPs written in Markdown that define:
- Goals and context
- Inputs and outputs
- Tools/scripts to use
- Process steps
- Edge cases
- Success criteria
- Learnings (updated over time)

**Current Directives**:
1. `apply_premium_design_standards.md` - Master directive for design system
2. `create_premium_ui_components.md` - Component creation guidelines
3. `update_global_styles.md` - Global CSS/SCSS management
4. `update_neighborhood_pages.md` - Bulk page updates
5. `test_website_changes.md` - Browser testing procedures

### Layer 2: Orchestration (Decision making)
**Who**: AI Agent (Claude, Gemini, etc.)

Responsibilities:
- Read directives
- Make intelligent routing decisions
- Call execution tools in correct order
- Handle errors and edge cases
- Ask for clarification when needed
- Update directives with learnings

**Example Flow**:
1. User: "Update all neighborhood pages"
2. Agent reads: `directives/update_neighborhood_pages.md`
3. Agent runs: `execution/update_neighborhood_pages.py`
4. Agent tests: Following `directives/test_website_changes.md`
5. Agent updates: Adds learnings to directive

### Layer 3: Execution (Doing the work)
**Location**: `execution/`

Deterministic Python scripts that:
- Handle file operations
- Process data
- Make API calls
- Perform bulk updates
- Generate reports

**Current Scripts**:
1. `update_neighborhood_pages.py` - Bulk update 60 neighborhood pages

## Operating Principles

### 1. Check for Tools First
Before writing a new script, check `execution/` directory. Only create new scripts if none exist for the task.

### 2. Self-Anneal When Things Break
When errors occur:
1. Read error message and stack trace
2. Fix the script and test again
3. Update the directive with learnings
4. System is now stronger

### 3. Update Directives as You Learn
Directives are living documents. When you discover:
- API constraints
- Better approaches
- Common errors
- Timing expectations

→ Update the relevant directive

### 4. Deliverables vs Intermediates
- **Deliverables**: Final outputs (website, documentation)
- **Intermediates**: Temporary files (`.tmp/` directory)

## Design System Integration

### SKILL_Frontend.md Principles
The project follows strict frontend design principles:

1. **Bold Aesthetic Direction**
   - Glassmorphism effects
   - Curated color palettes
   - Dynamic animations

2. **Distinctive Typography**
   - Montserrat font family
   - Gradient text effects
   - Clear hierarchy

3. **Color & Theme**
   - CSS variables for consistency
   - Orange (#f07900) primary
   - Deep black (#050505) background

4. **Motion**
   - Framer-motion animations
   - Scroll-triggered reveals
   - Smooth transitions

5. **Spatial Composition**
   - Generous spacing
   - Glassmorphism cards
   - Responsive grids

6. **Backgrounds & Visual Details**
   - Radial gradients
   - Blur effects
   - Layered transparencies

## Workflow Examples

### Example 1: Adding a New Component
1. Read: `directives/create_premium_ui_components.md`
2. Design component following SKILL_Frontend.md
3. Implement in `frontend_beyond_detail/src/components/`
4. Test following `directives/test_website_changes.md`
5. Update directive with learnings

### Example 2: Bulk Page Updates
1. Read: `directives/update_neighborhood_pages.md`
2. Run: `execution/update_neighborhood_pages.py`
3. Test: Browser verification
4. Update: Add learnings to directive

### Example 3: Style System Update
1. Read: `directives/update_global_styles.md`
2. Modify: `src/index.scss` or `src/App.scss`
3. Test: Verify across all pages
4. Document: Update directive with changes

## Best Practices

### For Directives
- ✅ Clear, actionable instructions
- ✅ Include context and examples
- ✅ Define success criteria
- ✅ Document edge cases
- ✅ Update with learnings
- ❌ Don't make assumptions
- ❌ Don't skip error handling

### For Scripts
- ✅ Deterministic and testable
- ✅ Well-commented code
- ✅ Error handling
- ✅ Progress reporting
- ✅ UTF-8 encoding
- ❌ Don't hardcode values
- ❌ Don't skip validation

### For Testing
- ✅ Test in real browser
- ✅ Verify mobile responsive
- ✅ Check console for errors
- ✅ Take screenshots as proof
- ✅ Test multiple pages
- ❌ Don't assume it works
- ❌ Don't skip edge cases

## Current Project Status

### Completed
✅ Premium design standards applied to 85 pages
✅ TrustBadges component created and integrated
✅ SkillShowcase component created and integrated
✅ Glassmorphism effects implemented
✅ Global CSS variables system
✅ Automated bulk update script
✅ Browser testing verified
✅ Documentation complete

### Active Directives
- `apply_premium_design_standards.md` - Ongoing design maintenance
- `test_website_changes.md` - Used for all updates
- `update_global_styles.md` - CSS system management

### Future Enhancements
- Additional premium components
- Performance optimizations
- A/B testing framework
- Analytics integration

## Getting Started

### For New Tasks
1. Check if directive exists in `directives/`
2. If yes: Read directive and follow process
3. If no: Create new directive first
4. Execute using scripts in `execution/`
5. Test following testing directive
6. Update directive with learnings

### For Maintenance
1. Review existing directives
2. Update with new learnings
3. Improve scripts based on feedback
4. Keep documentation current

## Summary

This architecture separates:
- **Intent** (directives) from **execution** (scripts)
- **Decisions** (AI agent) from **determinism** (Python)
- **Deliverables** (website) from **intermediates** (temp files)

Result: Reliable, maintainable, self-improving system.

---

**Last Updated**: January 22, 2026
**Maintained By**: Beyond Detail Development Team
