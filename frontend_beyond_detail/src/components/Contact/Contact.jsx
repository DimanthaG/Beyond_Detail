/**
 * Universal Contact Component
 * 
 * This component provides a consistent contact form and information section
 * that should be used across all pages on the website.
 * 
 * USAGE:
 * Simply import and include the Contact component at the bottom of any page:
 * 
 *   import { Contact } from '../../components';
 *   // ... in your component's return:
 *   <Contact />
 * 
 * The component includes:
 * - Contact information (address, phone, email, hours)
 * - Social media links
 * - Booking form with date/time picker
 * - Vehicle type and service interest selection
 * - Automatic form submission to Sanity CMS
 * 
 * FEATURES:
 * - Fully responsive design
 * - Integrated with Sanity CMS for contact submissions
 * - Smooth scroll anchor: #contact
 * - Loading states and success feedback
 * 
 * NOTES:
 * - Data is fetched from Sanity CMS 'contactPage' document type
 * - Form submissions are saved to Sanity CMS 'contact' document type
 * - The component is lazy-loaded on the Tints page for performance
 * - All styling is in Contact.scss and follows the site's design system
 */

import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { client } from '../../client';
import { Loading } from '../../components';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import '../../react-datepicker.css';
import './Contact.scss';

const DatePicker = lazy(() => import('react-datepicker'));


function Contact() {
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

  const optTints = useRef();
  const optCarDetailing = useRef();
  const optCeramicCoating = useRef();
  const optPaintCorrection = useRef();
  const optOther = useRef();
  const optSelect = useRef();

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
            email: 'info@beyonddetail.ca',
            hours1: 'Monday - Friday: 8:00am - 8:00pm',
            hours2: 'Saturday: 9:00am - 6:00pm',
            bottomDescription: 'We are here to help with your vehicle needs.'
          }]);
        }
        setLoading(true);
      })
      .catch((err) => {
        console.warn("Sanity fetch warning:", err); // Warn instead of Error to avoid overlay
        setContactData([{
          topText: 'Contact Us',
          address: '170 Finchdene Square unit 11, Scarborough, ON',
          email: 'info@beyonddetail.ca',
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingMessage(true);

    // Reset and populate interestedOptions array for each submission
    const interestedOptions = [];

    if (optTints.current.checked) {
      interestedOptions.push(optTints.current.value);
    }
    if (optCarDetailing.current.checked) {
      interestedOptions.push(optCarDetailing.current.value);
    }
    if (optCeramicCoating.current.checked) {
      interestedOptions.push(optCeramicCoating.current.value);
    }
    if (optPaintCorrection.current.checked) {
      interestedOptions.push(optPaintCorrection.current.value);
    }
    if (optOther.current.checked) {
      interestedOptions.push(optOther.current.value);
    }

    const contact = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      interestedIn: interestedOptions,
      vehicleType: optSelect.current.value,
      bookingDate: startDate,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      const data = await response.json();
      console.log('Contact form submitted successfully:', data);

      setLoadingMessage(false);
      SetIsFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setLoadingMessage(false);
      // You could add error state here to show user-friendly error message
      alert('Sorry, there was an error submitting your form. Please try again or call us directly.');
    }
  };

  // Date and time picker
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);

  // Defer loading the date picker until visible to cut initial JS cost
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

  return (
    <>
      {loading ? (
        <>
          <span className='anchor' id='contact'></span>
          <span className='anchor' id='bookingComponent'></span>
          <div className='contact__wrapper'>
            <div className='sec_sp2'>
              <div className='mb-5'>
                {/* <h3 className='contact__title py-4 '>Get In Touch</h3> */}
                <div className='contact__info'>
                  <h3>{contactData[0].topText}</h3>
                  <div className='contact__details'>
                    <p>
                      <strong>Address :</strong> {contactData[0].address}
                    </p>
                    <p>
                      <strong>Phone (Call/Text) :</strong>{' '}
                      <a href='tel:+16476896109'>
                        (647) 689-6109
                      </a>
                    </p>
                    <p>
                      <strong>Email :</strong>{' '}
                      <a href='mailto:support@beyonddetail.ca'>
                        {contactData[0].email}
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

                <div className='socialIcons__container__navBar3'>
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
                </div>
              </div>

              {!isFormSubmitted ? (
                <div lg='7' className='d-flex align-items-center form__wrapper'>
                  <h3 className='contact__requiredText'>
                    All fields marked with
                    <span className='required__symbol'> *</span> are required
                  </h3>
                  <form className='contact__form' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                      <div lg='6' className='form-group'>
                        <input
                          className='form-control rounded-0'
                          id='name'
                          name='name'
                          placeholder='Name *'
                          type='text'
                          required
                          onChange={handleChangeInput}
                        />
                      </div>

                      <div lg='6' className='form-group'>
                        <input
                          className='form-control rounded-0'
                          id='email'
                          name='email'
                          placeholder='Email *'
                          type='email'
                          required
                          onChange={handleChangeInput}
                        />
                      </div>

                      <div lg='6' className='form-group'>
                        <input
                          className='form-control rounded-0'
                          id='phone'
                          name='phone'
                          placeholder='Phone *'
                          type='tel'
                          pattern='^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$'
                          required
                          onChange={handleChangeInput}
                        />
                      </div>

                      <div lg='6' className='form-group interestedCheckBox'>
                        <h3>Interested In: *</h3>
                        <div className='cbContainer'>
                          <div className='servicesCB'>
                            <label htmlFor='windowTints'>
                              <input
                                type='checkbox'
                                id='windowTints'
                                name='windowTints'
                                value='Window Tint'
                                ref={optTints}
                                className='cbInterest'
                              />
                              <span>Window Tint</span>
                            </label>
                          </div>
                          <div className='interestsCB'>
                            <label htmlFor='carDetailing'>
                              <input
                                type='checkbox'
                                id='carDetailing'
                                name='carDetailing'
                                value='Car Detailing'
                                ref={optCarDetailing}
                                className='cbInterest'
                              />
                              <span>Car Detailing</span>
                            </label>
                          </div>
                          <div className='interestsCB'>
                            <label htmlFor='ceramicCoating'>
                              <input
                                type='checkbox'
                                id='ceramicCoating'
                                name='ceramicCoating'
                                value='Ceramic Coating'
                                ref={optCeramicCoating}
                                className='cbInterest'
                              />
                              <span>Ceramic Coating</span>
                            </label>
                          </div>
                          <div className='interestsCB'>
                            <label htmlFor='paintCorrection'>
                              <input
                                type='checkbox'
                                id='paintCorrection'
                                name='paintCorrection'
                                value='Paint Correction'
                                ref={optPaintCorrection}
                                className='cbInterest'
                              />
                              <span>Paint Correction</span>
                            </label>
                          </div>
                          <div className='interestsCB'>
                            <label htmlFor='other'>
                              <input
                                type='checkbox'
                                id='other'
                                name='other'
                                value='Other'
                                ref={optOther}
                                className='cbInterest'
                              />
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
                          <label htmlFor='bookingDate' className='visually-hidden'>
                            Preferred date and time
                          </label>
                          <h3 id='bookingDate-label'>Date & Time: *</h3>
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
                                aria-labelledby='bookingDate-label'
                                aria-label='Preferred date and time'
                                id='bookingDate'
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
                    <textarea
                      className='form-control rounded-0'
                      id='message'
                      name='message'
                      placeholder='Tell us about your project'
                      onChange={handleChangeInput}
                      rows='5'
                    ></textarea>
                    <br />
                    <div>
                      <div lg='12' className='form-group'>
                        <button className='btn-premium' type='submit' style={{ width: '100%' }}>
                          {loadingMessage ? 'Booking' : 'Book Now'}
                        </button>
                      </div>
                    </div>
                  </form>
                  <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.9rem", color: "#888" }}>
                    <span style={{ color: "#22c55e", marginRight: "5px" }}>✓</span>
                    No payment required until the job is done. 100% Satisfaction Guarantee.
                  </p>
                </div>
              ) : (
                <div>
                  <div class='circle-loader load-complete'>
                    <div class='checkmark draw'></div>
                  </div>

                  <h3 className='head-text2'>
                    Thank you for contacting us. We will get back to you
                    shortly.
                  </h3>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(Contact);
