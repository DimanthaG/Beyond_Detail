# Step 1: Intelligence & Mapping Artifact
### Phase 2 Digital Infrastructure Refactor

#### 1. Homepage Authority Analysis
*   **Current Rankings:** Position 13.7 for "Car Detailing Scarborough" / "Auto Detailing Scarborough".
*   **Identified Issues:**
    *   **H1 Structure:** The H1 in `HomeHero.jsx` is split into spans: `Car Detailing` + `Scarborough`. While visually effective, it might be diluting the strict exact-match keyword "Auto Detailing Scarborough" which also has 1,600 volume. The H1 currently leads with "Car Detailing".
    *   **Keyword Cannibalization:** The `SEO` component uses `Car Detailing Scarborough` as the name and title focus. It mentions `Auto Detailing` in keywords but lacks a strong, unified H1 specifically targeting "Auto Detailing" as a primary variant.
    *   **Content Density:** The homepage description is good but could be more entity-rich.

#### 2. Window Tinting Page Analysis (`/tints`)
*   **Current Rankings:** Position 11.41 for "Window Tinting Scarborough".
*   **AI Asset:** "Llumar Window Tinting" is a strong entity (Avg Position 3.0 in AI search).
*   **"Answer Upfront" & Pricing:**
    *   **Current State:** The page has a general "Window Tinting Scarborough" H1.
    *   **Gap:** It lacks a dedicated "Direct Answer" block explaining *why* Llumar is the best for Scarborough summers (a key AI intent query).
    *   **Pricing:** The FAQ mentions "typically ranges from $200-$600" and "starting at $250". This *is* transparent, but could be made even more prominent as a "Price Transparency" table or block to satisfy the "concrete numbers" requirement for AI agents.

#### 3. Strategic Map for Phase 2
*   **Homepage:**
    *   Refactor H1 to balance "Car Detailing" and "Auto Detailing" dominance.
    *   Add LocalBusiness Schema with exact coordinates (Finchdene Square) to `SEO.jsx`.
*   **Window Tinting:**
    *   Add **H2: "Why is Llumar the best window tint for Scarborough summers?"** with a direct answer.
    *   Enhance Pricing visibility (e.g., a clear "Starting at" price list or highly visible pricing tier text).
*   **Hyper-Local:**
    *   Inject "Markham Road" and "Nugget Avenue" into footer/service areas (Footer component refactor needed).

#### 4. Keyword Map (To Prevent Cannibalization)
*   **Homepage:** "Car Detailing Scarborough", "Auto Detailing Scarborough"
*   **Window Tinting Page:** "Window Tinting Scarborough", "Llumar Window Tinting", "Ceramic Tint Scarborough"
*   **Ceramic Coating Page:** "Ceramic Coating Scarborough", "Ceramic Coating Toronto" (via new landing page)
*   **New Local Pages:** "Car Detailing Markham Road" (Micro-target)

**Status:** Ready to proceed with Phase 2 execution.
