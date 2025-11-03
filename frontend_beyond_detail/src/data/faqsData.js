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
  }
];











