import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { client } from '../../client';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, SEO, SkillShowcase } from '../../components';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import '../../react-datepicker.css';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import './Contact2.scss';
import emailjs from '@emailjs/browser';

import { BUSINESS_INFO } from '../../constants/businessInfo';
const DatePicker = lazy(() => import('react-datepicker'));
const LazyMap = lazy(() => import('../../components/Map/Map'));
const GoogleReviewsCarousel = lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isFormSubmitted, SetIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [contactData, setContactData] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef(null);

  const optWindowTint = useRef();
  const optCarDetailing = useRef();
  const optCeramicCoating = useRef();
  const optPaintCorrection = useRef();
  const optOther = useRef();
  const optSelect = useRef();

  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const query = '*[_type == "contactPage"]';

    client.fetch(query)
      .then((data) => {
        if (data && data.length > 0) {
          setContactData(data);
        } else {
          console.warn('No contact data found, using fallback');
          setContactData([{
            topText: 'Contact Us',
            address: '170 Finchdene Square unit 11, Scarborough, ON',
            email: BUSINESS_INFO.email,
            hours1: 'Monday - Friday: 8:00am - 8:00pm',
            hours2: 'Saturday: 9:00am - 6:00pm',
            bottomDescription: 'We are here to help with your vehicle needs.'
          }]);
        }
        setLoading(true);
      })
      .catch((err) => {
        console.warn("Sanity fetch warning:", err);
        setContactData([{
          topText: 'Contact Us',
          address: '170 Finchdene Square unit 11, Scarborough, ON',
          email: BUSINESS_INFO.email,
          hours1: 'Monday - Friday: 8:00am - 8:00pm',
          hours2: 'Saturday: 9:00am - 6:00pm',
          bottomDescription: 'We are here to help with your vehicle needs.'
        }]);
        setLoading(true);
      });
  }, []);

  const { name, email, phone, message } = formData;

  const handleChangeInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingMessage(true);

    // Reset and populate interestedOptions array for each submission
    const interestedOptions = [];

    if (optWindowTint.current.checked) interestedOptions.push(optWindowTint.current.value);
    if (optCarDetailing.current.checked) interestedOptions.push(optCarDetailing.current.value);
    if (optCeramicCoating.current.checked) interestedOptions.push(optCeramicCoating.current.value);
    if (optPaintCorrection.current.checked) interestedOptions.push(optPaintCorrection.current.value);
    if (optOther.current.checked) interestedOptions.push(optOther.current.value);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      phone: phone,
      message: message,
      interestedIn: interestedOptions,
      vehicleType: optSelect.current.value,
      bookingDate: startDate,
    };

    // Send to Sanity
    const sanityPromise = client.create(contact);

    // Send Email Notification via EmailJS
    const emailParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message || 'No message provided',
      vehicle_type: optSelect.current.value,
      interested_in: interestedOptions.length > 0 ? interestedOptions.join(', ') : 'Not specified',
      booking_date: startDate.toLocaleString(),
      to_email: 'info@beyonddetail.ca'
    };

    const emailPromise = emailjs.send(
      'service_1g9ccqz',
      'template_ibabka7',
      emailParams,
      'jCB-5GHkShwRIo1ZM'
    );

    Promise.all([sanityPromise, emailPromise])
      .then(([sanityResult, emailResult]) => {


        setLoadingMessage(false);
        SetIsFormSubmitted(true);

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error("❌ Error submitting form:", err);
        setLoadingMessage(false);

        // Show user-friendly error
        alert('There was an issue submitting your form. Please try again or call us at (647) 689-6109.');
      });
  };

  // Date and time picker
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);

  // Defer date picker render until in view to reduce initial JS
  useEffect(() => {
    if (showDatePicker) return;
    const el = datePickerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShowDatePicker(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowDatePicker(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [showDatePicker]);

  // Defer map render until visible
  useEffect(() => {
    if (showMap) return;
    const target = mapRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') {
      setShowMap(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowMap(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [showMap]);

  return (
    <>
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}
      >
        <SEO
          title='Book Car Detailing Scarborough | Contact Beyond Detail'
          description='Book your car detailing, ceramic coating or window tinting appointment at Beyond Detail. Located at 170 Finchdene Square, Scarborough. (647) 689-6109'
          name='Beyond Detail Toronto'
          type='website'
          keywords='contact Beyond Detail Toronto, book appointment Scarborough, auto detailing contact Markham, car detailing phone Pickering, GTA detailing service'
        />
        {loading ? (
          <>
            <motion.div
              className='contactHeader'
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2.0 }}
              viewport={{ once: true }}
            >
              <h1>Contact Us - Auto Detailing Scarborough</h1>
            </motion.div>
            <div className='contact__wrapper2'>
              <motion.div
                className='sec_sp'
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className='mb-5'>
                  <div className='contact__info'>
                    <h3>{contactData[0].topText}</h3>
                    <div className='contact__details2'>
                      <p>
                        <strong>Address :</strong> {contactData[0].address}
                      </p>
                      <p>
                        <strong>Phone :</strong>{' '}
                        <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}>
                          {BUSINESS_INFO.phone}
                        </a>
                      </p>
                      <p>
                        <strong>Email :</strong>{' '}
                        <a href={`mailto:${BUSINESS_INFO.email}`}>
                          {contactData[0].email || BUSINESS_INFO.email}
                        </a>
                      </p>
                      <p>
                        <strong>Hours :</strong> {contactData[0].hours1} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {contactData[0].hours2}
                      </p>

                      <p className='contact__short-description'>
                        {contactData[0].bottomDescription}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className='socialIcons__container__navBar2'
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className='socialIcons__icon__navBar2 instagram2'>
                      <span>
                        <a href='https://www.instagram.com/beyonddetail.ca/' target='_blank' rel='noopener noreferrer'>
                          <BsInstagram />
                        </a>
                      </span>
                    </div>

                    <div className='socialIcons__icon__navBar2 twitter2'>
                      <span>
                        <a href='https://x.com/BeyondDetailca' target='_blank' rel='noopener noreferrer'>
                          <BsTwitter />
                        </a>
                      </span>
                    </div>

                    <div className='socialIcons__icon__navBar2 facebook2'>
                      <span>
                        <a href='https://www.facebook.com/people/Beyond-Detail-Scarborough/100088669617846/' target='_blank' rel='noopener noreferrer'>
                          <FaFacebookF />
                        </a>
                      </span>
                    </div>
                  </motion.div>
                </div>

                {!isFormSubmitted ? (
                  <div
                    lg='7'
                    className='d-flex align-items-center form__wrapper'
                  >
                    <h3 className='contact__requiredText'>
                      All fields marked with
                      <span className='required__symbol'> *</span> are required
                    </h3>
                    <form className='contact__form' onSubmit={handleSubmit}>
                      <div className='mb-3'>
                        <div lg='6' className='form-group'>
                          <label htmlFor='name' className='visually-hidden'>Name</label>
                          <input
                            className='form-control rounded-0'
                            id='name'
                            name='name'
                            placeholder='Name *'
                            type='text'
                            required
                            aria-label='Name'
                            onChange={handleChangeInput}
                          />
                        </div>

                        <div lg='6' className='form-group'>
                          <label htmlFor='email' className='visually-hidden'>Email</label>
                          <input
                            className='form-control rounded-0'
                            id='email'
                            name='email'
                            placeholder='Email *'
                            type='email'
                            required
                            aria-label='Email'
                            onChange={handleChangeInput}
                          />
                        </div>

                        <div lg='6' className='form-group'>
                          <label htmlFor='phone' className='visually-hidden'>Phone</label>
                          <input
                            className='form-control rounded-0'
                            id='phone'
                            name='phone'
                            placeholder='Phone *'
                            type='tel'
                            pattern='^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$'
                            required
                            aria-label='Phone'
                            onChange={handleChangeInput}
                          />
                        </div>

                        <div lg='6' className='form-group interestedCheckBox'>
                          <h3>Interested In: *</h3>
                          <div className='cbContainer'>
                            <div className='servicesCB'>
                              <label htmlFor='windowTint'>
                                <input type='checkbox' id='windowTint' name='windowTint' value='Window Tint' ref={optWindowTint} className='cbInterest' />
                                <span>Window Tint</span>
                              </label>
                            </div>
                            <div className='interestsCB'>
                              <label htmlFor='carDetailing'>
                                <input type='checkbox' id='carDetailing' name='carDetailing' value='Car Detailing' ref={optCarDetailing} className='cbInterest' />
                                <span>Car Detailing</span>
                              </label>
                            </div>
                            <div className='interestsCB'>
                              <label htmlFor='ceramicCoating'>
                                <input type='checkbox' id='ceramicCoating' name='ceramicCoating' value='Ceramic Coating' ref={optCeramicCoating} className='cbInterest' />
                                <span>Ceramic Coating</span>
                              </label>
                            </div>
                            <div className='interestsCB'>
                              <label htmlFor='paintCorrection'>
                                <input type='checkbox' id='paintCorrection' name='paintCorrection' value='Paint Correction' ref={optPaintCorrection} className='cbInterest' />
                                <span>Paint Correction</span>
                              </label>
                            </div>
                            <div className='interestsCB'>
                              <label htmlFor='other'>
                                <input type='checkbox' id='other' name='other' value='Other' ref={optOther} className='cbInterest' />
                                <span>Other</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className='vehicle-date__wrapper'>
                          <div lg='6' className='control-group'>
                            <label htmlFor='vehicleType' className='visually-hidden'>
                              Vehicle Type
                            </label>
                            <h3 id='vehicleType-label'>Vehicle Type: *</h3>
                            <div className='select'>
                              <select
                                name='vehicleType'
                                id='vehicleType'
                                className='select__options'
                                ref={optSelect}
                                aria-labelledby='vehicleType-label'
                              >
                                <option value='Car'>Car</option>
                                <option value='Hatchback'>Hatchback</option>
                                <option value='SUV'>SUV</option>
                                <option value='pick up truck'>pick up truck</option>
                                <option value='mini van'>mini van</option>
                                <option value='cargo van'>cargo van</option>
                                <option value='other'>other</option>
                              </select>
                              <div className='select__arrow'></div>
                            </div>
                          </div>

                          <div lg='6' className='control-group date__wrapper' ref={datePickerRef}>
                            <label htmlFor='bookingDateContact' className='visually-hidden'>
                              Preferred date and time
                            </label>
                            <h3 id='bookingDateContact-label'>Date & Time: *</h3>
                            {showDatePicker ? (
                              <Suspense fallback={<input className='datePick' aria-label='Date picker loading' readOnly />}>
                                <DatePicker
                                  className='datePick'
                                  calendarClassName='calenderStyle'
                                  headerClassName='headerStyle'
                                  dayClassName={() => 'dayStyle'}
                                  timeClassName={() => 'timeStyle'}
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  showTimeSelect
                                  excludeTimes={[
                                    setHours(setMinutes(new Date(), 0), 17),
                                    setHours(setMinutes(new Date(), 30), 18),
                                    setHours(setMinutes(new Date(), 30), 19),
                                    setHours(setMinutes(new Date(), 30), 17),
                                  ]}
                                  dateFormat='MMMM d, yyyy - h:mm aa'
                                  aria-label='Preferred date and time'
                                  aria-labelledby='bookingDateContact-label'
                                  id='bookingDateContact'
                                />
                              </Suspense>
                            ) : (
                              <input
                                className='datePick'
                                placeholder='Select date & time'
                                aria-label='Date picker placeholder'
                                readOnly
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <label htmlFor='message' className='visually-hidden'>Message</label>
                      <textarea
                        className='form-control rounded-0'
                        id='message'
                        name='message'
                        placeholder='Tell us about your project'
                        aria-label='Message'
                        onChange={handleChangeInput}
                        rows='5'
                      ></textarea>
                      <br />
                      <div>
                        <div lg='12' className='form-group'>
                          <button
                            className='btn ac_btn rounded-0'
                            type='submit'
                          >
                            {loadingMessage ? 'Sending' : 'Send'}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div>
                    <h3 className='head-text2'>
                      Thank you for contacting us. We will get back to you
                      shortly.
                    </h3>
                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                      <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Enjoyed our service? Help us out by leaving a review!
                      </p>
                      <a
                        href="https://search.google.com/local/writereview?placeid=ChIJFeApoP4d1YkRv0VpV6_h8sY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn ac_btn rounded-0"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                      >
                        Review us on Google
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
            <SkillShowcase />
            <Suspense fallback={null}>
              <GoogleReviewsCarousel />
            </Suspense>
            <div ref={mapRef}>
              {showMap ? (
                <Suspense fallback={<div style={{ height: '320px', background: '#0f0f0f' }} />}>
                  <LazyMap />
                </Suspense>
              ) : (
                <div style={{ height: '320px', background: '#0f0f0f' }} />
              )}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </motion.div>
    </>
  );
}

export default React.memo(ContactPage);
