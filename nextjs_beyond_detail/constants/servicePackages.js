export const AUTO_DETAIL_PACKAGES = [
    {
        name: "Essential Detail",
        originalPrice: 299,
        salePrice: 199,
        savings: 100,
        urgencyText: "Limited time pricing",
        priceNote: "Interior Refresh + Exterior. Starting price — larger vehicles may cost extra.",
        description: "Complete interior refresh plus a premium exterior hand wash. Your car gets a thorough interior vacuum and dusting, clean windows and mirrors, plus a full exterior wash with wheels and tires detailed. The perfect all-around clean.",
        features: [
            "Interior Vacuum & Dusting",
            "Carpets, Seats & Floor Mats Vacuumed",
            "Interior & Exterior Windows Cleaned",
            "All Mirrors Cleaned",
            "Exterior Premium Hand Wash",
            "Wheels & Tires Cleaned & Dressed",
            "Door Jambs Wiped"
        ],
        ctaText: "Book This Package"
    },
    {
        name: "Complete Detail",
        originalPrice: 399,
        salePrice: 279,
        savings: 120,
        urgencyText: "Limited time pricing",
        priceNote: "Interior Deep Clean + Exterior. Starting price — larger vehicles may cost extra.",
        description: "Deep interior cleaning with sanitization paired with a comprehensive exterior detail. Includes upholstery cleaning, full disinfection, plus an exterior hand wash, clay bar decontamination, and carnauba wax protection. Our most popular package.",
        features: [
            "Interior Vacuum & Dusting",
            "Carpets, Seats & Floor Mats Vacuumed",
            "Upholstery Surface Cleaning",
            "Interior Sanitized & Disinfected",
            "Interior & Exterior Windows Cleaned",
            "All Mirrors Cleaned",
            "Exterior Premium Hand Wash",
            "Clay Bar Decontamination",
            "Carnauba Wax Protection",
            "Wheels & Tires Cleaned & Dressed",
            "Door & Trunk Jambs Cleaned"
        ],
        featured: true,
        ctaText: "Book This Package"
    },
    {
        name: "Ultimate Detail",
        originalPrice: 499,
        salePrice: 349,
        savings: 150,
        urgencyText: "Limited time pricing",
        priceNote: "Interior Premium + Full Exterior. Starting price — larger vehicles may cost extra.",
        description: "Our top-tier package combines a full premium interior restoration with a complete exterior detail. Deep carpet and seat shampooing removes stubborn stains, grime, and odors, while the exterior receives clay bar treatment, paint prep polishing, and sealant protection. Perfect for heavily used vehicles and pre-sale prep.",
        features: [
            "Full Interior Vacuum & Dusting",
            "Dashboard, Console & Door Panels Detailed",
            "Carpets, Seats & Floor Mats Vacuumed",
            "Upholstery Deep Cleaned",
            "Interior Sanitized & Disinfected",
            "Seats Shampooed / Extracted (Deep Stain & Grime Removal)",
            "Carpets Shampooed / Extracted (Deep Stain, Grime & Salt Removal)",
            "Interior & Exterior Windows Cleaned",
            "All Mirrors Cleaned",
            "Exterior Premium Hand Wash",
            "Clay Bar Decontamination",
            "Paint Prep Polish",
            "Sealant Protection Applied",
            "Wheels & Tires Cleaned & Dressed",
            "Door & Trunk Jambs Cleaned"
        ],
        ctaText: "Book This Package"
    }
];

export const PAINT_CORRECTION_PACKAGES = [
    {
        name: "Single Stage Correction",
        priceRange: { start: 250, end: 350 },
        priceNote: "Pricing varies by vehicle size",
        description: "Perfect for vehicles with light swirl marks. Includes one-stage polishing to restore clarity.",
        features: [
            "Paint inspection",
            "Decontamination (clay bar)",
            "Single-stage polishing",
            "Finishing polish",
            "Sealant protection",
            "All exterior panels"
        ],
        ctaText: "Book This Package"
    },
    {
        name: "Two Stage Correction",
        priceRange: { start: 500, end: 700 },
        priceNote: "Pricing varies by vehicle size",
        description: "Ideal for moderate swirls and scratches. Two-stage polishing ensures deeper defect removal.",
        features: [
            "Paint inspection",
            "Decontamination (clay bar)",
            "Two-stage polishing",
            "Advanced finishing",
            "Premium sealant",
            "All exterior panels",
            "Enhanced depth"
        ],
        featured: true,
        ctaText: "Book This Package"
    },
    {
        name: "Three Stage Correction",
        priceRange: { start: 800, end: 1200 },
        priceNote: "Pricing varies by vehicle size",
        description: "Comprehensive correction for severe defects. Three+ stages for showroom-perfect results.",
        features: [
            "Paint inspection",
            "Decontamination (clay bar)",
            "Multi-stage polishing",
            "Advanced finishing",
            "Premium protection",
            "All exterior panels",
            "Maximum gloss",
            "Scratch repair"
        ],
        ctaText: "Book This Package"
    }
];

export const CERAMIC_COATING_PACKAGES = [
    {
        name: "Single Stage + Ceramic Coating",
        priceRange: { start: 350, end: 450 },
        priceNote: "Pricing varies by vehicle size. Includes Single Stage Paint Correction + Ceramic Coating (replaces standard sealant)",
        description: "Perfect for vehicles with light swirl marks. Includes single-stage paint correction plus ceramic coating for superior protection. Ceramic coating replaces the standard sealant and provides better, longer-lasting protection.",
        features: [
            "Complete paint surface inspection",
            "Thorough decontamination (clay bar)",
            "Single-stage compound polishing",
            "Finishing polish application",
            "Professional ceramic coating application",
            "All exterior panels treated",
            "Superior protection vs. standard sealant"
        ],
        ctaText: "Book This Package"
    },
    {
        name: "Two Stage + Ceramic Coating",
        priceRange: { start: 600, end: 800 },
        priceNote: "Pricing varies by vehicle size. Includes Two Stage Paint Correction + Ceramic Coating (replaces standard sealant)",
        description: "Ideal for moderate swirl marks and light scratches. Includes two-stage paint correction plus ceramic coating. Ceramic coating provides better protection than the standard sealant included with paint correction packages.",
        features: [
            "Complete paint surface inspection",
            "Thorough decontamination (clay bar)",
            "Two-stage compound polishing",
            "Advanced finishing polish",
            "Professional ceramic coating application",
            "All exterior panels treated",
            "Enhanced gloss and depth",
            "Superior protection vs. standard sealant"
        ],
        featured: true,
        ctaText: "Book This Package"
    },
    {
        name: "Three Stage + Ceramic Coating",
        priceRange: { start: 900, end: 1300 },
        priceNote: "Pricing varies by vehicle size and condition. Includes Three Stage Paint Correction + Ceramic Coating (replaces standard sealant)",
        description: "Comprehensive correction for severe defects plus ceramic coating. Includes three-stage paint correction for maximum results, finished with ceramic coating that provides superior protection compared to standard sealant.",
        features: [
            "Complete paint surface inspection",
            "Thorough decontamination (clay bar)",
            "Multi-stage compound polishing (3+ stages)",
            "Advanced finishing polish",
            "Professional ceramic coating application",
            "All exterior panels treated",
            "Maximum gloss and depth restoration",
            "Minor scratch repair (when applicable)",
            "Superior protection vs. standard sealant"
        ],
        ctaText: "Book This Package"
    }
];

export const WINDOW_TINT_PACKAGES = [
    {
        name: "Standard Carbon Tint (ATC)",
        priceRange: { start: 250 },
        priceNote: "Starting price for Sedans. SUVs/Trucks extra.",
        description: "A quality dyed-film solution that provides privacy and style with standard heat rejection. Matte black charcoal finish.",
        features: [
            "Good Heat Rejection",
            "99% UV Ray Protection",
            "Charcoal Black Finish",
            "Non-Metalized (No Signal Interference)",
            "Lifetime Warranty"
        ],
        ctaText: "Book Carbon Tint"
    },
    {
        name: "Premium Ceramic Tint (CTX)",
        priceRange: { start: 350 },
        priceNote: "Starting price for Sedans. SUVs/Trucks extra.",
        description: "Advanced nano-ceramic technology offering superior heat rejection without darkening your view unnecessarily. The popular choice.",
        features: [
            "Superior Heat Rejection (Up to 70%)",
            "99% UV Ray Protection",
            "Scratch-Resistant Coating",
            "High Visibility Clarity",
            "Lifetime Warranty"
        ],
        featured: true,
        ctaText: "Book Ceramic Tint"
    },
    {
        name: "Ultimate IRX Ceramic Tint",
        priceRange: { start: 450 },
        priceNote: "Starting price for Sedans. SUVs/Trucks extra.",
        description: "Top-of-the-line infrared rejection technology. Blocks up to 97% of heat-producing IR rays for maximum comfort.",
        features: [
            "Maximum Heat Rejection (97% IR)",
            "Coolest Cabin Experience",
            "99% UV Protection",
            "Premium Color Stability",
            "Lifetime Warranty"
        ],
        ctaText: "Book IRX Tint"
    }
];
