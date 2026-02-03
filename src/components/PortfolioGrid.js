"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioGrid({ limit, items = [] }) {
    // Data is now passed in as props
    const displayItems = limit ? items.slice(0, limit) : items;

    return (
        <div className="grid-3">
            {displayItems.map((item) => (
                <div key={item.id} className="portfolio-card-glass" style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s ease'
                }}>
                    <div style={{
                        position: 'relative',
                        height: '200px',
                        width: '100%',
                        backgroundColor: 'rgba(0,0,0,0.2)'
                    }}>
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            className="p-img"
                        />
                        {/* Hover Overlay */}
                        <div className="hover-overlay" style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(10,25,47,0.9), transparent)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease'
                        }}></div>
                    </div>

                    <div style={{ padding: '1.5rem', position: 'relative' }}>
                        <span style={{
                            color: '#38bdf8', // Cyan
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            display: 'block',
                            marginBottom: '0.5rem'
                        }}>
                            {item.category}
                        </span>
                        <h4 style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            margin: '0',
                            color: 'white'
                        }}>
                            {item.title}
                        </h4>
                    </div>

                    <style jsx>{`
                        .portfolio-card-glass:hover {
                            transform: translateY(-8px);
                            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
                            border-color: rgba(56, 189, 248, 0.4);
                        }
                        .portfolio-card-glass:hover .p-img {
                            transform: scale(1.05);
                        }
                        .portfolio-card-glass:hover .hover-overlay {
                            opacity: 1;
                        }
                    `}</style>
                </div>
            ))}
        </div>
    );
}
