"use client";

import Link from 'next/link';

export default function ServiceCard({ title, description, icon, href }) {
    return (
        <div className="service-card-glass" style={{
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.03)', // Dark Glass
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            color: 'white',
            transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
        }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.4))' }}>{icon}</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>{title}</h3>
            <p style={{ color: '#FFFFFF', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.5rem', flexGrow: 1, textShadow: '0 1px 3px rgba(0,0,0,0.8)', opacity: 1, fontWeight: 500 }}>
                {description}
            </p>
            <div>
                <Link href={href} className="btn-glow" style={{
                    display: 'inline-block',
                    width: '100%',
                    padding: '0.8rem 0',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    background: 'transparent'
                }}>
                    Learn More
                </Link>
            </div>

            <style jsx>{`
                .service-card-glass:hover {
                    transform: translateY(-8px);
                    background: rgba(255, 255, 255, 0.06) !important;
                    border-color: rgba(255, 255, 255, 0.3) !important;
                    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
                }
                .btn-glow:hover {
                    background: white !important;
                    color: #0A192F !important;
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
                }
            `}</style>
        </div>
    );
}
