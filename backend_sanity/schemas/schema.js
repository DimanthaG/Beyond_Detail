// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import testimonials from './testimonials';
import about from './about';
import homeInfoSection from './homeInfoSection';
import homeDetailSectionHeading from './homeDetailSectionHeading';
import homeDetailSection from './homeDetailSection';
import homeProcess from './homeProcess';
import footer from './footer';
import homeServicesHeader from './homeServicesHeader';
import homeServicesCards from './homeServicesCards';
import homeVideoBackground from './homeVideoBackground';
import services from './services';
import gallery from './gallery';
import contact from './contact';
import contactPage from './contactPage';
import galleryComparisonSlider from './galleryComparisonSlider';
import partners from './partners';
import tints from './tints';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    testimonials,
    about,
    homeInfoSection,
    homeDetailSectionHeading,
    homeDetailSection,
    homeProcess,
    footer,
    homeServicesHeader,
    homeServicesCards,
    homeVideoBackground,
    services,
    gallery,
    contact,
    contactPage,
    galleryComparisonSlider,
    partners,
    tints,
  ]),
});
