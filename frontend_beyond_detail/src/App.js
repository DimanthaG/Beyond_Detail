import { Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Footer, SocialIcons } from './components';
import Navbar from './components/Navbar/Navbar2';
import { AnimatePresence } from 'framer-motion';
import { withRouteWrapper } from './components/RouteWrapper/RouteWrapper';

import {
  Home,
  About,
  Contact2,
  Gallery,
  Services,
  Testimonials,
  Error,
  Tints,
  ServicePage,
  FAQs,
  Blog,
  PrivacyPolicy,
  PaintCorrection,
  CeramicCoating,
  FleetServices,
  InteriorDetailing,
  ExteriorDetailing,
  HeadlightRestoration,
  OdourRemoval,
  LeatherCleaning,
  PaintRemoval,
} from './Pages';
import ScrollToTop from './components/ScrollToTop';

// Create wrapped components with dynamic background (except Home)
const WrappedAbout = withRouteWrapper(About);
const WrappedTints = withRouteWrapper(Tints);
const WrappedServices = withRouteWrapper(Services);
const WrappedServicePage = withRouteWrapper(ServicePage);
const WrappedGallery = withRouteWrapper(Gallery);
const WrappedFAQs = withRouteWrapper(FAQs);
const WrappedBlog = withRouteWrapper(Blog);
const WrappedPrivacyPolicy = withRouteWrapper(PrivacyPolicy);
const WrappedTestimonials = withRouteWrapper(Testimonials);
const WrappedContact = withRouteWrapper(Contact2);
const WrappedError = withRouteWrapper(Error);
const WrappedPaintCorrection = withRouteWrapper(PaintCorrection);
const WrappedCeramicCoating = withRouteWrapper(CeramicCoating);
const WrappedFleetServices = withRouteWrapper(FleetServices);
const WrappedInteriorDetailing = withRouteWrapper(InteriorDetailing);
const WrappedExteriorDetailing = withRouteWrapper(ExteriorDetailing);
const WrappedHeadlightRestoration = withRouteWrapper(HeadlightRestoration);
const WrappedOdourRemoval = withRouteWrapper(OdourRemoval);
const WrappedLeatherCleaning = withRouteWrapper(LeatherCleaning);
const WrappedPaintRemoval = withRouteWrapper(PaintRemoval);

function App() {
  let location = useLocation();
  // routes
  return (
    <div className='app'>
      <ScrollToTop />
      <div className='navEl'>
        <Navbar className='navbarEl' />
      </div>
      <SocialIcons />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<WrappedAbout />} />
          <Route path='/tint' element={<WrappedTints />} />
          <Route path='/auto-detail' element={<WrappedServices />} />
          <Route path='/service/:serviceType' element={<WrappedServicePage />} />
          <Route path='/paint-correction' element={<WrappedPaintCorrection />} />
          <Route path='/ceramic-coatings' element={<WrappedCeramicCoating />} />
          <Route path='/interior-detailing' element={<WrappedInteriorDetailing />} />
          <Route path='/exterior-detailing' element={<WrappedExteriorDetailing />} />
          <Route path='/headlight-restoration' element={<WrappedHeadlightRestoration />} />
          <Route path='/odour-removal' element={<WrappedOdourRemoval />} />
          <Route path='/leather-cleaning' element={<WrappedLeatherCleaning />} />
          <Route path='/paint-removal' element={<WrappedPaintRemoval />} />
          <Route path='/fleet-services' element={<WrappedFleetServices />} />
          <Route path='/gallery' element={<WrappedGallery />} />
          <Route path='/faqs' element={<WrappedFAQs />} />
          <Route path='/privacy-policy' element={<WrappedPrivacyPolicy />} />
          <Route path='/blog' element={<WrappedBlog />} />
          <Route path='/blog/:slug' element={<WrappedBlog />} />
          <Route path='/testimonials' element={<WrappedTestimonials />} />
          <Route path='/contact' element={<WrappedContact />} />
          <Route path='/contact-us' element={<WrappedContact />} />
          <Route path='/sitemaps.xml' element={<Navigate to="/sitemap.xml" replace />} />
          <Route path='*' element={<WrappedError />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
