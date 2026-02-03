"use client";
import { useState } from 'react';

export default function Contact() {
    return (
        <main>
            <section style={{ color: 'white', paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-lg)' }}>
                <div className="container">
                    <h1 className="heading-xl" style={{ color: 'white' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px' }}>
                        We'd love to hear from you. Reach out for inquiries, support, or just to say hello.
                    </p>
                </div>
            </section>

            <section className="section-padding" style={{ position: 'relative' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                    <div style={{ color: 'white' }}>
                        <h2 className="heading-lg" style={{ color: 'white' }}>Get in Touch</h2>
                        <p style={{ marginBottom: '2rem', opacity: 1, color: '#F8FAFC', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                            Visit our office or contact us via phone or email. Our team is ready to assist you.
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#38bdf8' }}>Office Address</h3>
                            <p style={{ opacity: 1, color: '#FFFFFF', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>Behind Gold Center<br />Sharjah, UAE</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#38bdf8' }}>Contact Info</h3>
                            <p style={{ opacity: 1, color: '#FFFFFF', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                                Phone: 055 457 6868<br />
                                Email: daralarafa@gmail.com
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#38bdf8' }}>Business Hours</h3>
                            <p style={{ opacity: 1, color: '#FFFFFF', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                Saturday: 10:00 AM - 2:00 PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="glass-card" style={{
                            padding: '2.5rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '20px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            color: 'white'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>Send a Message</h3>
                            <form>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                                    <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                                    <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                                    <textarea rows="4" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'white' }}></textarea>
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
