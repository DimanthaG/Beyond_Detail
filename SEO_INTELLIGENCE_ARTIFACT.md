# SEO Intelligence Artifact (January 2026)
**Mission:** Comprehensive SEO Infrastructure Refactor for beyonddetail.ca
**Date:** January 6, 2026

## 1. Executive Summary & Gap Analysis

The current site structure relies heavily on "Toronto" as the primary geo-modifier. To capture the high-value 2026 search volume ($3.89 CPC and 1,600 monthly searches), we must pivot the architecture to prioritize **Scarborough** as the primary intent, while keeping Toronto as a secondary authoritative signal.

| Metric | Current Status | Target (2026 Data) | Gap Severity |
| :--- | :--- | :--- | :--- |
| **Primary Geo-Target** | Toronto | Scarborough | 🔴 **Critical** |
| **H1 Optimization** | "Professional Car Detailing ... Toronto" | "Car Detailing Scarborough" | 🔴 **Critical** |
| **High Value Landing** | `/ceramic-coatings` (Toronto focus) | "Ceramic Coating Scarborough" | 🟠 **High** |
| **Growth Keywords** | Mixed alignment | "Paint Correction Near Me" | 🟢 **Good** |

---

## 2. Infrastructure Audit Findings

### A. Homepage (`/`)
*   **Current H1:** `Professional Car Detailing Services in Toronto`
*   **Current Meta Title:** `Car Detailing Toronto & Scarborough | Window Tinting & Ceramic Coating | Beyond Detail`
*   **Gap:** The H1 completely misses the "Car Detailing Scarborough" (1,600 vol) keyword. It splits authority between Toronto and Scarborough in the Title, diluting the signal for the primary local searches.
*   **Action:** Refactor H1 to `Car Detailing Scarborough`. Reposition Meta Title to lead with Scarborough.

### B. Ceramic Coating (`/ceramic-coatings`)
*   **Current H1:** `Professional Ceramic Coating & Paint Protection in TORONTO`
*   **Current Meta Title:** `Ceramic Coating Toronto | Car Paint Protection & Correction`
*   **CPC Opportunity:** $3.89 per click.
*   **Gap:** The page is optimized for "Toronto," missing the lucrative "Ceramic Coating Scarborough" intent.
*   **Action:** Rewrite H1 and Meta Data to front-load "Ceramic Coating Scarborough".

### C. Window Tinting (`/tint`)
*   **Current H1:** `Professional Window Tinting & Ceramic Tint in TORONTO`
*   **Current Meta Title:** `Window Tinting Toronto | LLumar Window Tint & Heat Rejection`
*   **CPC Opportunity:** $2.62 per click.
*   **Gap:** Similar to Ceramic Coating, the primary geo-modifier is Toronto.
*   **Action:** Shift H1 to `Window Tinting Scarborough`.

### D. Paint Correction (`/paint-correction`)
*   **Current H2:** `PAINT CORRECTION NEAR ME - PROFESSIONAL SERVICE IN SCARBOROUGH & GTA`
*   **Search Volume:** 720 ("near me" intent).
*   **Gap:** The H2 structure is actually excellent here, targeting "Unknown GEO (Near Me)" and "Scarborough".
*   **Action:** **Maintain**. This structure aligns well with the "paint correction near me" growth opportunity.

### E. Headlight Restoration (`/headlight-restoration`)
*   **Current H1:** `Headlight Restoration in TORONTO & SCARBOROUGH`
*   **Search Volume:** 390.
*   **Gap:** Minimal. It already targets Scarborough explicitly.
*   **Action:** Minor refinement to meta descriptions to increase CTR.

---

## 3. Competitor Intelligence: EE Auto Detailing

*   **Benchmark:** They rank for "Auto Detailing Scarborough" (480 vol).
*   **Strategy:** Our H1 pivot to "Car Detailing Scarborough" (1,600 vol) targets a significantly larger traffic pool (3.3x larger) than their primary keyword, while still encompassing their terms semantically.

## 4. Recommendations for Step 2 (Architecture Refactor)

1.  **H1 Swap:** Immediate refactor of Homepage, Ceramic, and Tint H1s to "Scarborough".
2.  **Meta Title Standardization:** `[Service Keyword] Scarborough | [Secondary Keyword] | Beyond Detail`.
3.  **Local Schema Update:** Ensure the `LocalBusiness` schema on the homepage explicitly lists "Scarborough" as the `addressLocality` if not already preferred over Toronto general.

**End of Artifact**
