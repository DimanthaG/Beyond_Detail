import React, { useState, useEffect, useRef } from 'react';
import { client } from '../../client';
import { motion } from 'framer-motion';
import { Loading } from '../../components';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import getDate from 'date-fns/getDate';
import '../../react-datepicker.css';
import images from '../../constants/images';
import './Contact.scss';

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

  let interestedOptions = [];

  const optTints = useRef();
  const optWash = useRef();
  const optPaint = useRef();
  const optOther = useRef();
  const optSelect = useRef();

  useEffect(() => {
    const query = '*[_type == "contactPage"]';

    client.fetch(query).then((data) => {
      setContactData(data);
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

    if (optTints.current.checked) {
      interestedOptions.push(optTints.current.value);
    }
    if (optWash.current.checked) {
      interestedOptions.push(optWash.current.value);
    }
    if (optPaint.current.checked) {
      interestedOptions.push(optPaint.current.value);
    }
    if (optOther.current.checked) {
      interestedOptions.push(optOther.current.value);
    }

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

    client.create(contact).then(() => {
      setLoadingMessage(false);
      SetIsFormSubmitted(true);
    });
  };

  // Date and time picker
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  return (
    <>
      {loading ? (
        <>
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
                      <strong>Phone :</strong>{' '}
                      <a href='tel: +1 (289) 886-3045'>
                        {contactData[0].phone}
                      </a>
                    </p>
                    <p>
                      <strong>Email :</strong>{' '}
                      <a href='mailto:support@beyonddetail.com'>
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
                      <a href='http://google.com' target='_blank'>
                        <BsInstagram />
                      </a>
                    </span>
                  </div>

                  <div className='socialIcons__icon__navBar2 twitter2'>
                    <span>
                      <a href='http://google.com' target='_blank'>
                        <BsTwitter />
                      </a>
                    </span>
                  </div>

                  <div className='socialIcons__icon__navBar2 facebook2'>
                    <span>
                      <a href='http://google.com' target='_blank'>
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
                                value='Window Tints'
                                ref={optTints}
                                className='cbInterest'
                              />
                              <span>Window Tints</span>
                            </label>
                          </div>
                          <div className='interestsCB'>
                            <label htmlFor='carWash'>
                              <input
                                type='checkbox'
                                id='carWash'
                                name='carWash'
                                value='Car Wash'
                                ref={optWash}
                                className='cbInterest'
                              />
                              <span>Car Wash</span>
                            </label>
                          </div>
                          <div className='interestsCB'>
                            <label htmlFor='paintProtection'>
                              <input
                                type='checkbox'
                                id='paintProtection'
                                name='paintProtection'
                                value='Paint Protection'
                                ref={optPaint}
                                className='cbInterest'
                              />
                              <span>Paint Protection</span>
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
                          <h3>Vehicle Type: *</h3>
                          <div className='select'>
                            <select
                              name='vehicleType'
                              id='vehicleType'
                              className='select__options'
                              ref={optSelect}
                            >
                              <option value='Sedan'>Sedan</option>
                              <option value='Hatchback'>Hatchback</option>
                              <option value='SUV/Truck'>SUV/Truck</option>
                            </select>
                            <div className='select__arrow'></div>
                          </div>
                        </div>

                        <div lg='6' className='control-group date__wrapper'>
                          <h3>Date & Time: *</h3>
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
                          />
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
                        <button className='btn ac_btn rounded-0' type='submit'>
                          {loadingMessage ? 'Booking' : 'Book Now'}
                        </button>
                      </div>
                    </div>
                  </form>
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
