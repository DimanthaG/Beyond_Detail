# Universal Contact Component Guide

## Overview
The `Contact` component is a universal, reusable contact form and information section that should be included on **all pages** across the website to ensure consistency and provide easy access for users to get in touch.

## Location
- **Component File:** `frontend_beyond_detail/src/components/Contact/Contact.jsx`
- **Styles:** `frontend_beyond_detail/src/components/Contact/Contact.scss`
- **Export:** Available via `frontend_beyond_detail/src/components/index.js`

## Usage

### Basic Implementation

```jsx
import { Contact } from '../../components';

function YourPage() {
  return (
    <div>
      {/* Your page content */}
      <Contact />
    </div>
  );
}
```

### With Lazy Loading (Optional - for performance)

```jsx
import React, { Suspense, lazy } from 'react';
import { Loading } from '../../components';

const Contact = lazy(() => import('../../components/Contact/Contact'));

function YourPage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>
          {/* Your page content */}
          <Contact />
        </div>
      </Suspense>
    </>
  );
}
```

## Current Implementation Status

The Contact component is currently used on:
- ✅ **Tints** (`/tint`) - Lazy loaded
- ✅ **About** (`/about`)
- ✅ **Services** (`/services`)
- ✅ **ServicePage** (Dynamic service pages)
- ✅ **Home** (`/`)
- ✅ **Gallery** (`/gallery`)
- ✅ **FAQs** (`/faqs`)
- ✅ **Blog** (`/blog`) - Recently updated
- ✅ **Testimonials** (`/testimonials`) - Recently added

## Features

### Contact Information
- Address: 170 Finchdene Square Unit 11
- Phone: 647-689-6109
- Email: info@beyonddetail.com
- Business Hours (fetched from Sanity CMS)

### Form Fields
- Name (required)
- Email (required)
- Phone (required)
- Message/Project Description (required)
- Service Interest (checkboxes):
  - Window Tint
  - Car Wash
  - Paint Protection
  - Other
- Vehicle Type (dropdown):
  - Sedan
  - Hatchback
  - SUV/Truck
- Date & Time Picker (required)
  - Weekdays only
  - Time selection with restrictions

### Integration
- **Sanity CMS:** Form submissions are saved to `contact` document type
- **Data Source:** Contact information is fetched from `contactPage` document type
- **Social Media:** Includes links to Instagram, Twitter, and Facebook

### Accessibility
- Scroll anchor: `#contact` (for smooth scrolling from other pages)
- Also available at: `#bookingComponent`
- All form fields are properly labeled and required fields are marked

## Styling
The component uses:
- CSS Variables for colors (matches site theme)
- Responsive design (mobile-first)
- Smooth animations via CSS transitions
- Dark theme compatible

## Adding to New Pages

When creating a new page, always include the Contact component at the bottom:

```jsx
// 1. Import the component
import { Contact } from '../../components';

// 2. Add it at the bottom of your page content
return (
  <div className="your-page">
    {/* Your page content */}
    <Contact />
  </div>
);
```

## Best Practices

1. **Consistency:** Always use the universal Contact component rather than creating custom contact forms
2. **Positioning:** Place the Contact component at the bottom of page content, before any footer
3. **Performance:** For large pages, consider lazy loading the Contact component
4. **Testing:** Test form submission on all pages to ensure Sanity CMS integration works correctly

## Maintenance

If you need to update:
- Contact information → Update in Sanity CMS `contactPage` document
- Form fields → Edit `Contact.jsx`
- Styling → Edit `Contact.scss`
- Form submission logic → Edit `handleSubmit` in `Contact.jsx`

## Notes

- The component is self-contained and doesn't require any props
- All data is fetched from Sanity CMS on component mount
- Form includes client-side validation (required fields)
- Success/loading states are handled internally
- The component is memoized for performance (`React.memo`)

