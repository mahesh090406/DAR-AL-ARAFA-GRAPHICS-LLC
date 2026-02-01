"use client";

import Link from 'next/link';

export default function ServiceCard({ title, description, icon, href }) {
    return (
        <div className="service-card-glass" style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.03)', // Dark Glass
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            color: 'white',
            transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
        }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}>{icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700, color: 'white' }}>{title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
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
