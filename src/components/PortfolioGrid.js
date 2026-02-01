"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioGrid({ limit }) {
    // Placeholder data - normally this would come from props or API
    const portfolioItems = [
        {
            id: 1,
            title: "Corporate Branding",
            category: "Graphic Design",
            image: "/assets/p-brand.jpg"
        },
        {
            id: 2,
            title: "Premium Business Cards",
            category: "Printing",
            image: "/assets/p-cards.jpg"
        },
        {
            id: 3,
            title: "Custom Acrylic Signage",
            category: "Engraving",
            image: "/assets/hero-print.jpg"
        },
        {
            id: 4,
            title: "Product Packaging",
            category: "Custom Production",
            image: "/assets/p-pack.jpg"
        },
        {
            id: 5,
            title: "Large Format Banners",
            category: "Printing",
            image: "/assets/p-banner.jpg"
        },
        {
            id: 6,
            title: "Logo Redesign",
            category: "Graphic Design",
            image: "/assets/p-logo.jpg"
        }
    ];

    const displayItems = limit ? portfolioItems.slice(0, limit) : portfolioItems;

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
                        height: '250px',
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
