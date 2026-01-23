# Directive: Implement Motion Design

## Goal
Create purposeful, smooth animations that enhance user experience and make the interface feel alive and responsive, following SKILL_Frontend.md Motion principles.

## Context
Motion is not decoration—it's a functional tool that guides attention, provides feedback, and creates a premium feel. Every animation should have clear intent and improve the user experience.

## Motion Principles (from SKILL_Frontend.md)

### 1. Purposeful Animation
Every animation must serve a purpose:
- **Guide Attention**: Draw eyes to important elements
- **Provide Feedback**: Confirm user actions
- **Show Relationships**: Reveal how elements connect
- **Create Delight**: Enhance emotional connection
- **Improve Comprehension**: Make complex interactions clear

### 2. Smooth Execution
- **Framer Motion**: Use for complex animations
- **CSS Transitions**: Use for simple hover effects
- **Easing Functions**: Natural, not linear
- **Duration**: 200-600ms for most interactions
- **Performance**: 60fps minimum, use transform/opacity

### 3. Scroll-Triggered Reveals
- **Progressive Disclosure**: Reveal content as user scrolls
- **Stagger Children**: Sequential reveals for lists
- **Viewport Detection**: Trigger once when in view
- **Subtle Motion**: Fade + slight translate (20-30px)

### 4. Hover States
- **Scale**: Subtle growth (1.02-1.05)
- **Glow**: Box-shadow with brand color
- **Color Shift**: Smooth transitions
- **Cursor**: Change to pointer for clickable items

## Implementation Tools

### Framer Motion Setup
```javascript
import { motion } from 'framer-motion';

// Standard fade-in-up
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Usage
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeInUp}
>
  Content
</motion.div>
```

### Stagger Children
```javascript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" whileInView="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={item}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Hover Animations
```javascript
<motion.button
  whileHover={{ 
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(240, 121, 0, 0.3)'
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
>
  Click Me
</motion.button>
```

### Page Transitions
```javascript
const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

<motion.div
  initial="initial"
  animate="in"
  exit="out"
  variants={pageVariants}
  transition={pageTransition}
>
  Page Content
</motion.div>
```

## Animation Patterns

### 1. Card Reveals
**Use Case**: Service cards, feature grids, testimonials

```javascript
const cardReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};
```

### 2. Text Reveals
**Use Case**: Headings, important text

```javascript
const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};
```

### 3. Image Reveals
**Use Case**: Gallery images, hero images

```javascript
const imageReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7 }
  }
};
```

### 4. Number Counters
**Use Case**: Statistics, metrics

```javascript
import { useMotionValue, useTransform, animate } from 'framer-motion';

const count = useMotionValue(0);
const rounded = useTransform(count, Math.round);

useEffect(() => {
  const animation = animate(count, targetValue, { duration: 2 });
  return animation.stop;
}, []);
```

### 5. Loading States
**Use Case**: Data fetching, page loads

```javascript
const spinner = {
  rotate: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: 'linear' }
  }
};

<motion.div animate="rotate" variants={spinner}>
  <LoadingIcon />
</motion.div>
```

## CSS Transitions (Simple Cases)

### Hover Effects
```scss
.button {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
}
```

### Color Transitions
```scss
.link {
  color: var(--text-secondary);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary-color);
  }
}
```

### Background Transitions
```scss
.card {
  background: var(--glass-bg);
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
}
```

## Performance Optimization

### Use Transform & Opacity
✅ **Good** (GPU-accelerated):
```javascript
{ transform: 'translateY(20px)', opacity: 0 }
```

❌ **Bad** (causes reflow):
```javascript
{ top: '20px', display: 'none' }
```

### Reduce Motion
```scss
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Lazy Load Heavy Animations
```javascript
const HeavyAnimation = lazy(() => import('./HeavyAnimation'));

<Suspense fallback={<div>Loading...</div>}>
  <HeavyAnimation />
</Suspense>
```

## Common Patterns by Component Type

### Hero Sections
- Fade in title (0.5s delay)
- Fade in subtitle (0.7s delay)
- Fade in CTA button (0.9s delay)
- Parallax background (subtle)

### Service Cards
- Stagger reveal (0.1s between cards)
- Hover: scale 1.03 + shadow
- Click: scale 0.98 (feedback)

### Navigation
- Slide in from top (navbar)
- Fade in menu items (stagger)
- Smooth scroll to sections

### Forms
- Focus: border color + glow
- Error: shake animation
- Success: checkmark animation

### Galleries
- Fade in images (stagger)
- Hover: scale 1.05 + overlay
- Lightbox: smooth expand

## Testing Checklist

Before deploying animations:
- [ ] Runs at 60fps on target devices
- [ ] Respects prefers-reduced-motion
- [ ] Doesn't interfere with functionality
- [ ] Enhances (not distracts from) content
- [ ] Consistent timing across site
- [ ] Mobile-friendly (no jank)
- [ ] Accessible (keyboard navigation works)

## Success Criteria
- ✅ All animations serve a purpose
- ✅ Smooth 60fps performance
- ✅ Consistent easing and timing
- ✅ Scroll-triggered reveals work
- ✅ Hover states provide feedback
- ✅ Reduced motion support
- ✅ Mobile responsive

## Learnings (Updated: 2026-01-22)
- **Viewport Once**: Use `viewport={{ once: true }}` to prevent re-triggering
- **Stagger Timing**: 0.1s between items feels natural
- **Easing**: `[0.25, 0.1, 0.25, 1]` (ease-in-out-cubic) is versatile
- **Duration**: 0.5s for most reveals, 0.3s for hovers
- **Scale**: Keep subtle (1.02-1.05) for professional feel

## Related Directives
- `implement_spatial_composition.md` - Layout and spacing
- `create_premium_ui_components.md` - Component creation
- `update_global_styles.md` - CSS system
