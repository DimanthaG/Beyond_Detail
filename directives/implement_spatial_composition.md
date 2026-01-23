# Directive: Implement Spatial Composition

## Goal
Create layouts with generous spacing, clear hierarchy, and premium feel through thoughtful spatial composition, following SKILL_Frontend.md principles.

## Context
Spatial composition is about how elements are arranged in space. Premium designs don't cram content—they use whitespace strategically to create breathing room, hierarchy, and visual flow.

## Spatial Principles (from SKILL_Frontend.md)

### 1. Generous Spacing
**Don't Cram Elements**
- Premium designs have breathing room
- Whitespace is not wasted space
- Padding: 3rem+ for sections
- Margin: 2rem+ between major elements
- Line-height: 1.6-1.8 for readability

### 2. Glassmorphism Cards
**Elevated, Floating Feel**
- Background: `rgba(255, 255, 255, 0.05)`
- Backdrop blur: 20px+
- Border: 1px subtle
- Border-radius: 12-16px
- Padding: 2-3rem
- Shadow: Subtle, colored

### 3. Grid Systems
**Consistent Alignment**
- Use CSS Grid or Flexbox
- Consistent gaps (1.5-2rem)
- Responsive breakpoints
- 12-column system for complex layouts
- Auto-fit/auto-fill for cards

### 4. Responsive Design
**Mobile-First Approach**
- Design for mobile first
- Progressive enhancement for larger screens
- Fluid typography (clamp)
- Flexible images (max-width: 100%)
- Touch-friendly targets (44px min)

## Layout Patterns

### 1. Container System
```scss
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
}

.container--wide {
  max-width: 1400px;
}

.container--narrow {
  max-width: 800px;
}
```

### 2. Section Spacing
```scss
.section {
  padding: 6rem 0;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
}

.section--hero {
  padding: 8rem 0;
  min-height: 80vh;
}

.section--compact {
  padding: 4rem 0;
}
```

### 3. Grid Layouts
```scss
// Auto-fit cards
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

// Fixed columns
.three-column-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
```

### 4. Flex Layouts
```scss
.flex-row {
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
}

.flex-space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
```

## Glassmorphism Card System

### Standard Glass Card
```scss
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
  }
}
```

### Variations
```scss
// Elevated card (more prominent)
.glass-card--elevated {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(30px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
}

// Subtle card (less prominent)
.glass-card--subtle {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

// Colored accent card
.glass-card--accent {
  background: rgba(240, 121, 0, 0.1);
  border: 1px solid rgba(240, 121, 0, 0.2);
}
```

## Typography Spacing

### Heading Hierarchy
```scss
h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1.25rem;
  line-height: 1.3;
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 1rem;
  line-height: 1.4;
}

p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}
```

### Content Spacing
```scss
.content-block {
  margin-bottom: 3rem;
  
  > *:last-child {
    margin-bottom: 0;
  }
}

.text-content {
  max-width: 65ch; // Optimal reading width
  
  p + p {
    margin-top: 1.5rem;
  }
}
```

## Responsive Breakpoints

### Standard Breakpoints
```scss
// Mobile first
$mobile: 480px;
$tablet: 768px;
$desktop: 1024px;
$wide: 1440px;

// Usage
@media (min-width: $tablet) {
  // Tablet and up
}

@media (min-width: $desktop) {
  // Desktop and up
}
```

### Fluid Typography
```scss
// Scales smoothly between viewports
.heading {
  font-size: clamp(2rem, 2rem + 2vw, 4rem);
}

// Alternative using calc
.text {
  font-size: calc(1rem + 0.5vw);
}
```

## Component Spacing Examples

### Hero Section
```scss
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 8rem 0;
  
  &__content {
    max-width: 800px;
    
    h1 {
      margin-bottom: 2rem;
    }
    
    p {
      margin-bottom: 2.5rem;
      font-size: 1.25rem;
    }
    
    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
}
```

### Service Cards
```scss
.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin: 4rem 0;
  
  .service-card {
    padding: 3rem;
    
    &__icon {
      margin-bottom: 2rem;
      width: 64px;
      height: 64px;
    }
    
    &__title {
      margin-bottom: 1rem;
    }
    
    &__description {
      margin-bottom: 2rem;
      line-height: 1.7;
    }
    
    &__features {
      list-style: none;
      padding: 0;
      
      li {
        padding: 0.75rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
```

### Form Layouts
```scss
.form {
  max-width: 600px;
  
  &__group {
    margin-bottom: 2rem;
  }
  
  &__label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  &__input {
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(240, 121, 0, 0.1);
    }
  }
  
  &__button {
    margin-top: 1.5rem;
    padding: 1.25rem 3rem;
  }
}
```

## Whitespace Strategy

### Macro Whitespace (Between Sections)
```scss
// Large gaps between major sections
.section + .section {
  margin-top: 6rem;
  
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
}
```

### Micro Whitespace (Within Components)
```scss
// Smaller gaps within components
.card {
  padding: 2.5rem;
  
  > * + * {
    margin-top: 1.5rem;
  }
}
```

### Breathing Room
```scss
// Don't let content touch edges
.content {
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
}
```

## Alignment & Balance

### Visual Hierarchy
```scss
// Use size, weight, and spacing for hierarchy
.hierarchy-example {
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 3rem;
    color: var(--text-secondary);
  }
  
  p {
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }
}
```

### Asymmetric Balance
```scss
// 60/40 split for visual interest
.split-layout {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
```

## Touch Targets (Mobile)

### Minimum Sizes
```scss
// Buttons and links
.button,
.link {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.5rem;
}

// Icon buttons
.icon-button {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Testing Checklist

Before finalizing layouts:
- [ ] Generous padding/margin throughout
- [ ] No cramped content
- [ ] Readable line lengths (45-75 characters)
- [ ] Consistent spacing system
- [ ] Responsive at all breakpoints
- [ ] Touch targets 44px+ on mobile
- [ ] Visual hierarchy clear
- [ ] Glassmorphism cards have depth

## Success Criteria
- ✅ Generous whitespace (not cramped)
- ✅ Glassmorphism cards elevated
- ✅ Consistent grid/spacing system
- ✅ Mobile-first responsive
- ✅ Clear visual hierarchy
- ✅ Touch-friendly targets
- ✅ Readable typography

## Learnings (Updated: 2026-01-22)
- **Section Padding**: 6rem (desktop) / 4rem (mobile) feels premium
- **Card Padding**: 3rem creates breathing room
- **Grid Gaps**: 2-2.5rem between cards
- **Max Width**: 1200px for content, 800px for text
- **Line Height**: 1.8 for body text improves readability
- **Blur**: 20px+ for glassmorphism depth

## Related Directives
- `implement_motion_design.md` - Animation and transitions
- `create_premium_ui_components.md` - Component creation
- `update_global_styles.md` - CSS system
