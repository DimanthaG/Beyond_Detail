import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { client } from '../../client';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, SEO } from '../../components';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import '../../react-datepicker.css';
import './Booking.scss';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import images from '../../constants/images';

const DatePicker = lazy(() => import('react-datepicker'));

function Booking() {
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
        // Re-use contactPage data for simplicity or create a new schema if needed
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
                console.log('✅ Form submitted successfully!');
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
                alert('There was an issue submitting your form. Please try again or call us at (647) 689-6109.');
            });
    };

    // Date and time picker
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
    );

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
                    title='Book Appointment | Beyond Detail'
                    description='Book your auto detailing appointment online. Select your services and preferred time.'
                    name='Beyond Detail Booking'
                    type='website'
                    noindex={true}
                />
                {loading ? (
                    <>
                        <motion.div
                            className='bookingHeader'
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 2.0 }}
                            viewport={{ once: true }}
                        >
                            <Link to="/">
                                <img src={images.logo} alt="Beyond Detail Logo" style={{ width: '150px', marginBottom: '2rem' }} />
                            </Link>
                            <h1>Select Your Services</h1>
                        </motion.div>
                        <div className='booking__wrapper'>
                            <motion.div
                                className='sec_sp_booking'
                                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {!isFormSubmitted ? (
                                    <div className='form__wrapper_booking'>
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

                                                    <div lg='6' className='control-group date__wrapper'>
                                                        <label htmlFor='bookingDateContact' className='visually-hidden'>
                                                            Preferred date and time
                                                        </label>
                                                        <h3 id='bookingDateContact-label'>Date & Time: *</h3>
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
                                                    </div>
                                                </div>
                                            </div>
                                            <label htmlFor='message' className='visually-hidden'>Message</label>
                                            <textarea
                                                className='form-control rounded-0'
                                                id='message'
                                                name='message'
                                                placeholder='Tell us about your project or any questions you have'
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
                                                        style={{ margin: '0 auto', display: 'block' }}
                                                    >
                                                        {loadingMessage ? 'Sending...' : 'Request Booking'}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
                                            <p>Or call us directly at <a href="tel:6476896109" style={{ color: '#fff' }}>(647) 689-6109</a></p>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                                        <h3 className='head-text2'>
                                            Thank you! We have received your booking request.<br />
                                            We will contact you shortly to confirm your appointment.
                                        </h3>
                                        <Link to="/" style={{ color: '#f07900', marginTop: '2rem', display: 'inline-block' }}>Return Home</Link>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </>
                ) : (
                    <Loading />
                )}
            </motion.div>
        </>
    );
}

export default Booking;
