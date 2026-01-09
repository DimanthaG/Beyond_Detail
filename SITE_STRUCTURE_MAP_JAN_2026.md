# 🗺️ SITE STRUCTURE MAP - Current vs Proposed
**Audit Date:** January 9, 2026  
**beyonddetail.ca**

---

## 📊 CURRENT SITE ARCHITECTURE

```
beyonddetail.ca (Homepage)
├─ H1: "Car Detailing Scarborough" ✅
├─ Meta: "Car Detailing Scarborough | Mobile & Shop..." ✅
├─ Pricing: ❌ NONE (Critical Gap)
└─ Schema: AutomotiveBusiness ✅

├── /tint (Window Tinting)
│   ├─ H1: "Professional Window Tinting & Ceramic Tint in SCARBOROUGH" ⚠️
│   ├─ Position: 11.41 (Page 2) 🔴
│   ├─ Pricing: "Starting at $250" (title only) ⚠️
│   └─ Entity: Llumar mentioned but not lead ⚠️
│
├── /ceramic-coatings (Ceramic Coating)
│   ├─ H1: "Professional Ceramic Coating...in SCARBOROUGH" ✅
│   ├─ Pricing: $350-$1,300 ✅
│   ├─ Answer Block: ❌ NONE (0 AI citations) 🔴
│   └─ H2: "WHAT IS THE BEST CERAMIC COATING FOR SCARBOROUGH WINTERS?" (asks, doesn't answer)
│
├── /paint-correction (Paint Correction)
│   ├─ H1: "Car Detailing & SCRATCH REPAIR TORONTO" ⚠️ (mixed geo)
│   ├─ Pricing: $250-$1,200 ✅
│   └─ H2: "PAINT CORRECTION NEAR ME - ...SCARBOROUGH & GTA" ✅
│
├── /interior-detailing (Interior Detailing)
│   ├─ H1: "Interior Detailing in TORONTO" 🔴 (should be Scarborough)
│   └─ Pricing: $80-$180 ✅
│
├── /auto-detail (Auto Detailing)
│   ├─ H1: "Full-Service Auto Detailing in TORONTO" 🔴 (should be Scarborough)
│   ├─ Pricing: $100 / $150 / $200 ✅ GOLD STANDARD
│   └─ Packages: Express, Signature, Premium ✅
│
├── /exterior-detailing (Exterior Detailing)
│   ├─ H1: "Exterior Detailing in TORONTO & SCARBOROUGH" ✅
│   └─ Pricing: $50-$150 (estimated) ✅
│
├── /car-detailing-scarborough (Location Landing Page)
│   ├─ H1: Unknown (needs audit)
│   └─ Purpose: Hyper-local targeting ✅
│
├── /window-tinting-west-hill (Location Landing Page)
│   ├─ H1: "Expert Window Tinting in WEST HILL & SCARBOROUGH" ✅
│   └─ Strategy: Leverage Llumar Position 3.0 ✅
│
└── /window-tinting-scarborough (Location Landing Page)
    ├─ Status: Exists ✅
    └─ Purpose: Should be primary tint page (not /tint)

```

---

## 🎯 PROPOSED SITE ARCHITECTURE (Post-Refactor)

```
beyonddetail.ca (Homepage) 🔄 REFACTORED
├─ H1: "Car Detailing Scarborough (Mobile & In-Shop) — Interior, Exterior, Ceramic Coating" ✨ NEW
├─ Meta: "Car Detailing Scarborough | $599-$1,699 Packages | Mobile & In-Shop" ✨ NEW
├─ Pricing Packages (Above-the-Fold): ✨ NEW
│   ├─ Express Detail: $599
│   ├─ Interior Refresh: $1,099
│   └─ Deep Clean: $1,699
├─ Schema: AutomotiveBusiness + Llumar Brand Entity ✨ ENHANCED
└─ Answer Block: "What's the best car detailing in Scarborough?" ✨ NEW

├── /tint (Window Tinting) 🔄 REFACTORED
│   ├─ H1: "Llumar Window Tinting Scarborough — Heat Rejection, UV Protection, Lifetime Warranty" ✨ NEW
│   ├─ Meta: "Llumar Window Tinting Scarborough | Starting at $250 | Lifetime Warranty" ✨ NEW
│   ├─ Target Position: Top 3 (from 11.41) 🎯
│   ├─ Pricing Packages (Visible): ✨ NEW
│   │   ├─ Sedan: $250-$350
│   │   ├─ SUV: $350-$450
│   │   └─ Full Tint + Ceramic: $500+
│   ├─ Entity Lead: "Llumar Authorized Dealer" ✨ NEW
│   └─ Answer Block: "Why is Llumar the best window tint for Scarborough summers?" ✨ NEW
│       (120 words: heat rejection, UV protection, fade prevention, lifetime warranty)
│
├── /ceramic-coatings (Ceramic Coating) 🔄 REFACTORED
│   ├─ H1: "Ceramic Coating Scarborough — 9H Protection, Road Salt Defense, Lifetime Shine" ✨ ENHANCED
│   ├─ Pricing H2: "Express Ceramic ($350) | Premium Ceramic ($800) | Elite Ceramic ($1,300)" ✨ NEW
│   ├─ Answer Block: ✨ NEW
│   │   "Is ceramic coating worth it for Toronto winters?"
│   │   (120 words: road salt protection, freeze-thaw cycles, Highway 401 spray,
│   │    molecular bonding vs wax, 5+ year protection, Finchdene Square location)
│   └─ Entity Grounding: "Toronto road salt", "Highway 401", "Markham Rd construction dust" ✨ NEW
│
├── /paint-correction (Paint Correction) ✅ MAINTAIN (Already Optimized)
│   ├─ H1: "Paint Correction Near Me — Professional Scratch Repair in Scarborough & GTA"
│   ├─ Pricing: $250-$1,200 ✅
│   └─ Answer Block: ✨ NEW
│       "How to remove swirl marks from black cars?"
│       (120 words: 2-stage polishing, compound vs polish, Scarborough specialists)
│
├── /interior-detailing (Interior Detailing) 🔄 REFACTORED
│   ├─ H1: "Interior Detailing Scarborough — Stain Removal, Odor Elimination, Steam Cleaning" ✨ NEW
│   ├─ Pricing: $80-$180 ✅
│   └─ Answer Block: ✨ NEW
│       "How to remove road salt stains from car seats?"
│       (120 words: extraction shampooing, winter damage, Scarborough salt spray)
│
├── /auto-detail (Auto Detailing) 🔄 REFACTORED
│   ├─ H1: "Auto Detailing Scarborough — Express, Signature & Premium Packages" ✨ NEW
│   ├─ Pricing: $100 / $150 / $200 ✅ (Keep Gold Standard)
│   ├─ Packages: ✅ (Already perfect)
│   └─ Answer Block: ✨ NEW
│       "What's included in full-service auto detailing?"
│       (120 words: interior vacuum, exterior wash, sanitization, package comparison)
│
├── /exterior-detailing (Exterior Detailing) ✅ MAINTAIN
│   ├─ H1: "Exterior Detailing in TORONTO & SCARBOROUGH" ✅
│   └─ Pricing: $50-$150 ✅
│
├── /car-detailing-scarborough (Location Landing Page) ✅ MAINTAIN
│   └─ Purpose: Reinforce primary keyword authority
│
├── /window-tinting-west-hill (Location Landing Page) 🔄 REFACTORED
│   ├─ H1: "Llumar Window Tinting West Hill — Authorized Dealer, Lifetime Warranty" ✨ ENHANCED
│   ├─ Strategy: Push from Page 2 → "Golden Triangle" (Top 3)
│   └─ Entity: Link to Llumar brand schema ✨ NEW
│
└── /window-tinting-scarborough (Location Landing Page) 🔄 REFACTORED
    ├─ H1: "Window Tinting Scarborough — Llumar, 3M, Heat Rejection Film" ✨ ENHANCED
    ├─ Canonicalize: Consider redirecting /tint → /window-tinting-scarborough 🤔
    └─ Purpose: Primary local landing page for window tint searches

```

---

## 🔄 KEY STRUCTURAL CHANGES

### 1. Homepage Enhancement
**BEFORE:**
- ❌ No pricing visible
- ❌ Generic H1 (screen reader text confusing)
- ❌ No answer block

**AFTER:**
- ✅ 3-stage pricing packages above-the-fold
- ✅ Exact H1 match per mission objective
- ✅ Direct answer to "What's the best car detailing in Scarborough?"

---

### 2. Service Page Standardization
**BEFORE:**
- ⚠️ Inconsistent geo-modifiers (Toronto vs Scarborough)
- ⚠️ Pricing buried or missing
- ❌ No answer blocks for AI citations

**AFTER:**
- ✅ Standardized: "Llumar Window Tinting Scarborough", "Ceramic Coating Scarborough", etc.
- ✅ Pricing in H2 headers (following GrandCarWash.ca pattern)
- ✅ 120-word answer blocks on all service pages

---

### 3. Schema Architecture Enhancement
**BEFORE:**
```json
{
  "@type": "AutomotiveBusiness",
  "hasOfferCatalog": {
    "name": "Auto Detailing Services",
    "itemListElement": [...]
  }
}
```

**AFTER:**
```json
{
  "@type": "AutomotiveBusiness",
  "brand": {
    "@type": "Brand",
    "name": "Llumar",
    "logo": "https://llumar.com/logo.png"
  },
  "hasOfferCatalog": {
    "name": "Auto Detailing & Window Tinting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Llumar IRX Ceramic Window Tint",
          "brand": "Llumar",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "CAD",
            "price": "250",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "minPrice": "250",
              "maxPrice": "450"
            }
          }
        }
      }
    ]
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Scarborough",
      "containedInPlace": {
        "@type": "City",
        "name": "Toronto"
      }
    }
  ]
}
```

---

## 🎯 INTERNAL LINKING STRATEGY

### Current Internal Links
```
Homepage
├─ Popular Services shortcuts:
│   ├─ /tint
│   ├─ /ceramic-coatings
│   ├─ /paint-correction
│   └─ /auto-detail
└─ Footer links: All service pages ✅
```

### Proposed Internal Linking (Enhanced)
```
Homepage
├─ Service Package Cards (NEW):
│   ├─ "Express Detail ($599)" → /auto-detail#express
│   ├─ "Interior Refresh ($1,099)" → /interior-detailing
│   └─ "Deep Clean ($1,699)" → /auto-detail#premium
├─ Popular Services:
│   ├─ "Llumar Window Tinting" → /tint (anchor text change)
│   ├─ "Ceramic Coating Scarborough" → /ceramic-coatings
│   └─ "Paint Correction" → /paint-correction
└─ Answer Block Links:
    └─ "Learn more about ceramic coating" → /ceramic-coatings
```

**Impact:** Improved PageRank flow to money pages (/tint, /ceramic-coatings)

---

## 📍 LOCATION PAGE HIERARCHY

### Current Structure
```
Main Service Pages (Generic)
├─ /tint
├─ /ceramic-coatings
└─ /paint-correction

Location Landing Pages (Hyper-Local)
├─ /car-detailing-scarborough
├─ /window-tinting-scarborough
└─ /window-tinting-west-hill
```

### Proposed Strategy
**Option A: Keep Dual Structure**
- Main pages target broad keywords
- Location pages target "[service] + [area]"
- Risk: Keyword cannibalization

**Option B: Consolidate**
- Redirect /tint → /window-tinting-scarborough
- Make location pages primary
- Benefit: Stronger local signal

**Recommendation:** Keep dual structure BUT:
1. Add `rel="canonical"` from location pages → main pages
2. Use location pages for Google My Business posts
3. Internal link from main pages to location pages ("Serving West Hill? Click here")

---

## 🧩 SCHEMA HIERARCHY

```
Organization (@id: https://beyonddetail.ca#organization)
└─ AutomotiveBusiness (@id: https://beyonddetail.ca)
    ├─ address: 170 Finchdene Square, Scarborough
    ├─ geo: 43.8173, -79.2476
    ├─ aggregateRating: 5.0 (70 reviews)
    ├─ brand: Llumar (NEW)
    ├─ areaServed: [Scarborough, Toronto, Markham, Pickering]
    ├─ hasOfferCatalog:
    │   ├─ Llumar Window Tinting ($250-$450)
    │   ├─ Ceramic Coating ($350-$1,300)
    │   ├─ Paint Correction ($250-$1,200)
    │   └─ Auto Detailing ($100-$200)
    └─ makesOffer: [Service-specific schema per page]

Service Pages (Individual)
├─ /tint → Service schema (Window Tinting)
├─ /ceramic-coatings → Service schema (Ceramic Coating)
└─ /paint-correction → Service schema (Paint Correction)

All Pages
├─ BreadcrumbList (navigation trail)
├─ FAQPage (where FAQs exist)
└─ ImageObject (gallery images)
```

---

## 📊 KEYWORD DISTRIBUTION MAP

### Primary Keywords (Homepage)
- "Car Detailing Scarborough" (1,600 vol) → Homepage H1 ✅
- "Mobile Car Detailing Scarborough" (unknown vol) → Homepage H2 🎯
- "Auto Detailing Scarborough" (480 vol) → /auto-detail 🔄

### Service-Specific Keywords
- "Window Tinting Scarborough" → /tint H1 🔄
- "Llumar Window Tinting" (Position 3.0) → /tint lead 🎯
- "Ceramic Coating Scarborough" → /ceramic-coatings H1 ✅
- "Paint Correction Near Me" (720 vol) → /paint-correction H1 ✅
- "Interior Detailing Scarborough" → /interior-detailing H1 🔄

### Location-Specific Keywords
- "Car Detailing West Hill" → /window-tinting-west-hill
- "Window Tinting West Hill" → /window-tinting-west-hill
- "Ceramic Coating Toronto" → /ceramic-coating-toronto (NEW?)

---

## 🔍 CRAWL PATH ANALYSIS

### Search Engine Crawl Path (Current)
```
Homepage (Priority 1)
├─ crawl-delay: 0
├─ sitemap.xml: ✅ Exists
└─ robots.txt: ✅ Allows all

Main Service Pages (Priority 2)
├─ Linked from homepage: ✅
├─ Internal links: ✅ Footer + shortcuts
└─ Breadcrumbs: ✅ Schema implemented

Location Pages (Priority 3)
├─ Linked from: Service Areas page ✅
└─ Orphaned?: ⚠️ Check internal link depth
```

**Recommendation:** Add location page links to homepage trust section:
```html
<section class="service-areas-trust">
  <h2>Serving Scarborough & GTA</h2>
  <ul>
    <li><a href="/car-detailing-scarborough">Car Detailing Scarborough</a></li>
    <li><a href="/window-tinting-west-hill">Window Tinting West Hill</a></li>
  </ul>
</section>
```

---

## 🎯 PRIORITY REFACTOR ORDER

### Week 1: Core Service Pages (Highest ROI)
1. **Homepage** - Add pricing packages
2. **/tint** - Change H1, add answer block
3. **/ceramic-coatings** - Add answer block
4. **/auto-detail** - Change H1 to Scarborough

### Week 2: Schema & Entity Grounding
5. **Schema Enhancement** - Add Llumar brand entity
6. **Service Pricing Schema** - Add price structured data
7. **Entity Grounding** - Add local pain points

### Week 3: Location Pages & Polish
8. **Location Pages** - Enhance /window-tinting-west-hill
9. **Answer Blocks** - Add to all remaining service pages
10. **Performance Audit** - Lighthouse re-test

---

**End of Site Structure Map**  
**Next Step:** Human approval to proceed with Phase 1 refactor
