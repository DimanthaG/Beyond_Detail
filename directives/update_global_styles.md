# Directive: Update Global Styles

## Goal
Maintain and enhance the global CSS/SCSS system to ensure consistent premium aesthetics across the entire website.

## Context
Global styles define the visual foundation of the site. CSS variables, typography, colors, and base styles must be centralized and consistent with SKILL_Frontend.md principles.

## Key Files
- `frontend_beyond_detail/src/index.scss` - Global variables and base styles
- `frontend_beyond_detail/src/App.scss` - App-level styles and backgrounds
- `frontend_beyond_detail/src/components/Navbar/Navbar2.scss` - Navigation styles
- `frontend_beyond_detail/src/components/Footer/Footer.scss` - Footer styles

## CSS Variables System

### Current Variables (from index.scss)
```scss
:root {
  // Colors
  --primary-color: #f07900;
  --text-primary: #ffffff;
  --text-secondary: #e0e0e0;
  --bg-primary: #050505;
  
  // Glassmorphism
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  
  // Accents
  --accent-cyan: #00d4ff;
  --accent-red: #ff3366;
  --accent-gold: #ffd700;
  --accent-purple: #b366ff;
  
  // Typography
  --font-base: 'Montserrat', sans-serif;
}
```

### Adding New Variables
When adding new variables:
1. Use semantic naming (e.g., `--glass-bg` not `--transparent-white`)
2. Group related variables together
3. Document purpose in comments
4. Test across all pages before committing

## Typography System

### Font Hierarchy
```scss
// Headings
h1 { font-size: 3.5rem; font-weight: 700; }
h2 { font-size: 2.5rem; font-weight: 600; }
h3 { font-size: 2rem; font-weight: 600; }
h4 { font-size: 1.5rem; font-weight: 500; }

// Body
p { font-size: 1.1rem; line-height: 1.8; }

// Special
.gradient-text {
  background: linear-gradient(135deg, #fff 0%, #f07900 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Font Loading
- Primary: Montserrat (Google Fonts)
- Fallback: system-ui, sans-serif
- Preload critical fonts for performance

## Color System

### Primary Palette
- **Orange (#f07900)**: Primary CTA, accents, links
- **Deep Black (#050505)**: Main background
- **White (#ffffff)**: Primary text
- **Light Gray (#e0e0e0)**: Secondary text

### Accent Palette
- **Cyan (#00d4ff)**: Technology, innovation
- **Red (#ff3366)**: Urgency, alerts
- **Gold (#ffd700)**: Premium, luxury
- **Purple (#b366ff)**: Creativity, unique

### Usage Guidelines
- Use primary orange for CTAs and important elements
- Use accents sparingly for variety
- Maintain 4.5:1 contrast ratio for accessibility
- Test colors in both light and dark contexts

## Glassmorphism System

### Standard Glass Card
```scss
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
}
```

### Variations
- **High Blur**: `blur(30px)` for navbar
- **Subtle**: `blur(10px)` for overlays
- **Frosted**: Add noise texture for depth

## Background System

### App Background (App.scss)
```scss
.app {
  background: radial-gradient(
    ellipse at top,
    rgba(240, 121, 0, 0.1) 0%,
    #050505 50%
  );
}
```

### Section Backgrounds
- **Hero**: Dark with gradient overlay
- **Content**: Transparent or subtle glass
- **Footer**: Gradient overlay on dark

## Animation Standards

### Transitions
```scss
// Standard transition
transition: all 0.3s ease;

// Hover effects
&:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(240, 121, 0, 0.3);
}
```

### Framer Motion Variants
```javascript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

## Responsive Breakpoints

### Standard Breakpoints
```scss
$mobile: 480px;
$tablet: 768px;
$desktop: 1024px;
$wide: 1440px;

// Usage
@media (max-width: $tablet) {
  // Tablet styles
}
```

## Update Process

### When Updating Global Styles:
1. **Test Locally**: Verify changes don't break existing pages
2. **Check Consistency**: Ensure new styles align with existing system
3. **Document Changes**: Update this directive with learnings
4. **Browser Test**: Verify across Chrome, Firefox, Safari
5. **Mobile Test**: Check responsive behavior

## Common Updates

### Adding New Color
1. Add to CSS variables in `index.scss`
2. Document usage in this directive
3. Test contrast ratios
4. Use in at least 2 places before committing

### Adding New Component Style
1. Create component-specific SCSS file
2. Use CSS variables, not hardcoded values
3. Follow BEM naming if applicable
4. Import in component file

### Updating Typography
1. Update font hierarchy in `index.scss`
2. Test across all pages
3. Verify mobile readability
4. Check line-height and spacing

## Success Criteria
- ✅ All colors use CSS variables
- ✅ Typography consistent across pages
- ✅ Glassmorphism effects standardized
- ✅ Responsive at all breakpoints
- ✅ Accessible (contrast, font size)
- ✅ Performance optimized (no unnecessary repaints)

## Learnings (Updated: 2026-01-22)
- **CSS Variables**: Essential for theme consistency
- **Glassmorphism**: High blur (20px+) creates premium feel
- **Gradients**: Radial for backgrounds, linear for text
- **Typography**: Montserrat provides distinctive character
- **Spacing**: Generous padding/margin creates breathing room

## Related Directives
- `create_premium_ui_components.md` - Component-level styles
- `apply_premium_design_standards.md` - Overall design system
