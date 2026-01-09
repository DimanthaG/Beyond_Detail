# Component Artifact: Phase 2 Structural Refactor

### 1. Homepage Header Hierarchy (`HomeHero.jsx`)
*   **Current State:** Split H1 ("Car Detailing" / "Scarborough") using spans.
*   **Proposed H1:** `Car Detailing Scarborough (Mobile & In-Shop) — Interior, Exterior, Ceramic Coating`.
*   **Rationale:** This H1 is a "Keyword Super-Cluster." It explicitly targets the primary keyword ("Car Detailing Scarborough") while capturing secondary intents ("Mobile", "Interior", "Exterior") in the primary heading signal.
*   **Implementation:** We will use the `.sr-only` class to present this semantic H1 to bots while keeping the visual design clean (or adapting the visual design if requested, but typically we hide the "ugly" SEO long-tail text behind the visual H1).

### 2. Service Package Hierarchy (`HomeDetailSection.jsx` or similar)
*   **Objective:** Implement a 3-stage hierarchy with explicit pricing tags.
*   **Structure:**
    *   **H2:** `Stage 1: Interior Deep Clean & Sanitization` (Tag: "From $199")
    *   **H2:** `Stage 2: Exterior Paint Correction & Polish` (Tag: "From $399")
    *   **H2:** `Stage 3: Ultimate Ceramic Protection` (Tag: "From $599")
*   **Rationale:** Competitor analysis shows "tiered pricing" wins clicks. AI agents extract these concrete price points as "facts."

### 3. AEO Direct Answer Block (`Tints.jsx`)
*   **Section:** New `H2` block above the gallery.
*   **Heading:** `Why is Llumar the best window tint for Scarborough summers?`
*   **Content Draft:**
    > "Llumar IRX Series is the superior choice for Scarborough drivers because it blocks 99% of UV rays and up to 96% of infrared heat, which is critical for reducing cabin temperatures during our humid GTA summers. Unlike standard dyed films that fade purple, our IDA-certified technicians install Llumar's nano-ceramic film, which comes with a lifetime manufacturer's warranty against bubbling, peeling, and color change. It provides crystal-clear visibility for safer winter driving on Markham Road while protecting your interior from sun damage."

### 4. Ceramic Coating Price Transparency (`CeramicCoating.jsx`)
*   **Action:** Verify the previously added pricing text ensures ranges are explicit.
*   **Target Text:** "Packages range from **$599** for entry-level protection to **$1,699** for permanent lifetime warranty packages."

### 5. Hyper-Local Grounding (`Footer.jsx`)
*   **Current:** "Near Finchdene Square, Markham Road & Nugget Avenue".
*   **Update:** Add "Scarborough Town Centre" to this list to capture the high-volume retail traffic intent.

**Status:** Awaiting User Approval to Apply.
