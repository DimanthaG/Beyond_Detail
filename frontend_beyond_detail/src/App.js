import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Footer, Navbar, SocialIcons } from './components';
import { AnimatePresence } from 'framer-motion';

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
} from './Pages';
import ScrollToTop from './components/ScrollToTop';

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
          <Route path='/about' element={<About />} />
          <Route path='/tint' element={<Tints />} />
          <Route path='/services' element={<Services />} />
          <Route path='/service/:serviceType' element={<ServicePage />} />
          <Route path='/paint-correction' element={<ServicePage />} />
          <Route path='/ceramic-coatings' element={<ServicePage />} />
          <Route path='/interior-detailing' element={<ServicePage />} />
          <Route path='/exterior-detailing' element={<ServicePage />} />
          <Route path='/headlight-restoration' element={<ServicePage />} />
          <Route path='/odour-removal' element={<ServicePage />} />
          <Route path='/leather-cleaning' element={<ServicePage />} />
          <Route path='/paint-removal' element={<ServicePage />} />
          <Route path='/fleet-services' element={<ServicePage />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<Blog />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact2 />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
