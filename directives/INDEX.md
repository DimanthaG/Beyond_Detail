# Directives Index

**Beyond Detail - AGENTSJAN Architecture**  
**Last Updated**: January 22, 2026

---

## 📋 All Directives (7 Total)

### **1. apply_premium_design_standards.md** (3.9 KB)
**Category**: Master Directive  
**Purpose**: Overall design system implementation

**Key Topics**:
- Design principles from SKILL_Frontend.md
- Component order for service pages
- Page categories (Main, Core, Neighborhood, Specialized)
- Key components (TrustBadges, SkillShowcase, Premium Overview)
- Performance optimizations
- Success criteria

**Use When**: 
- Updating any page
- Implementing new design features
- Reviewing design consistency

---

### **2. create_premium_ui_components.md** (5.3 KB)
**Category**: Component Development  
**Purpose**: Guidelines for creating new UI components

**Key Topics**:
- Bold aesthetic direction
- Typography standards (Montserrat)
- Color & theme system
- Motion & animation principles
- Spatial composition rules
- Component creation process
- Accessibility requirements

**Use When**:
- Building new components
- Enhancing existing components
- Ensuring premium quality

---

### **3. implement_motion_design.md** (7.7 KB) ⭐ NEW
**Category**: Animation & Interaction  
**Purpose**: Create purposeful, smooth animations

**Key Topics**:
- Framer Motion patterns
- Scroll-triggered reveals
- Hover states
- Page transitions
- Performance optimization
- Animation patterns by component type
- Accessibility (reduced motion)

**Use When**:
- Adding animations
- Creating interactive elements
- Enhancing user feedback
- Improving engagement

**Covers SKILL_Frontend.md**: ✅ Motion (Principle #4)

---

### **4. implement_spatial_composition.md** (9.5 KB) ⭐ NEW
**Category**: Layout & Spacing  
**Purpose**: Create layouts with generous spacing and premium feel

**Key Topics**:
- Generous spacing standards
- Glassmorphism card system
- Grid and flex layouts
- Responsive breakpoints
- Typography spacing
- Whitespace strategy
- Touch targets (mobile)

**Use When**:
- Creating page layouts
- Designing card components
- Implementing responsive design
- Ensuring readability

**Covers SKILL_Frontend.md**: ✅ Spatial Composition (Principle #5)

---

### **5. update_global_styles.md** (5.6 KB)
**Category**: CSS/SCSS Management  
**Purpose**: Maintain global style system

**Key Topics**:
- CSS variables system
- Typography hierarchy
- Color palette (primary & accent)
- Glassmorphism standards
- Background system
- Animation standards
- Responsive breakpoints

**Use When**:
- Updating global styles
- Adding CSS variables
- Modifying theme
- Ensuring consistency

---

### **6. update_neighborhood_pages.md** (2.6 KB)
**Category**: Bulk Operations  
**Purpose**: Systematically update neighborhood pages

**Key Topics**:
- Context (60 pages across 4 service types)
- Tools/scripts to use (`update_neighborhood_pages.py`)
- Expected output
- Process steps
- Edge cases
- Success criteria

**Use When**:
- Bulk updating neighborhood pages
- Adding components to multiple pages
- Repetitive update tasks

**Related Script**: `execution/update_neighborhood_pages.py`

---

### **7. test_website_changes.md** (3.9 KB)
**Category**: Quality Assurance  
**Purpose**: Verify changes in browser

**Key Topics**:
- Dev server management
- Browser testing checklist
- Component verification
- Page-specific tests
- Common issues & solutions
- Expected warnings

**Use When**:
- After any code changes
- Before committing
- Verifying bulk updates
- Ensuring quality

---

## 🎨 SKILL_Frontend.md Coverage

All 6 principles from SKILL_Frontend.md are now covered:

1. ✅ **Bold Aesthetic Direction** → `create_premium_ui_components.md`
2. ✅ **Typography** → `update_global_styles.md` + `create_premium_ui_components.md`
3. ✅ **Color & Theme** → `update_global_styles.md`
4. ✅ **Motion** → `implement_motion_design.md` ⭐
5. ✅ **Spatial Composition** → `implement_spatial_composition.md` ⭐
6. ✅ **Backgrounds & Visual Details** → `update_global_styles.md` + `create_premium_ui_components.md`

---

## 🔄 Directive Relationships

```
apply_premium_design_standards.md (Master)
├── create_premium_ui_components.md
│   ├── implement_motion_design.md
│   └── implement_spatial_composition.md
├── update_global_styles.md
├── update_neighborhood_pages.md
│   └── execution/update_neighborhood_pages.py
└── test_website_changes.md
```

---

## 📊 Usage Guide

### For New Features
1. Read: `apply_premium_design_standards.md`
2. Design: `create_premium_ui_components.md`
3. Animate: `implement_motion_design.md`
4. Layout: `implement_spatial_composition.md`
5. Style: `update_global_styles.md`
6. Test: `test_website_changes.md`

### For Bulk Updates
1. Read: `update_neighborhood_pages.md`
2. Run: `execution/update_neighborhood_pages.py`
3. Test: `test_website_changes.md`

### For Maintenance
1. Review: Relevant directive
2. Update: Code/styles
3. Test: `test_website_changes.md`
4. Document: Add learnings to directive

---

## 🎯 Quick Reference

| Need to... | Use this directive |
|------------|-------------------|
| Add a new component | `create_premium_ui_components.md` |
| Add animations | `implement_motion_design.md` |
| Design a layout | `implement_spatial_composition.md` |
| Update colors/fonts | `update_global_styles.md` |
| Bulk update pages | `update_neighborhood_pages.md` |
| Test changes | `test_website_changes.md` |
| Overall guidance | `apply_premium_design_standards.md` |

---

## 📈 Directive Statistics

- **Total Directives**: 7
- **Total Size**: 38.4 KB
- **Coverage**: All 6 SKILL_Frontend.md principles
- **Execution Scripts**: 1 (`update_neighborhood_pages.py`)
- **Status**: ✅ Complete

---

## 🔄 Self-Annealing

All directives include a **"Learnings"** section that should be updated when:
- New patterns are discovered
- Edge cases are encountered
- Better approaches are found
- Common errors are solved

This keeps the system continuously improving.

---

**System**: AGENTSJAN + SKILL_Frontend  
**Project**: Beyond Detail Website  
**Architecture**: 3-Layer (Directives → Orchestration → Execution)
