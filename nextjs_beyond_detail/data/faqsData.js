// Fallback FAQ data to display when Sanity CMS has no FAQs
// This ensures the FAQs page always has content available

export const fallbackFAQs = [
  // General Category
  {
    _id: 'faq-general-1',
    category: 'general',
    question: 'What is auto detailing, and how does it differ from a regular car wash?',
    answer: [
      {
        children: [
          { text: "Auto detailing is a comprehensive cleaning, restoration, and protection process for both the interior and exterior of your vehicle. Unlike a standard car wash, detailing involves deep cleaning, polishing, waxing, and restoring various components to achieve a showroom-quality finish. We use specialized products, equipment, and techniques to remove embedded dirt, restore paint clarity, condition interior surfaces, and protect your vehicle from environmental damage." }
        ]
      }
    ],
    order: 1
  },
  {
    _id: 'faq-general-2',
    category: 'general',
    question: 'How often should I have my vehicle detailed?',
    answer: [
      {
        children: [
          { text: "The frequency of detailing depends on your driving habits, environmental conditions, and personal preferences. Generally, we recommend having your vehicle detailed every 3 to 6 months to maintain its appearance and protect its surfaces. For vehicles driven daily or exposed to harsh conditions (road salt, construction zones, etc.), more frequent detailing (every 2-3 months) may be beneficial. Vehicles with ceramic coatings may require less frequent full detailing but should still receive regular maintenance." }
        ]
      }
    ],
    order: 2
  },
  {
    _id: 'faq-general-3',
    category: 'general',
    question: 'Where is Beyond Detail located?',
    answer: [
      {
        children: [
          { text: "Beyond Detail is located at 170 Finchdene Square, Unit 11, Scarborough, ON M1X 1B3. We also offer mobile detailing services throughout the GTA, including Toronto, Markham, Pickering, Ajax, Whitby, and Oshawa." }
        ]
      }
    ],
    order: 3
  },
  // Services Category
  {
    _id: 'faq-services-1',
    category: 'services',
    question: 'What services does Beyond Detail offer?',
    answer: [
      {
        children: [
          { text: "We offer a comprehensive range of automotive care services including: Interior Detailing (deep cleaning, steam cleaning, leather conditioning), Exterior Detailing (hand wash, clay bar treatment, polish), Paint Correction (swirl mark removal, scratch repair), Ceramic Coating (2-5 year paint protection), Window Tinting (LLumar premium films with lifetime warranty), Headlight Restoration, Odour Removal, and Fleet/Commercial services." }
        ]
      }
    ],
    order: 1
  },
  {
    _id: 'faq-services-2',
    category: 'services',
    question: 'Do you offer mobile detailing services?',
    answer: [
      {
        children: [
          { text: "Yes! We offer mobile detailing services throughout the Greater Toronto Area. Our fully equipped mobile units can come to your home, office, or any convenient location. Mobile services include interior and exterior detailing, maintenance washes, and select protection services. Note that some services like ceramic coating and paint correction require our controlled shop environment for optimal results." }
        ]
      }
    ],
    order: 2
  },
  // Pricing Category
  {
    _id: 'faq-pricing-1',
    category: 'pricing',
    question: 'How much does car detailing cost?',
    answer: [
      {
        children: [
          { text: "Our detailing packages start from $199 for an Essential Detail (interior refresh + exterior wash). The Complete Detail starts at $279 and includes deep interior cleaning with sanitization plus comprehensive exterior detail. Pricing varies based on vehicle size and condition. We provide transparent, upfront quotes with no hidden fees. Contact us for a custom quote based on your specific vehicle and needs." }
        ]
      }
    ],
    order: 1
  },
  {
    _id: 'faq-pricing-2',
    category: 'pricing',
    question: 'How much does ceramic coating cost?',
    answer: [
      {
        children: [
          { text: "Ceramic coating packages range from $800 to $2,500+ depending on vehicle size, paint condition, and protection level. All packages include paint correction, coating application, and a maintenance kit. We offer 2-year, 3-year, and 5-year protection options. Contact us for a free consultation and exact pricing for your vehicle." }
        ]
      }
    ],
    order: 2
  },
  // Booking Category
  {
    _id: 'faq-booking-1',
    category: 'booking',
    question: 'How do I book an appointment?',
    answer: [
      {
        children: [
          { text: "You can book an appointment by calling us at (647) 689-6109, filling out the contact form on our website, or sending us a message on Instagram @beyonddetail.ca. We recommend booking at least 2-3 days in advance, especially during peak seasons (spring and summer). We will confirm your appointment and provide an estimated duration and cost." }
        ]
      }
    ],
    order: 1
  },
  {
    _id: 'faq-booking-2',
    category: 'booking',
    question: 'What are your business hours?',
    answer: [
      {
        children: [
          { text: "We are open Monday through Friday from 8:00 AM to 8:00 PM, and Saturday from 9:00 AM to 6:00 PM. We are closed on Sundays. For urgent requests or special accommodations, please contact us directly and we will do our best to accommodate your schedule." }
        ]
      }
    ],
    order: 2
  }
];
