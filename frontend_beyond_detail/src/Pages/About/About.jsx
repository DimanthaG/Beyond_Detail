import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, HomeProcess } from '../../components';
import { Award, Users, Target, Shield, Sparkles, Phone, ArrowRight } from 'lucide-react';
import './About.scss';

// Lazy load heavy components to improve initial bundle size
const SEO = lazy(() => import('../../components/SEO'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

function About() {

  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality. Every service is performed with meticulous attention to detail using premium products and professional-grade equipment."
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring your vehicle receives the highest standard of care and restoration possible."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We listen to your needs, provide transparent communication, and deliver results that exceed expectations."
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Our team consists of trained professionals with extensive experience in automotive detailing, paint correction, and protection services."
    },
    {
      icon: Target,
      title: "Reliability",
      description: "We stand behind our work with warranties, follow-up support, and a commitment to maintaining long-term relationships with our clients."
    }
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <SEO
          title='About Us - Premium Auto Detailing Toronto, Scarborough, Markham, Pickering'
          description="Learn about Beyond Detail, serving Toronto, Scarborough, Markham, and Pickering with premier auto detailing services. Professional window tint, paint correction, ceramic coating, and comprehensive auto detailing across the GTA."
          name='Beyond Detail Toronto'
          type='website'
          keywords='about Beyond Detail Toronto, auto detailing company Scarborough, professional car detailing Markham, vehicle detailing services Pickering, GTA car care'
        />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={{ ...transition, delay: 0 }}
        >
          <div className='about__wrapper'>
            <section className='about__hero'>
              <div className='about__hero-container'>
                <motion.div
                  className='about__hero-content'
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className='about__hero-title'>About Us</h1>
                  <p className='about__hero-description'>
                    Beyond Detail is Toronto and Scarborough's trusted automotive care specialists. We combine expert craftsmanship, premium products, and unwavering dedication to deliver exceptional results for every vehicle.
                  </p>
                  <div className='about__hero-buttons'>
                    <button 
                      className='about__hero-button about__hero-button--primary'
                      onClick={handleBookCall}
                    >
                      <Phone size={20} />
                      Book a Call
                    </button>
                    <button 
                      className='about__hero-button about__hero-button--secondary'
                      onClick={handleScrollToContact}
                    >
                      Get Started
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>
            
            <section className='about__story'>
              <div className='about__story-container'>
                <motion.div
                  className='about__story-content'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className='about__story-title'>Our Story</h2>
                  <div className='about__story-text'>
                    <p>
                      Beyond Detail was founded with a simple mission: to provide exceptional automotive care services that protect and enhance your vehicle's appearance, value, and longevity. Based in Toronto and Scarborough, we've built our reputation on delivering showroom-quality results through expert craftsmanship, premium products, and unwavering dedication.
                    </p>
                    <p>
                      What started as a passion for automotive perfection has grown into a trusted business serving thousands of satisfied customers across the Greater Toronto Area. We understand that your vehicle is more than just transportation—it's an investment that deserves the highest level of care and protection.
                    </p>
                    <p>
                      From professional window tint installation using LLUMAR films to comprehensive paint correction and ceramic coating services, we've expanded our expertise to cover every aspect of automotive detailing and protection. Our certified technicians bring years of experience and training to every service, ensuring professional-grade results on every vehicle.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            <section className='about__mission'>
              <div className='about__mission-container'>
                <motion.div
                  className='about__mission-content'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className='about__mission-title'>Our Mission</h2>
                  <p className='about__mission-text'>
                    To provide exceptional automotive care services that protect and enhance your vehicle's appearance, value, and longevity while delivering an outstanding customer experience. We combine technical expertise with meticulous attention to detail, using premium products and proven techniques to achieve showroom-quality results.
                  </p>
                </motion.div>
              </div>
            </section>

            <section className='about__values'>
              <div className='about__values-container'>
                <motion.h2 
                  className='about__values-title'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Our Core Values
                </motion.h2>
                <motion.p 
                  className='about__values-subtitle'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  The principles that guide everything we do
                </motion.p>
                <div className='about__values-grid'>
                  {values.map((value, index) => {
                    const IconComponent = value.icon;
                    return (
                      <motion.div
                        key={index}
                        className='about__value-card'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className='about__value-icon'>
                          <IconComponent size={32} />
                        </div>
                        <h3 className='about__value-title'>{value.title}</h3>
                        <p className='about__value-description'>{value.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            <HomeProcess />

            <section className='about__cta'>
              <div className='about__cta-container'>
                <motion.div
                  className='about__cta-content'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className='about__cta-title'>Ready to Experience Premium Service?</h2>
                  <p className='about__cta-text'>
                    Get in touch with us today to discuss how we can help protect and enhance your vehicle.
                  </p>
                  <div className='about__cta-buttons'>
                    <button 
                      className='about__cta-button about__cta-button--primary'
                      onClick={handleBookCall}
                    >
                      <Phone size={20} />
                      Book a Call
                    </button>
                    <button 
                      className='about__cta-button about__cta-button--secondary'
                      onClick={handleScrollToContact}
                    >
                      Get Started
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>

            <Contact />
          </div>
        </motion.div>
      </Suspense>
    </>
  );
}

export default React.memo(About);
