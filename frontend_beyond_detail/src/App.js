import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Footer, SocialIcons, MobileFixedFooter, FooterMap } from './components';
import Navbar from './components/Navbar/Navbar2';
import { AnimatePresence } from 'framer-motion';
import { withRouteWrapper } from './components/RouteWrapper/RouteWrapper';
import ScrollToTop from './components/ScrollToTop';

// Import Home page directly (critical for LCP)
import { Home } from './Pages';

const ServiceAreas = lazy(() => import('./Pages/ServiceAreas/ServiceAreas')); // Import new page

// Lazy load non-critical pages for better performance
const About = lazy(() => import('./Pages').then(m => ({ default: m.About })));
const Contact2 = lazy(() => import('./Pages').then(m => ({ default: m.Contact2 })));
const Gallery = lazy(() => import('./Pages').then(m => ({ default: m.Gallery })));
const Services = lazy(() => import('./Pages').then(m => ({ default: m.Services })));

const WrappedServiceAreas = withRouteWrapper(ServiceAreas); // Creating wrapped component

const Testimonials = lazy(() => import('./Pages').then(m => ({ default: m.Testimonials })));
const Error = lazy(() => import('./Pages').then(m => ({ default: m.Error })));
const Tints = lazy(() => import('./Pages').then(m => ({ default: m.Tints })));
const ServicePage = lazy(() => import('./Pages').then(m => ({ default: m.ServicePage })));
const FAQs = lazy(() => import('./Pages').then(m => ({ default: m.FAQs })));
const Blog = lazy(() => import('./Pages').then(m => ({ default: m.Blog })));
const PrivacyPolicy = lazy(() => import('./Pages').then(m => ({ default: m.PrivacyPolicy })));
const Copyright = lazy(() => import('./Pages/Copyright/Copyright'));
const PaintCorrection = lazy(() => import('./Pages').then(m => ({ default: m.PaintCorrection })));
const CeramicCoating = lazy(() => import('./Pages').then(m => ({ default: m.CeramicCoating })));
const FleetServices = lazy(() => import('./Pages').then(m => ({ default: m.FleetServices })));
const InteriorDetailing = lazy(() => import('./Pages').then(m => ({ default: m.InteriorDetailing })));
const ExteriorDetailing = lazy(() => import('./Pages').then(m => ({ default: m.ExteriorDetailing })));
const HeadlightRestoration = lazy(() => import('./Pages').then(m => ({ default: m.HeadlightRestoration })));
const OdourRemoval = lazy(() => import('./Pages').then(m => ({ default: m.OdourRemoval })));
const LeatherCleaning = lazy(() => import('./Pages').then(m => ({ default: m.LeatherCleaning })));
const PaintRemoval = lazy(() => import('./Pages').then(m => ({ default: m.PaintRemoval })));
const Booking = lazy(() => import('./Pages/Booking/Booking'));
const MobileDetailing = lazy(() => import('./Pages/MobileDetailing/MobileDetailing'));
const LuxuryDetailing = lazy(() => import('./Pages/LuxuryDetailing/LuxuryDetailing'));

// ... (other lazy imports)

const WrappedAbout = withRouteWrapper(About);
const WrappedTints = withRouteWrapper(Tints);
const WrappedServices = withRouteWrapper(Services);
const WrappedServicePage = withRouteWrapper(ServicePage);
const WrappedGallery = withRouteWrapper(Gallery);
const WrappedFAQs = withRouteWrapper(FAQs);
const WrappedBlog = withRouteWrapper(Blog);
const WrappedPrivacyPolicy = withRouteWrapper(PrivacyPolicy);
const WrappedCopyright = withRouteWrapper(Copyright);
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
const WrappedMobileDetailing = withRouteWrapper(MobileDetailing);
const WrappedLuxuryDetailing = withRouteWrapper(LuxuryDetailing);
const CarDetailingToronto = lazy(() => import('./Pages/Neighborhoods/CarDetailingToronto'));
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

const PaintCorrectionPickering = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionPickering'));
const WindowTintingPickering = lazy(() => import('./Pages/Neighborhoods/WindowTintingPickering'));
const CeramicCoatingNorthYork = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingNorthYork'));
const PaintCorrectionNorthYork = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionNorthYork'));
const WindowTintingNorthYork = lazy(() => import('./Pages/Neighborhoods/WindowTintingNorthYork'));
const CeramicCoatingAjax = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingAjax'));
const PaintCorrectionAjax = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionAjax'));
const WindowTintingAjax = lazy(() => import('./Pages/Neighborhoods/WindowTintingAjax'));
const CeramicCoatingAgincourt = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingAgincourt'));
const PaintCorrectionAgincourt = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionAgincourt'));
const WindowTintingAgincourt = lazy(() => import('./Pages/Neighborhoods/WindowTintingAgincourt'));
const CeramicCoatingMalvern = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingMalvern'));
const PaintCorrectionMalvern = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionMalvern'));
const WindowTintingMalvern = lazy(() => import('./Pages/Neighborhoods/WindowTintingMalvern'));
const CeramicCoatingWestHill = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingWestHill'));
const PaintCorrectionWestHill = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionWestHill'));
const WindowTintingWestHill = lazy(() => import('./Pages/Neighborhoods/WindowTintingWestHill'));
const CeramicCoatingWexford = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingWexford'));
const PaintCorrectionWexford = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionWexford'));
const WindowTintingWexford = lazy(() => import('./Pages/Neighborhoods/WindowTintingWexford'));
const CeramicCoatingCliffside = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingCliffside'));
const PaintCorrectionCliffside = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionCliffside'));
const WindowTintingCliffside = lazy(() => import('./Pages/Neighborhoods/WindowTintingCliffside'));
const CeramicCoatingRouge = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingRouge'));
const PaintCorrectionRouge = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionRouge'));
const WindowTintingRouge = lazy(() => import('./Pages/Neighborhoods/WindowTintingRouge'));
const CeramicCoatingGuildwood = lazy(() => import('./Pages/Neighborhoods/CeramicCoatingGuildwood'));
const PaintCorrectionGuildwood = lazy(() => import('./Pages/Neighborhoods/PaintCorrectionGuildwood'));
const WindowTintingGuildwood = lazy(() => import('./Pages/Neighborhoods/WindowTintingGuildwood'));

function App() {
  let location = useLocation();
  const hideNavFooterPaths = ['/booking', '/booking/'];
  const showLayout = !hideNavFooterPaths.includes(location.pathname);

  // routes
  return (
    <div className='app'>
      <ScrollToTop />
      {showLayout && (
        <>
          <div className='navEl'>
            <Navbar className='navbarEl' />
          </div>
          <div className='navbar-spacer'></div>
          <SocialIcons />
        </>
      )}
      <AnimatePresence mode="wait">
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<WrappedAbout />} />
            <Route path='/tint' element={<WrappedTints />} />
            <Route path='/window-tinting' element={<WrappedTints />} />
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
            <Route path='/mobile-car-detailing' element={<WrappedMobileDetailing />} />
            <Route path='/mobile-car-detailing-toronto' element={<WrappedMobileDetailing />} />
            <Route path='/luxury-car-detailing-toronto' element={<WrappedLuxuryDetailing />} />
            <Route path='/exotic-car-detailing-toronto' element={<WrappedLuxuryDetailing />} />
            <Route path='/service-areas' element={<WrappedServiceAreas />} />
            <Route path='/service-area/pickering' element={<CarDetailingPickering />} />
            <Route path='/car-detailing-pickering' element={<CarDetailingPickering />} />
            <Route path='/service-area/markham' element={<CarDetailingMarkham />} />
            <Route path='/car-detailing-markham' element={<CarDetailingMarkham />} />
            <Route path='/service-area/north-york' element={<CarDetailingNorthYork />} />
            <Route path='/car-detailing-north-york' element={<CarDetailingNorthYork />} />
            <Route path='/car-detailing-toronto' element={<CarDetailingToronto />} />
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
            <Route path='/paint-correction-pickering' element={<PaintCorrectionPickering />} />
            <Route path='/window-tinting-pickering' element={<WindowTintingPickering />} />
            <Route path='/ceramic-coating-north-york' element={<CeramicCoatingNorthYork />} />
            <Route path='/paint-correction-north-york' element={<PaintCorrectionNorthYork />} />
            <Route path='/window-tinting-north-york' element={<WindowTintingNorthYork />} />
            <Route path='/ceramic-coating-ajax' element={<CeramicCoatingAjax />} />
            <Route path='/paint-correction-ajax' element={<PaintCorrectionAjax />} />
            <Route path='/window-tinting-ajax' element={<WindowTintingAjax />} />
            <Route path='/ceramic-coating-agincourt' element={<CeramicCoatingAgincourt />} />
            <Route path='/paint-correction-agincourt' element={<PaintCorrectionAgincourt />} />
            <Route path='/window-tinting-agincourt' element={<WindowTintingAgincourt />} />
            <Route path='/ceramic-coating-malvern' element={<CeramicCoatingMalvern />} />
            <Route path='/paint-correction-malvern' element={<PaintCorrectionMalvern />} />
            <Route path='/window-tinting-malvern' element={<WindowTintingMalvern />} />
            <Route path='/ceramic-coating-west-hill' element={<CeramicCoatingWestHill />} />
            <Route path='/paint-correction-west-hill' element={<PaintCorrectionWestHill />} />
            <Route path='/window-tinting-west-hill' element={<WindowTintingWestHill />} />
            <Route path='/ceramic-coating-wexford' element={<CeramicCoatingWexford />} />
            <Route path='/paint-correction-wexford' element={<PaintCorrectionWexford />} />
            <Route path='/window-tinting-wexford' element={<WindowTintingWexford />} />
            <Route path='/ceramic-coating-cliffside' element={<CeramicCoatingCliffside />} />
            <Route path='/paint-correction-cliffside' element={<PaintCorrectionCliffside />} />
            <Route path='/window-tinting-cliffside' element={<WindowTintingCliffside />} />
            <Route path='/ceramic-coating-rouge' element={<CeramicCoatingRouge />} />
            <Route path='/paint-correction-rouge' element={<PaintCorrectionRouge />} />
            <Route path='/window-tinting-rouge' element={<WindowTintingRouge />} />
            <Route path='/ceramic-coating-guildwood' element={<CeramicCoatingGuildwood />} />
            <Route path='/paint-correction-guildwood' element={<PaintCorrectionGuildwood />} />
            <Route path='/window-tinting-guildwood' element={<WindowTintingGuildwood />} />
            <Route path='/gallery' element={<WrappedGallery />} />
            <Route path='/faqs' element={<WrappedFAQs />} />
            <Route path='/privacy-policy' element={<WrappedPrivacyPolicy />} />
            <Route path='/copyright' element={<WrappedCopyright />} />
            <Route path='/image-licensing' element={<WrappedCopyright />} />
            <Route path='/blog' element={<WrappedBlog />} />
            <Route path='/blog/:slug' element={<WrappedBlog />} />
            <Route path='/testimonials' element={<WrappedTestimonials />} />
            <Route path='/contact' element={<WrappedContact />} />
            <Route path='/contact-us' element={<WrappedContact />} />
            <Route path='*' element={<WrappedError />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      {showLayout && (
        <>
          <FooterMap />
          <Footer />
          <MobileFixedFooter />
        </>
      )}
    </div>
  );
}

export default App;
