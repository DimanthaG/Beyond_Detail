import React, { useState, useEffect, lazy, Suspense } from 'react';
import { client } from '../../client';
import { motion, AnimatePresence } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { Loading } from '../../components';
import SEO from '../../components/SEO';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import '../../react-datepicker.css';
import './Booking.scss';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import { Car, Droplets, SprayCan, Sun, Sparkles, HelpCircle, Phone, Calendar as CalendarIcon, Clock, CheckCircle, ChevronLeft, Lock, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import { trackBookingStart, trackBookingComplete, trackPhoneClick } from '../../utils/analytics';

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

    const [formErrors, setFormErrors] = useState({});

    const [formTouched, setFormTouched] = useState(false);

    // scroll to top on page render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Directly show content
    const loading = true;

    const { name, email, phone, message, vehicleType } = formData;

    const validateField = (name, value) => {
        let error = '';
        if (name === 'name' && !value.trim()) error = 'Name is required';
        if (name === 'phone') {
            if (!value.trim()) error = 'Phone number is required';
            else if (!/^\d{10,}$/.test(value.replace(/\D/g, ''))) error = 'Enter a valid 10-digit phone number';
        }
        return error;
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        if (!formTouched) {
            setFormTouched(true);
            trackBookingStart();
        }
        setFormData({ ...formData, [name]: value });

        // Real-time validation if error exists
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setFormErrors(prev => ({ ...prev, [name]: error }));
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

        // Final Validation check
        const errors = {};
        if (!name.trim()) errors.name = 'Name is required';
        if (!phone.trim()) errors.phone = 'Phone is required';
        else if (!/^\d{10,}$/.test(phone.replace(/\D/g, ''))) errors.phone = 'Enter a valid 10-digit phone number';
        if (selectedServices.length === 0) errors.service = 'Please select a service';

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

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
                trackBookingComplete();
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
                title='Book Car Detailing Scarborough | Get 10% Off | Beyond Detail'
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
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginBottom: '10px', color: '#f07900', fontWeight: 'bold' }}>
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <span style={{ color: '#fff', marginLeft: '5px' }}>Join 2,000+ happy customers</span>
                                </div>
                                <h1>Book Your Appointment</h1>
                                <p>Simple. Fast. Professional.</p>
                                <p style={{ color: '#22c55e', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '500' }}>
                                    No payment required. Free estimate. We'll confirm your appointment within 1 hour.
                                </p>

                                {/* How It Works Micro-Section */}
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0', fontSize: '0.9rem', color: '#ccc' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div style={{ background: '#333', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', fontWeight: 'bold', border: '1px solid #f07900', color: '#f07900' }}>1</div>
                                        <span>Quote</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div style={{ background: '#333', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', fontWeight: 'bold', border: '1px solid #f07900', color: '#f07900' }}>2</div>
                                        <span>Work</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div style={{ background: '#333', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', fontWeight: 'bold', border: '1px solid #f07900', color: '#f07900' }}>3</div>
                                        <span>Enjoy</span>
                                    </div>
                                </div>
                            </header>

                            <form className='booking-form' onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }} noValidate>

                                <div style={{ textAlign: 'center', marginBottom: '1rem', padding: '0.75rem', background: 'rgba(240, 121, 0, 0.08)', borderRadius: '8px', border: '1px solid rgba(240, 121, 0, 0.2)' }}>
                                    <p style={{ color: '#ccc', fontSize: '0.85rem', margin: 0 }}>
                                        Prefer to call? <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} style={{ color: '#f07900', fontWeight: 'bold', textDecoration: 'none' }} onClick={() => trackPhoneClick('booking-banner')}>{BUSINESS_INFO.phone}</a>
                                    </p>
                                </div>

                                <div className="form-section">
                                    <h3 className="section-title" style={{ textAlign: 'center' }}>Step 1 of 2 &mdash; Tell us what you need</h3>

                                    <div className="input-group">
                                        <label htmlFor="bookingService">Service Needed <span style={{ color: 'red' }}>*</span></label>
                                        <div className={`select-wrapper ${formErrors.service ? 'input-error' : ''}`}>
                                            <Sparkles size={18} className="input-icon" />
                                            <select
                                                id="bookingService"
                                                className="styled-input"
                                                value={selectedServices[0] || ''}
                                                onChange={(e) => {
                                                    setSelectedServices([e.target.value]);
                                                    if (e.target.value) setFormErrors(prev => ({ ...prev, service: '' }));
                                                }}
                                                onBlur={() => {
                                                    if (selectedServices.length === 0) setFormErrors(prev => ({ ...prev, service: 'Please select a service' }));
                                                }}
                                            >
                                                <option value="" disabled>Select a Service</option>
                                                <option value="Window Tinting">Window Tinting</option>
                                                <option value="Ceramic Coating">Ceramic Coating</option>
                                                <option value="Paint Correction">Paint Correction</option>
                                                <option value="Car Detailing">Car Detailing</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        {formErrors.service && <span className="error-message">{formErrors.service}</span>}
                                    </div>
                                </div>

                                <div className="form-section">
                                    <h3 className="section-title" style={{ textAlign: 'center' }}>Step 2 of 2 &mdash; Your Info</h3>
                                    <div className="contact-grid" style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>
                                        <div className="input-group">
                                            <label htmlFor="bookingName" className="visually-hidden">Your Name</label>
                                            <input
                                                className={`styled-input ${formErrors.name ? 'input-error' : ''}`}
                                                id='bookingName'
                                                name='name'
                                                placeholder='Your Name *'
                                                value={name}
                                                onChange={handleChangeInput}
                                                onBlur={handleBlur}
                                                required
                                            />
                                            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="bookingPhone" className="visually-hidden">Phone Number</label>
                                            <input
                                                className={`styled-input ${formErrors.phone ? 'input-error' : ''}`}
                                                id='bookingPhone'
                                                name='phone'
                                                type='tel'
                                                placeholder='Phone Number *'
                                                value={phone}
                                                onChange={handleChangeInput}
                                                onBlur={handleBlur}
                                                required
                                            />
                                            {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'center', marginBottom: '1rem', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.9rem' }}>
                                    <Lock size={14} /> No Payment Required Now
                                </div>

                                <button
                                    className='submit-btn'
                                    type='submit'
                                    disabled={loadingMessage}
                                    style={{ width: '100%' }}
                                >
                                    {loadingMessage ? 'Sending...' : 'Request Booking \u2014 Free Estimate'}
                                </button>

                                <div className="phone-support" style={{ marginTop: '1.5rem' }}>
                                    <p>Need immediate help?</p>
                                    <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} className="phone-link" onClick={() => trackPhoneClick('booking')}><Phone size={16} /> Call {BUSINESS_INFO.phone}</a>
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
