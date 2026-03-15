import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import FooterMap from '@/components/FooterMap/FooterMap';
import MobileFixedFooter from '@/components/MobileFixedFooter/MobileFixedFooter';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <FooterMap />
      <Footer />
      <MobileFixedFooter />
    </>
  );
}
