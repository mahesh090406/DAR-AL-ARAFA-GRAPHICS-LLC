"use client";
import { useState } from 'react';

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'graphic-design',
        details: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            // Reset after 5 seconds or keep visible
            // setFormData({ name: '', email: '', ... })
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (submitted) {
        return (
            <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '3rem 2rem',
                borderRadius: '20px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '400px',
                color: 'white'
            }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem', color: '#38bdf8' }}>✅</div>
                <h3 className="heading-lg" style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white' }}>Request Received!</h3>
                <p style={{ opacity: 0.8, marginBottom: '2rem', color: '#e2e8f0' }}>
                    Thank you for contacting Dar Al Arafa Graphics LLC. We have received your project details and will be in touch with a quote within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">Send Another Request</button>
            </div>
        );
    }

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid #d1d5db',
        marginBottom: '1rem',
        fontFamily: 'inherit',
        fontSize: '1rem'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 500
    };

    return (
        <form onSubmit={handleSubmit} style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2.5rem',
            borderRadius: '20px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            color: 'white'
        }}>
            <h3 className="heading-lg" style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'white' }}>Request a Quote</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input required type="text" name="name" style={inputStyle} onChange={handleChange} />
                </div>
                <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input required type="email" name="email" style={inputStyle} onChange={handleChange} />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input type="tel" name="phone" style={inputStyle} onChange={handleChange} />
                </div>
                <div>
                    <label style={labelStyle}>Company Name</label>
                    <input type="text" name="company" style={inputStyle} onChange={handleChange} />
                </div>
            </div>

            <div>
                <label style={labelStyle}>Service Interested In *</label>
                <select name="service" style={inputStyle} onChange={handleChange} value={formData.service}>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="printing">Printing (Offset/Digital)</option>
                    <option value="engraving">Laser Engraving</option>
                    <option value="custom">Custom Production</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label style={labelStyle}>Project Details *</label>
                <textarea required name="details" rows="4" style={inputStyle} onChange={handleChange} placeholder="Please describe your project needs..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
        </form>
    );
}
