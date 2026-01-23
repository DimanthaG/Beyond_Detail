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
    question: 'What should I do before my detailing appointment?',
    answer: [
      {
        children: [
          { text: "Please remove all personal items, valuables, and loose belongings from your vehicle. This includes items from the glove box, center console, door pockets, trunk, and under seats. Remove floor mats if you have them separately. This allows our team to focus entirely on cleaning and restoration without risk of damaging or misplacing your items. Also, please let us know about any specific areas of concern or damage you'd like us to address." }
        ]
      }
    ],
    order: 3
  },
  {
    _id: 'faq-general-4',
    category: 'general',
    question: 'How long does a detailing service take?',
    answer: [
      {
        children: [
          { text: "Service duration varies based on the level of service and the condition of your vehicle. A basic exterior detail typically takes 2-3 hours, while a complete interior and exterior detail can take 4-6 hours or more. Paint correction services can take 6-12 hours depending on the severity of defects. Ceramic coating installation requires 10-18 hours including paint correction. We'll provide you with an accurate time estimate when you book your appointment." }
        ]
      }
    ],
    order: 4
  },
  {
    _id: 'faq-general-5',
    category: 'general',
    question: 'Do you offer mobile detailing services?',
    answer: [
      {
        children: [
          { text: "Yes, we offer mobile detailing services for your convenience. Our fully equipped mobile unit comes to your location with all necessary equipment, water, and power sources. This is perfect for busy professionals, fleet managers, or anyone who prefers service at their home or office. Mobile services are available for most detailing packages. Please contact us to discuss scheduling and availability for mobile service." }
        ]
      }
    ],
    order: 5
  },

  // Services Category
  {
    _id: 'faq-services-1',
    category: 'services',
    question: 'What is paint correction?',
    answer: [
      {
        children: [
          { text: "Paint correction is an intensive process designed to eliminate imperfections such as swirl marks, scratches, oxidation, and other surface defects from your vehicle's paint. Our expert technicians use advanced polishing techniques and professional-grade compounds to gradually refine the paint surface, removing defects layer by layer. This process restores your paint to like-new condition, enhancing gloss, depth, and clarity. Paint correction is often performed before applying ceramic coatings to ensure optimal results." }
        ]
      }
    ],
    order: 1
  },
  {
    _id: 'faq-services-2',
    category: 'services',
    question: 'Can paint correction fix deep scratches?',
    answer: [
      {
        children: [
          { text: "Paint correction can significantly reduce the appearance of most scratches, but its effectiveness depends on the depth of the scratch. Light surface scratches and swirl marks can typically be completely removed. Moderate scratches may be reduced to 80-90% improvement. However, if a scratch has penetrated through the clear coat and into the paint layer, paint correction may not completely eliminate it but can make it much less noticeable. We'll assess your vehicle's condition and provide an honest evaluation of what can be achieved." }
        ]
      }
    ],
    order: 2
  },
  {
    _id: 'faq-services-3',
    category: 'services',
    question: 'What is ceramic coating, and is it worth it?',
    answer: [
      {
        children: [
          { text: "Ceramic coating is a liquid polymer that chemically bonds with your vehicle's paint, creating a permanent protective layer. It provides superior protection compared to traditional waxes or sealants, offering enhanced UV resistance, chemical resistance, and hydrophobic properties. When maintained correctly, ceramic coatings can last 5-10 years. It's an excellent investment for vehicle owners who want long-term protection, easier maintenance, increased resale value, and a superior glossy finish. The coating makes cleaning easier as dirt and water bead up and roll off the surface." }
        ]
      }
    ],
    order: 3
  },
  {
    _id: 'faq-services-4',
    category: 'services',
    question: 'What is the difference between wax and sealant?',
    answer: [
      {
        children: [
          { text: "Waxes are typically natural products (carnauba wax) that provide a warm, glossy finish and short-term protection (1-3 months). Sealants are synthetic polymers that offer longer-lasting protection (3-6 months) and superior durability against environmental elements. Ceramic coatings provide the longest-lasting protection (5-10 years) with superior hardness and chemical resistance. We offer all three options and can recommend the best protection for your needs and budget." }
        ]
      }
    ],
    order: 4
  },
  {
    _id: 'faq-services-5',
    category: 'services',
    question: 'Do you offer window tinting services?',
    answer: [
      {
        children: [
          { text: "Yes, we specialize in professional window tinting using premium Llumar films. We offer several tint options including ATC, CTX, and IRX series, each with different levels of heat rejection and UV protection. All our tint installations come with a manufacturer-backed lifetime warranty. We ensure compliance with Ontario tint laws and provide expert installation for all vehicle types. Tint percentages available include 5%, 15%, 30%, and 50%." }
        ]
      }
    ],
    order: 5
  },
  {
    _id: 'faq-services-6',
    category: 'services',
    question: 'What interior detailing services do you offer?',
    answer: [
      {
        children: [
          { text: "Our interior detailing services include comprehensive vacuuming of all surfaces, professional shampoo and extraction of upholstery and carpets, detailed cleaning of dashboard, console, air vents, and cup holders, fabric headliner cleaning, plastic and vinyl surface scrubbing, leather cleaning and conditioning, and odor elimination treatment. We use professional-grade equipment and products to restore your interior to like-new condition." }
        ]
      }
    ],
    order: 6
  },
  {
    _id: 'faq-services-7',
    category: 'services',
    question: 'Can you restore cloudy or yellowed headlights?',
    answer: [
      {
        children: [
          { text: "Yes, we offer professional headlight restoration services. Our multi-stage process involves sanding away the damaged outer layer of plastic, polishing to restore optical clarity, and applying a specialized UV-resistant coating to prevent future yellowing and oxidation. This service dramatically improves both your vehicle's appearance and nighttime visibility. Restoration typically takes 2-4 hours and includes a warranty on the protection coating." }
        ]
      }
    ],
    order: 7
  },

  // Pricing Category
  {
    _id: 'faq-pricing-1',
    category: 'pricing',
    question: 'How much does detailing cost?',
    answer: [
      {
        children: [
          { text: "Pricing varies based on the service package, vehicle size, and condition. Basic exterior details start around $149-$199, premium interior and exterior details range from $299-$499, and comprehensive services like paint correction or ceramic coating range from $499-$3499. We offer transparent, competitive pricing with no hidden fees. Contact us for a detailed quote based on your specific needs and vehicle." }
        ]
      }
    ],
    order: 1
  },
  {
    _id: 'faq-pricing-2',
    category: 'pricing',
    question: 'Do you offer package deals or discounts?',
    answer: [
      {
        children: [
          { text: "Yes, we offer various service packages that combine multiple services at a discounted rate. We also provide volume discounts for fleet accounts and regular customers. Additionally, combining services like paint correction with ceramic coating offers better value. Please contact us to discuss your needs and we'll create a custom package that fits your budget." }
        ]
      }
    ],
    order: 2
  },
  {
    _id: 'faq-pricing-3',
    category: 'pricing',
    question: 'What forms of payment do you accept?',
    answer: [
      {
        children: [
          { text: "We accept cash, credit cards (Visa, Mastercard, American Express), debit cards, and e-transfer. Payment is due upon completion of service. For larger services like ceramic coating or paint correction, a deposit may be required to secure your appointment. We do not accept checks." }
        ]
      }
    ],
    order: 3
  },
  {
    _id: 'faq-pricing-4',
    category: 'pricing',
    question: 'Are your prices fixed or do they vary?',
    answer: [
      {
        children: [
          { text: "Our base prices are fixed, but final pricing may vary slightly based on vehicle size (compact car vs. full-size SUV/truck), the condition of your vehicle (heavily soiled vehicles may require extra time), and specific requirements or add-on services. We provide transparent upfront quotes so you know exactly what to expect. All prices exclude HST." }
        ]
      }
    ],
    order: 4
  },

  // Booking Category
  {
    _id: 'faq-booking-1',
    category: 'booking',
    question: 'How do I book an appointment?',
    answer: [
      {
        children: [
          { text: "You can book an appointment by calling us directly, filling out the contact form on our website, or messaging us through social media. We recommend booking in advance, especially for services like paint correction or ceramic coating, as these services require more time and scheduling. We'll work with you to find a convenient time that fits your schedule." }
        ]
      }
    ],
    order: 1
  },
  {
    _id: 'faq-booking-2',
    category: 'booking',
    question: 'What is your cancellation policy?',
    answer: [
      {
        children: [
          { text: "We understand that schedules can change. Please contact us at least 24 hours before your appointment to cancel or reschedule without any fees. Cancellations within 24 hours may incur a cancellation fee (typically 25% of the service cost) as we may have turned away other customers. No-shows without prior notice may be charged the full service fee. We appreciate your understanding as this helps us manage our schedule efficiently." }
        ]
      }
    ],
    order: 2
  },
  {
    _id: 'faq-booking-3',
    category: 'booking',
    question: 'Do you work on weekends or after hours?',
    answer: [
      {
        children: [
          { text: "Yes, we offer flexible scheduling including weekends and after-hours appointments. This is especially convenient for fleet services and busy professionals. Please contact us to discuss your preferred time and we'll do our best to accommodate your schedule. Additional fees may apply for after-hours or weekend services." }
        ]
      }
    ],
    order: 3
  },
  {
    _id: 'faq-booking-4',
    category: 'booking',
    question: 'How far in advance should I book?',
    answer: [
      {
        children: [
          { text: "For basic detailing services, booking 1-2 weeks in advance is usually sufficient. For more extensive services like paint correction or ceramic coating, we recommend booking 2-4 weeks in advance as these require more preparation and longer service times. During peak seasons (spring, summer), booking further in advance is recommended. We'll let you know our current availability when you contact us." }
        ]
      }
    ],
    order: 4
  },
  {
    _id: 'faq-booking-5',
    category: 'booking',
    question: 'Can I wait while my vehicle is being serviced?',
    answer: [
      {
        children: [
          { text: "Yes, we have a comfortable waiting area with seating and refreshments. However, for longer services (4+ hours), many customers prefer to drop off their vehicle and return when notified. We can provide you with an estimated completion time and will contact you when your vehicle is ready. Some customers also choose to leave their vehicle overnight for multi-day services." }
        ]
      }
    ],
    order: 5
  },

  // Additional General FAQs
  {
    _id: 'faq-general-6',
    category: 'general',
    question: 'Where are you located and what areas do you serve?',
    answer: [
      {
        children: [
          { text: "We're located at 170 Finchdene Square in Scarborough, Ontario. We proudly serve Scarborough, Markham, North York, Ajax, Pickering, Whitby, Oshawa, and all surrounding GTA areas. We offer both in-shop services at our facility and mobile detailing services that come to your location. Our central Scarborough location makes us easily accessible from Highway 401 and major roads throughout the GTA." }
        ]
      }
    ],
    order: 6
  },
  {
    _id: 'faq-general-7',
    category: 'general',
    question: 'Are you insured and certified?',
    answer: [
      {
        children: [
          { text: "Yes, we are fully insured with comprehensive liability coverage to protect your vehicle while in our care. Our technicians are IDA (International Detailing Association) certified and continuously trained on the latest techniques and products. We use only professional-grade equipment and products from trusted brands. Your vehicle's safety and our quality standards are our top priorities." }
        ]
      }
    ],
    order: 7
  },
  {
    _id: 'faq-general-8',
    category: 'general',
    question: 'What makes Beyond Detail different from other detailing shops?',
    answer: [
      {
        children: [
          { text: "Beyond Detail stands out through our commitment to excellence, certified technicians, premium products, and lifetime warranties on select services. We focus on education, transparency, and customer satisfaction. Unlike quick-service car washes, we take the time to properly clean, restore, and protect your vehicle. We offer free consultations, detailed before/after documentation, and personalized service recommendations. Our 70+ five-star Google reviews reflect our dedication to quality." }
        ]
      }
    ],
    order: 8
  },

  // Additional Services FAQs
  {
    _id: 'faq-services-8',
    category: 'services',
    question: 'How do I maintain my ceramic coating?',
    answer: [
      {
        children: [
          { text: "Ceramic coating maintenance is simple: wash your vehicle regularly (every 2 weeks) using pH-neutral car shampoo and the two-bucket method, avoid automatic car washes with harsh brushes, use microfiber towels for drying, and apply a ceramic coating booster spray every 3-6 months. Avoid waxing over ceramic coating as it can reduce its hydrophobic properties. We provide detailed maintenance instructions and recommended products with every ceramic coating installation." }
        ]
      }
    ],
    order: 8
  },
  {
    _id: 'faq-services-9',
    category: 'services',
    question: 'Do you offer fleet detailing services?',
    answer: [
      {
        children: [
          { text: "Yes, we specialize in fleet detailing for businesses of all sizes. We offer customized maintenance programs, volume discounts, flexible scheduling (including after-hours and weekends), and on-site mobile services. Whether you have 5 vehicles or 50, we can create a tailored program to keep your fleet looking professional and well-maintained. Fleet services include regular washing, interior cleaning, and protective coatings. Contact us for a custom fleet quote." }
        ]
      }
    ],
    order: 9
  },
  {
    _id: 'faq-services-10',
    category: 'services',
    question: 'Can you remove pet hair and odors?',
    answer: [
      {
        children: [
          { text: "Absolutely! We have specialized tools and techniques for pet hair removal, including high-powered vacuums, rubber brushes, and compressed air. For odor elimination, we use professional ozone treatment and enzymatic cleaners that neutralize odors at the molecular level rather than just masking them. We can tackle even the toughest pet-related challenges including embedded hair in upholstery, carpets, and air vents. This service is included in our interior detailing packages." }
        ]
      }
    ],
    order: 10
  },
  {
    _id: 'faq-services-11',
    category: 'services',
    question: 'What is the difference between single-stage and multi-stage paint correction?',
    answer: [
      {
        children: [
          { text: "Single-stage paint correction uses one polishing step to remove light imperfections and swirl marks, typically achieving 60-70% defect removal. Two-stage correction uses a cutting compound followed by a finishing polish, removing 80-90% of defects. Three-stage correction adds an ultra-fine polishing step for show-car quality results, removing 95%+ of defects. The right option depends on your paint's condition, your goals, and your budget. We'll inspect your vehicle and recommend the appropriate level." }
        ]
      }
    ],
    order: 11
  },
  {
    _id: 'faq-services-12',
    category: 'services',
    question: 'Do you work on luxury or exotic vehicles?',
    answer: [
      {
        children: [
          { text: "Yes, we specialize in luxury and exotic vehicle detailing. Our technicians have experience with high-end brands including Mercedes-Benz, BMW, Audi, Porsche, Tesla, Lamborghini, Ferrari, and more. We understand the unique requirements of luxury vehicles including delicate paint finishes, specialized interior materials, and advanced technology features. We use only the finest products and techniques suitable for premium vehicles. Many of our clients trust us with their six-figure investments." }
        ]
      }
    ],
    order: 12
  },

  // Additional Pricing FAQs
  {
    _id: 'faq-pricing-5',
    category: 'pricing',
    question: 'Do you offer warranties on your services?',
    answer: [
      {
        children: [
          { text: "Yes, we stand behind our work with comprehensive warranties. Ceramic coatings come with manufacturer-backed warranties ranging from 2 years to lifetime depending on the product chosen. Window tinting includes a lifetime warranty against bubbling, peeling, or fading. Paint correction work is guaranteed for 30 days. If you're not satisfied with any service, contact us within the warranty period and we'll make it right. Warranty details are provided with each service." }
        ]
      }
    ],
    order: 5
  },
  {
    _id: 'faq-pricing-6',
    category: 'pricing',
    question: 'Is there an additional charge for larger vehicles?',
    answer: [
      {
        children: [
          { text: "Yes, pricing varies by vehicle size due to the additional time and materials required. Compact cars and sedans are priced at our base rates. Mid-size SUVs typically add $50-$100, full-size SUVs/trucks add $100-$200, and oversized vehicles (extended vans, large trucks) may add $200+. The exact pricing depends on the service package. We'll provide a specific quote based on your vehicle's make and model when you contact us." }
        ]
      }
    ],
    order: 6
  },
  {
    _id: 'faq-pricing-7',
    category: 'pricing',
    question: 'Do you charge extra for heavily soiled vehicles?',
    answer: [
      {
        children: [
          { text: "If your vehicle requires significantly more time due to excessive dirt, pet hair, stains, or neglect, there may be an additional charge. We'll assess the condition during drop-off and provide an updated quote before starting work. Most vehicles fall within our standard pricing. We believe in transparent pricing and will never surprise you with hidden fees. Heavily soiled vehicles may add $50-$150 depending on the extra time required." }
        ]
      }
    ],
    order: 7
  },

  // Additional Booking FAQs
  {
    _id: 'faq-booking-6',
    category: 'booking',
    question: 'Do I need to be present during the service?',
    answer: [
      {
        children: [
          { text: "No, you don't need to be present. Most customers prefer to drop off their vehicle and return when notified. We'll contact you if we discover any issues or have questions during the service. For mobile detailing, you can leave your keys in a secure location and we'll lock up when finished. We treat every vehicle with the utmost care and respect, whether you're present or not. We'll provide photo updates for extensive services like paint correction or ceramic coating." }
        ]
      }
    ],
    order: 6
  },
  {
    _id: 'faq-booking-7',
    category: 'booking',
    question: 'What happens if it rains after my detail?',
    answer: [
      {
        children: [
          { text: "Rain won't damage your freshly detailed vehicle—in fact, if you have a ceramic coating or sealant, you'll see the water bead up beautifully! However, we recommend avoiding driving through puddles or muddy conditions for 24-48 hours after service to allow products to fully cure. If rain is forecasted, we can reschedule exterior services or keep your vehicle in our covered facility until the weather clears. Ceramic coatings require 24 hours of dry time before exposure to water." }
        ]
      }
    ],
    order: 7
  },
  {
    _id: 'faq-booking-8',
    category: 'booking',
    question: 'Can I get a quote before booking?',
    answer: [
      {
        children: [
          { text: "Absolutely! We encourage you to request a quote before booking. You can call us, fill out our online contact form, or message us on social media with your vehicle details (year, make, model) and desired services. We'll provide a detailed quote including all costs with no obligation to book. For complex services like paint correction, we may recommend a free in-person inspection to provide the most accurate quote. All quotes are valid for 30 days." }
        ]
      }
    ],
    order: 8
  }
];




























