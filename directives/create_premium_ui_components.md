# Directive: Create Premium UI Components

## Goal
Design and implement new UI components that follow the SKILL_Frontend.md guidelines for bold aesthetics, distinctive typography, motion, and spatial composition.

## Context
Beyond Detail needs components that feel premium and state-of-the-art, not basic MVPs. Every component should WOW users with rich aesthetics, smooth animations, and thoughtful design.

## Design Principles (from SKILL_Frontend.md)

### 1. Bold Aesthetic Direction
- **Avoid Generic**: No plain colors (red, blue, green)
- **Use Curated Palettes**: HSL-tailored colors, sleek dark modes
- **Glassmorphism**: Modern blur effects with subtle borders
- **Dynamic Animations**: Micro-animations for enhanced UX

### 2. Typography
- **Distinctive Fonts**: Montserrat (not generic Inter/Arial)
- **Hierarchy**: Clear size/weight differentiation
- **Spacing**: Generous letter-spacing for headings
- **Gradients**: Use gradient text for premium feel

### 3. Color & Theme
- **CSS Variables**: Centralized color system
- **Primary**: Orange #f07900 (distinctive, not generic)
- **Accents**: Cyan, gold, purple for variety
- **Dark Mode**: Deep black #050505 with subtle gradients

### 4. Motion
- **Purposeful**: Every animation has intent
- **Smooth**: Use framer-motion for fluid transitions
- **Scroll-Triggered**: Reveal elements as user scrolls
- **Hover States**: Subtle scale/glow effects

### 5. Spatial Composition
- **Generous Spacing**: Don't cram elements
- **Glassmorphism Cards**: Elevated, floating feel
- **Grid Systems**: Consistent alignment
- **Responsive**: Mobile-first approach

### 6. Backgrounds & Visual Details
- **Radial Gradients**: Add depth to backgrounds
- **Blur Effects**: Layered transparencies
- **Subtle Patterns**: Noise/grain for texture
- **Dynamic Elements**: Moving gradients/particles

## Component Creation Process

### 1. Planning Phase
- Define component purpose and user benefit
- Sketch layout and interaction patterns
- Choose color palette and typography
- Plan animations and transitions

### 2. Implementation Phase
```
components/
  ComponentName/
    ComponentName.jsx    # React component
    ComponentName.scss   # Styles (not inline)
    index.js            # Export
```

### 3. Styling Standards
- Use SCSS for maintainability
- Reference CSS variables: `var(--primary-color)`
- Mobile-first media queries
- BEM naming convention (optional but recommended)

### 4. Animation Standards
- Use framer-motion for complex animations
- CSS transitions for simple hover effects
- Scroll-triggered reveals with `whileInView`
- Stagger children for sequential reveals

### 5. Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion media query

## Component Checklist

Before considering a component complete:
- [ ] Follows SKILL_Frontend.md aesthetic principles
- [ ] Uses distinctive typography (Montserrat)
- [ ] Has smooth animations/transitions
- [ ] Glassmorphism effects applied (if applicable)
- [ ] Mobile responsive
- [ ] Accessible (keyboard, screen readers)
- [ ] Performance optimized (lazy loading if heavy)
- [ ] Documented with props/usage examples

## Example: Premium Card Component

**Good Example:**
```jsx
<motion.div 
  className="premium-card"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  style={{
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(20px)',
    border: '1px solid var(--glass-border)',
    borderRadius: '16px',
    padding: '3rem'
  }}
>
  <h2 style={{
    background: 'linear-gradient(135deg, #fff 0%, #f07900 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}>
    Premium Title
  </h2>
</motion.div>
```

**Bad Example:**
```jsx
<div style={{ background: 'white', padding: '10px' }}>
  <h2>Basic Title</h2>
</div>
```

## Common Components to Create

### Trust/Social Proof
- TrustBadges ✅ (already created)
- ReviewCards
- StatisticsCounter
- CertificationLogos

### Content Display
- SkillShowcase ✅ (already created)
- ServicePricing ✅ (already created)
- FeatureGrid
- TimelineComponent

### Interactive
- ContactForm (enhanced)
- BookingWizard
- ImageGallery (with lightbox)
- VideoPlayer (custom controls)

### Navigation
- Navbar (glassmorphism) ✅ (already enhanced)
- Footer ✅ (already enhanced)
- Breadcrumbs
- SideNav/MobileMenu

## Success Criteria
- ✅ Component looks premium, not basic
- ✅ Smooth animations enhance UX
- ✅ Distinctive visual identity
- ✅ Mobile responsive
- ✅ Accessible
- ✅ Reusable across pages

## Learnings (Updated: 2026-01-22)
- **Glassmorphism**: Use high blur (20px+) for premium feel
- **Gradients**: Linear gradients for text, radial for backgrounds
- **Motion**: Scroll-triggered reveals more engaging than on-load
- **Typography**: Gradient text creates premium hierarchy
- **Spacing**: Generous padding (3rem+) for premium feel

## Related Directives
- `apply_premium_design_standards.md` - Overall design system
- `update_global_styles.md` - CSS variables and theme
