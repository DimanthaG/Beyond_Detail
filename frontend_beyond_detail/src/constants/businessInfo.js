
export const LOCATIONS = ['Toronto', 'Scarborough', 'Markham', 'Pickering'];
export const LOCATIONS_STRING = LOCATIONS.join(', ');

export const BUSINESS_INFO = {
    name: 'Beyond Detail',
    address: {
        streetAddress: '170 Finchdene Square unit 11',
        addressLocality: 'Scarborough, Toronto',
        addressRegion: 'ON',
        postalCode: 'M1X 1B3',
        addressCountry: 'CA'
    },
    phone: '+1 (647) 689-6109',
    email: 'info@beyonddetail.ca',
    url: 'https://beyonddetail.ca',
    description: 'Professional car detailing, window tinting, and ceramic coating in Scarborough & Toronto. We restore, protect, and enhance your vehicle with deep interior cleaning, stain and salt removal, paint correction, and UV-blocking ceramic tint. Trusted by GTA drivers for quality results, lifetime warranty tint options, and expert service that keeps your car looking its best.',
    hours: {
        monday: { open: '08:00', close: '20:00' },
        tuesday: { open: '08:00', close: '20:00' },
        wednesday: { open: '08:00', close: '20:00' },
        thursday: { open: '08:00', close: '20:00' },
        friday: { open: '08:00', close: '20:00' },
        saturday: { open: '09:00', close: '18:00' },
        sunday: { open: null, close: null } // Closed
    },
    services: [
        'Auto detailing',
        'Interior detailing',
        'Exterior detailing',
        'Paint correction',
        'Paint protection',
        'Ceramic coating',
        'Car window tinting',
        'Ceramic window tint',
        'Sun strip installation',
        'Fleet & commercial tinting',
        'SUV tint package',
        'Sedan tint package',
        'Auto interior vacuuming',
        'Engine detailing',
        'Headlight polishing',
        'Seat shampooing',
        'Steam cleaning',
        'Wheel washing',
        'Odor removal & ozone treatment',
        'Pet hair removal',
        'Interior sanitization',
        'Leather conditioning & protection',
        'Headliner cleaning',
        'Disinfection & allergy treatment',
        'Full interior shampoo package'
    ],
    stats: {
        rating: 5.0,
        reviewCount: 70, // Updated 2026 estimate (was 68)
        reviewCountText: '70+'
    }
};
