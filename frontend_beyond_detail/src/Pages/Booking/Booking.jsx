import React, { useState, useEffect, lazy, Suspense } from 'react';
import { client } from '../../client';
import { motion, AnimatePresence } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading, SEO } from '../../components';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import '../../react-datepicker.css';
import './Booking.scss';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import { Car, Droplets, SprayCan, Sun, Sparkles, HelpCircle, Phone, Calendar as CalendarIcon, Clock, CheckCircle, ChevronLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

const DatePicker = lazy(() => import('react-datepicker'));

const servicesList = [
    { id: 'windowTint', label: 'Window Tint', icon: <Sun size={24} />, value: 'Window Tint' },
    { id: 'carDetailing', label: 'Car Detailing', icon: <Sparkles size={24} />, value: 'Car Detailing' },
    { id: 'ceramicCoating', label: 'Ceramic Coating', icon: <Droplets size={24} />, value: 'Ceramic Coating' },
    { id: 'paintCorrection', label: 'Paint Correction', icon: <SprayCan size={24} />, value: 'Paint Correction' },
    { id: 'other', label: 'Other Services', icon: <HelpCircle size={24} />, value: 'Other' },
];

function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        vehicleType: 'Car',
    });
    const [selectedServices, setSelectedServices] = useState([]);
    const [isFormSubmitted, SetIsFormSubmitted] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState(false);

    // Date and time picker state
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
    );

    // scroll to top on page render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Directly show content
    const loading = true;

    const { name, email, phone, message, vehicleType } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleService = (value) => {
        if (selectedServices.includes(value)) {
            setSelectedServices(selectedServices.filter(item => item !== value));
        } else {
            setSelectedServices([...selectedServices, value]);
        }
    };

    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoadingMessage(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            phone: phone,
            message: message,
            interestedIn: selectedServices,
            vehicleType: vehicleType,
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
            vehicle_type: vehicleType,
            interested_in: selectedServices.length > 0 ? selectedServices.join(', ') : 'Not specified',
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
            .then(() => {
                setLoadingMessage(false);
                SetIsFormSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    vehicleType: 'Car'
                });
                setSelectedServices([]);
            })
            .catch((err) => {
                console.error("❌ Error submitting form:", err);
                setLoadingMessage(false);
                alert('There was an issue submitting your form. Please try again or call us at (647) 689-6109.');
            });
    };

    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transition}
            className="booking-page-container"
        >
            <SEO
                title='Book Appointment | Beyond Detail'
                description='Book your auto detailing appointment online. Select your services and preferred time.'
                name='Beyond Detail Booking'
                type='website'
                noindex={true}
            />

            <div className="booking-navbar">
                <Link to="/" className="back-link">
                    <ChevronLeft size={20} /> Back to Home
                </Link>
                <img src={images.logo} alt="Beyond Detail" className="nav-logo" />
            </div>

            <div className='booking__wrapper'>
                <motion.div
                    className='booking-card'
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {!isFormSubmitted ? (
                        <>
                            <header className="booking-header">
                                <h1>Book Your Appointment</h1>
                                <p>Select your services and a convenient time.</p>
                            </header>

                            <form className='booking-form' onSubmit={handleSubmit}>

                                <div className="form-section">
                                    <h3 className="section-title">1. Select Services</h3>
                                    <div className="services-grid">
                                        {servicesList.map((service) => (
                                            <div
                                                key={service.id}
                                                className={`service-card ${selectedServices.includes(service.value) ? 'active' : ''}`}
                                                onClick={() => toggleService(service.value)}
                                            >
                                                <div className="service-icon">{service.icon}</div>
                                                <span>{service.label}</span>
                                                {selectedServices.includes(service.value) && (
                                                    <div className="check-mark"><CheckCircle size={16} /></div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-section two-col">
                                    <div>
                                        <h3 className="section-title">2. Vehicle Details</h3>
                                        <div className="input-group">
                                            <label htmlFor="vehicleType">Vehicle Type</label>
                                            <div className="select-wrapper">
                                                <Car size={18} className="input-icon" />
                                                <select
                                                    name='vehicleType'
                                                    id='vehicleType'
                                                    value={vehicleType}
                                                    onChange={handleChangeInput}
                                                    className="styled-input"
                                                >
                                                    <option value='Car'>Car / Sedan</option>
                                                    <option value='Hatchback'>Hatchback</option>
                                                    <option value='SUV'>SUV / Crossover</option>
                                                    <option value='Pick Up Truck'>Pick Up Truck</option>
                                                    <option value='Mini Van'>Mini Van</option>
                                                    <option value='Cargo Van'>Cargo Van</option>
                                                    <option value='Other'>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="section-title">3. Preferred Date</h3>
                                        <div className="input-group date-group">
                                            <label>Date & Time</label>
                                            <div className="date-input-wrapper">
                                                <CalendarIcon size={18} className="input-icon" />
                                                <Suspense fallback={<span>Loading...</span>}>
                                                    <DatePicker
                                                        className='styled-input date-input'
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        showTimeSelect
                                                        dateFormat='MMMM d, yyyy - h:mm aa'
                                                        excludeTimes={[
                                                            setHours(setMinutes(new Date(), 0), 17),
                                                            setHours(setMinutes(new Date(), 30), 18),
                                                            setHours(setMinutes(new Date(), 30), 19),
                                                        ]}
                                                    />
                                                </Suspense>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-section">
                                    <h3 className="section-title">4. Contact Info</h3>
                                    <div className="contact-grid">
                                        <div className="input-group">
                                            <input
                                                className='styled-input'
                                                name='name'
                                                placeholder='Your Name *'
                                                value={name}
                                                onChange={handleChangeInput}
                                                required
                                            />
                                        </div>
                                        <div className="input-group">
                                            <input
                                                className='styled-input'
                                                name='email'
                                                type='email'
                                                placeholder='Email Address *'
                                                value={email}
                                                onChange={handleChangeInput}
                                                required
                                            />
                                        </div>
                                        <div className="input-group">
                                            <input
                                                className='styled-input'
                                                name='phone'
                                                type='tel'
                                                placeholder='Phone Number *'
                                                value={phone}
                                                onChange={handleChangeInput}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="input-group mt-3">
                                        <textarea
                                            className='styled-input textarea'
                                            name='message'
                                            placeholder='Any specific requests or questions?'
                                            value={message}
                                            onChange={handleChangeInput}
                                            rows='3'
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    className='submit-btn'
                                    type='submit'
                                    disabled={loadingMessage}
                                >
                                    {loadingMessage ? 'Submitting Request...' : 'Confirm Booking Request'}
                                </button>

                                <div className="phone-support">
                                    <p>Need help? Call us directly</p>
                                    <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} className="phone-link"><Phone size={16} /> {BUSINESS_INFO.phone}</a>
                                </div>
                            </form>
                        </>
                    ) : (
                        <motion.div
                            className="success-message"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            <CheckCircle size={64} color="#f07900" />
                            <h2>Request Received!</h2>
                            <p>Thank you for choosing Beyond Detail. We will confirm your appointment shortly.</p>
                            <Link to="/" className="home-btn">Return to Home</Link>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Booking;
