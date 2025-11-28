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
const ServiceAreaNorthYork = lazy(() => import('./Pages/ServiceAreaNorthYork'));
const CarDetailingMalvern = lazy(() => import('./Pages/Neighborhoods/CarDetailingMalvern'));
const CarDetailingScarborough = lazy(() => import('./Pages/Neighborhoods/CarDetailingScarborough'));
const CeramicCoatingScarborough = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingScarborough'));
const CarDetailingAgincourt = lazy(() => import('./Pages/Neighborhoods/CarDetailingAgincourt'));
const CarDetailingWestHill = lazy(() => import('./Pages/Neighborhoods/CarDetailingWestHill'));
const CarDetailingPickering = lazy(() => import('./Pages/Neighborhoods/CarDetailingPickering'));
const CarDetailingMarkham = lazy(() => import('./Pages/Neighborhoods/CarDetailingMarkham'));
const CarDetailingNorthYork = lazy(() => import('./Pages/Neighborhoods/CarDetailingNorthYork'));
const CarDetailingAjax = lazy(() => import('./Pages/Neighborhoods/CarDetailingAjax'));
const CarDetailingWexford = lazy(() => import('./Pages/Neighborhoods/CarDetailingWexford'));
const CarDetailingCliffside = lazy(() => import('./Pages/Neighborhoods/CarDetailingCliffside'));
const CarDetailingRouge = lazy(() => import('./Pages/Neighborhoods/CarDetailingRouge'));
const CarDetailingGuildwood = lazy(() => import('./Pages/Neighborhoods/CarDetailingGuildwood'));
const WindowTintingScarborough = lazy(() => import('./Pages/Neighborhoods/WindowTintingScarborough'));
const PaintCorrectionScarborough = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionScarborough'));
const WindowTintingMarkham = lazy(() => import('./Pages/Neighborhoods/WindowTintingMarkham'));
const CeramicCoatingMarkham = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingMarkham'));
const PaintCorrectionMarkham = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionMarkham'));
const CeramicCoatingPickering = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingPickering'));
const CarDetailingOshawa = lazy(() => import('./Pages/Neighborhoods/CarDetailingOshawa'));
const CarDetailingWhitby = lazy(() => import('./Pages/Neighborhoods/CarDetailingWhitby'));
const WindowTintingOshawa = lazy(() => import('./Pages/Neighborhoods/WindowTintingOshawa'));
const WindowTintingWhitby = lazy(() => import('./Pages/Neighborhoods/WindowTintingWhitby'));
const CeramicCoatingOshawa = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingOshawa'));
const CeramicCoatingWhitby = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingWhitby'));
const PaintCorrectionOshawa = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionOshawa'));
const PaintCorrectionWhitby = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionWhitby'));

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
            <Route path='/service-area/pickering' element={<CarDetailingPickering />} />
            <Route path='/car-detailing-pickering' element={<CarDetailingPickering />} />
            <Route path='/service-area/markham' element={<CarDetailingMarkham />} />
            <Route path='/car-detailing-markham' element={<CarDetailingMarkham />} />
            <Route path='/service-area/north-york' element={<CarDetailingNorthYork />} />
            <Route path='/car-detailing-north-york' element={<CarDetailingNorthYork />} />
            <Route path='/car-detailing-malvern' element={<CarDetailingMalvern />} />
            <Route path='/car-detailing-agincourt' element={<CarDetailingAgincourt />} />
            <Route path='/car-detailing-west-hill' element={<CarDetailingWestHill />} />
            <Route path='/car-detailing-ajax' element={<CarDetailingAjax />} />
            <Route path='/car-detailing-wexford' element={<CarDetailingWexford />} />
            <Route path='/car-detailing-cliffside' element={<CarDetailingCliffside />} />
            <Route path='/car-detailing-rouge' element={<CarDetailingRouge />} />
            <Route path='/car-detailing-guildwood' element={<CarDetailingGuildwood />} />
            <Route path='/car-detailing-scarborough' element={<CarDetailingScarborough />} />
            <Route path='/auto-detailing-scarborough' element={<CarDetailingScarborough />} />
            <Route path='/ceramic-coating-scarborough' element={<CeramicCoatingScarborough />} />
            <Route path='/window-tinting-scarborough' element={<WindowTintingScarborough />} />
            <Route path='/paint-correction-scarborough' element={<PaintCorrectionScarborough />} />
            <Route path='/window-tinting-markham' element={<WindowTintingMarkham />} />
            <Route path='/ceramic-coating-markham' element={<CeramicCoatingMarkham />} />
            <Route path='/paint-correction-markham' element={<PaintCorrectionMarkham />} />
            <Route path='/ceramic-coating-pickering' element={<CeramicCoatingPickering />} />
            <Route path='/car-detailing-oshawa' element={<CarDetailingOshawa />} />
            <Route path='/car-detailing-whitby' element={<CarDetailingWhitby />} />
            <Route path='/window-tinting-oshawa' element={<WindowTintingOshawa />} />
            <Route path='/window-tinting-whitby' element={<WindowTintingWhitby />} />
            <Route path='/ceramic-coating-oshawa' element={<CeramicCoatingOshawa />} />
            <Route path='/ceramic-coating-whitby' element={<CeramicCoatingWhitby />} />
            <Route path='/paint-correction-oshawa' element={<PaintCorrectionOshawa />} />
            <Route path='/paint-correction-whitby' element={<PaintCorrectionWhitby />} />
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
