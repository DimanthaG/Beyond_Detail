# Directive: Update Neighborhood Pages

## Goal
Systematically update all neighborhood-specific service pages to include premium design components (TrustBadges, SkillShowcase) while maintaining existing content and structure.

## Context
The Beyond Detail website has 60 neighborhood pages across 4 service types (Car Detailing, Ceramic Coating, Paint Correction, Window Tinting) covering 15+ locations in the GTA.

## Inputs
- **Target Directory**: `frontend_beyond_detail/src/Pages/Neighborhoods/`
- **Components to Add**:
  - `TrustBadges` - Trust indicators (Lifetime Warranty, Certified Professionals, etc.)
  - `SkillShowcase` - Expertise showcase section
- **Placement**: Before the `Contact` component at the end of each page

## Tools/Scripts to Use
- **Script**: `execution/update_neighborhood_pages.py`
- **Purpose**: Automatically add lazy imports and component placements to all .jsx files

## Expected Output
- All 60 neighborhood pages updated with:
  - Lazy import statements for TrustBadges and SkillShowcase
  - Components wrapped in Suspense and placed before Contact
  - No changes to existing content or structure

## Process
1. **Scan Directory**: Identify all .jsx files in Neighborhoods directory
2. **Check Existing**: Skip files that already have TrustBadges/SkillShowcase
3. **Add Imports**: Insert lazy import statements after existing lazy imports
4. **Add Components**: Insert components before Contact component
5. **Verify**: Count updated files and report results

## Edge Cases
- **Already Updated**: Skip files that already contain the components
- **No Contact Component**: Log warning if Contact component not found
- **Different Patterns**: Handle both `<Contact />` and `<Suspense><Contact /></Suspense>` patterns
- **Encoding**: Use UTF-8 encoding for all file operations

## Success Criteria
- ✅ All 60 files updated without errors
- ✅ Components visible when pages load in browser
- ✅ No console errors or broken imports
- ✅ Existing functionality preserved

## Learnings (Updated: 2026-01-22)
- **Pattern Matching**: Use regex to find last lazy import and Contact component
- **Suspense Wrapping**: Always wrap new components in Suspense with `fallback={null}`
- **Testing**: Verify in browser that components render correctly
- **Automation**: Python script is more reliable than manual updates for bulk changes

## Related Directives
- `apply_premium_design_standards.md` - Overall design system
- `update_service_pages.md` - Main service page updates
