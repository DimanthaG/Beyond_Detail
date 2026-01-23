# Directive: Apply Premium Design Standards

## Goal
Implement consistent premium design standards across all pages of the Beyond Detail website, creating a cohesive, high-end user experience.

## Context
Beyond Detail is a premium auto detailing service in Scarborough/GTA. The website needs to reflect the quality of service through modern design, glassmorphism effects, and trust-building components.

## Design Principles
Reference: `frontend-design/SKILL_Frontend.md`

### Visual Standards
- **Glassmorphism**: High-blur backgrounds (`backdrop-filter: blur(20px)`) with subtle borders
- **Color Palette**:
  - Primary: Orange `#f07900`
  - Background: Deep black `#050505`
  - Glass effects: `rgba(255, 255, 255, 0.05)` with `rgba(255, 255, 255, 0.1)` borders
- **Typography**: Montserrat font family (`var(--font-base)`)
- **Gradients**: Radial gradients for depth, linear gradients for text effects

### Component Order (Service Pages)
1. SEO Component (direct import for LCP)
2. Hero Section (service-specific)
3. Gallery (if applicable)
4. Premium Overview Section (glassmorphism card)
5. ServicePricing Component
6. Additional Info Sections
7. GoogleReviewsCarousel
8. TrustBadges
9. SkillShowcase
10. FAQSection (if applicable)
11. Contact Form

## Page Categories

### Main Service Pages (11 pages)
- Tints, Services, Paint Correction, Ceramic Coating
- Interior/Exterior Detailing, Headlight Restoration, Leather Cleaning
- Fleet Services, Mobile Detailing, Luxury Detailing

### Core Pages (4 pages)
- Home, About, Gallery, FAQs

### Neighborhood Pages (60 pages)
- Car Detailing (16 locations)
- Ceramic Coating (15 locations)
- Paint Correction (14 locations)
- Window Tinting (15 locations)

### Specialized Pages (10 pages - No Updates)
- Blog, Booking, Contact2, Copyright, Error

## Key Components

### TrustBadges
- **Purpose**: Build trust with 4 key indicators
- **Badges**: Lifetime Warranty, Certified Professionals, Top Rated in GTA, Satisfaction Guaranteed
- **Placement**: Before Contact section
- **Import**: Lazy-loaded

### SkillShowcase
- **Purpose**: Display expertise areas
- **Title**: "MASTERY IN DETAIL"
- **Placement**: After TrustBadges, before Contact
- **Import**: Lazy-loaded

### Premium Overview Section
- **Style**: Glassmorphism card with gradient text
- **Content**: Service-specific introduction
- **Placement**: After Gallery, before ServicePricing

## Performance Optimizations
- **Critical Components**: SEO and Hero directly imported (not lazy)
- **Heavy Components**: GoogleReviewsCarousel, TrustBadges, SkillShowcase lazy-loaded
- **Images**: WebP format with fallbacks
- **Code Splitting**: Lazy loading for non-critical components

## Implementation Process
1. **Audit Current State**: Review existing pages
2. **Update Main Services**: Apply full premium layout
3. **Update Core Pages**: Add TrustBadges and SkillShowcase
4. **Bulk Update Neighborhoods**: Use automation script
5. **Test in Browser**: Verify components render correctly
6. **Document Changes**: Update implementation summary

## Success Criteria
- ✅ Consistent visual design across all pages
- ✅ All components render without errors
- ✅ Performance metrics maintained (LCP, CLS)
- ✅ Mobile responsive
- ✅ SEO optimized

## Learnings (Updated: 2026-01-22)
- **Import Strategy**: Direct imports for SEO/Hero improve LCP
- **Glassmorphism**: Use CSS variables for consistency
- **Automation**: Python scripts essential for bulk updates
- **Testing**: Browser verification required after bulk changes
- **Documentation**: Maintain comprehensive summary of all changes

## Related Directives
- `update_neighborhood_pages.md` - Neighborhood page automation
- `update_service_pages.md` - Service page updates
- `test_website_changes.md` - Browser testing procedures
