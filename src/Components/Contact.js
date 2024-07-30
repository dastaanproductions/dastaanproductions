import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(formData.message);
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=teamdastaanproductions@gmail.com&su=${subject}&body=${body}`;
        window.open(mailtoUrl, '_blank');
    };

    return (
        <div className="contact-section">
            <div className="left">
                <h2 className="contact-heading">Contact Us</h2>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=61551949586844" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/dastaan.productions" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.behance.net/dastaanproductions" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBehance} /></a>
                </div>

                {/* Location Section */}
                <div className="contact-info">
                    <div className="info-item">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <div className="info-text">
                            <h3>Location</h3>
                            <p>
                                <a href="https://www.google.com/maps/place/Dastaan+Productions/@30.6564316,73.0731347,15z/data=!4m2!3m1!1s0x0:0xa99d169aaa9df68d?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                            </p>
                        </div>
                    </div>

                    {/* Phone and Email Section */}
                    <div className="info-item">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="info-text">
                            <h3>Phone</h3>
                            <p>+92-317-1832625</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="info-text">
                            <h3>Email</h3>
                            <p><a href="mailto:teamdastaanproductions@gmail.com">teamdastaanproductions@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
