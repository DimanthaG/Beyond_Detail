import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Footer, SocialIcons } from './components';
import Navbar from './components/Navbar/Navbar2';
import { AnimatePresence } from 'framer-motion';
import { withRouteWrapper } from './components/RouteWrapper/RouteWrapper';
import ScrollToTop from './components/ScrollToTop';

// Import Home page directly (critical for LCP)
import { Home } from './Pages';

// Lazy load non-critical pages for better performance
const About = lazy(() => import('./Pages').then(m => ({ default: m.About })));
const Contact2 = lazy(() => import('./Pages').then(m => ({ default: m.Contact2 })));
const Gallery = lazy(() => import('./Pages').then(m => ({ default: m.Gallery })));
const Services = lazy(() => import('./Pages').then(m => ({ default: m.Services })));
const Testimonials = lazy(() => import('./Pages').then(m => ({ default: m.Testimonials })));
const Error = lazy(() => import('./Pages').then(m => ({ default: m.Error })));
const Tints = lazy(() => import('./Pages').then(m => ({ default: m.Tints })));
const ServicePage = lazy(() => import('./Pages').then(m => ({ default: m.ServicePage })));
const FAQs = lazy(() => import('./Pages').then(m => ({ default: m.FAQs })));
const Blog = lazy(() => import('./Pages').then(m => ({ default: m.Blog })));
const PrivacyPolicy = lazy(() => import('./Pages').then(m => ({ default: m.PrivacyPolicy })));
const PaintCorrection = lazy(() => import('./Pages').then(m => ({ default: m.PaintCorrection })));
const CeramicCoating = lazy(() => import('./Pages').then(m => ({ default: m.CeramicCoating })));
const FleetServices = lazy(() => import('./Pages').then(m => ({ default: m.FleetServices })));
const InteriorDetailing = lazy(() => import('./Pages').then(m => ({ default: m.InteriorDetailing })));
const ExteriorDetailing = lazy(() => import('./Pages').then(m => ({ default: m.ExteriorDetailing })));
const HeadlightRestoration = lazy(() => import('./Pages').then(m => ({ default: m.HeadlightRestoration })));
const OdourRemoval = lazy(() => import('./Pages').then(m => ({ default: m.OdourRemoval })));
const LeatherCleaning = lazy(() => import('./Pages').then(m => ({ default: m.LeatherCleaning })));
const PaintRemoval = lazy(() => import('./Pages').then(m => ({ default: m.PaintRemoval })));

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
      <div className='navbar-spacer'></div>
      <SocialIcons />
      <AnimatePresence mode="wait">
        <Suspense fallback={null}>
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
            <Route path='*' element={<WrappedError />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
