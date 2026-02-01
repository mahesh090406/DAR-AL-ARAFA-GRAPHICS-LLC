"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    // Dynamic styles based on scroll and location (Home has transparent header initially)
    const isHome = pathname === '/';
    const isTransparent = isHome && !scrolled && !mobileMenuOpen;

    return (
        <>
            <nav style={{
                position: 'absolute', // Static - does not follow scroll
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '2rem 0',
            }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo (Left) */}
                    <Link href="/" style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'white',
                        letterSpacing: '-0.5px',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        DAR AL ARAFA GRAPHICS LLC
                    </Link>

                    {/* Desktop Menu - Blue Glass Pill (Oxygen OS Style) */}
                    <div className="desktop-menu" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        // Oxygen OS Blue Glass Pill
                        padding: '0.75rem 2rem',
                        background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.3) 0%, rgba(10, 25, 47, 0.4) 100%)', // Blue-ish tint
                        backdropFilter: 'blur(20px)', // Heavy Glass
                        borderRadius: '50px',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)', // Glass borders and glow
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="nav-link-glow"
                                onMouseEnter={() => router.push(link.href)} // Hover Navigation
                                style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    color: 'white',
                                    opacity: pathname === link.href ? 1 : 0.8,
                                    // Removed inline transition to let CSS handle it
                                    position: 'relative',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '24px', // CHANGED: Line instead of dot
                                        height: '3px',
                                        background: '#38bdf8', // Cyan glow
                                        borderRadius: '2px', // Bar shape
                                        boxShadow: '0 0 8px rgba(56, 189, 248, 0.8)'
                                    }}></span>
                                )}
                            </Link>
                        ))}
                        <Link
                            href="/quote"
                            className="btn btn-water"
                            onMouseEnter={() => router.push('/quote')} // Hover Navigation
                            style={{
                                padding: '0.6rem 1.5rem',
                                borderRadius: '50px',
                                background: 'linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)',
                                color: 'white',
                                fontWeight: 700,
                                border: 'none',
                                boxShadow: '0 4px 15px rgba(14, 165, 233, 0.4)',
                                textTransform: 'uppercase',
                                fontSize: '0.85rem',
                                letterSpacing: '1px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 1001,
                            color: 'white'
                        }}
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 999,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: 'rgba(10, 25, 47, 0.95)',
                backdropFilter: 'blur(15px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
            }}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        style={{ fontSize: '1.75rem', fontWeight: 600, color: 'white' }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }

        /* Water/Liquid Button Effect */
        .btn-water {
            z-index: 1;
        }
        .btn-water::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s ease-out, height 0.6s ease-out, opacity 0.6s ease-out;
            opacity: 0;
            z-index: -1;
        }
        .btn-water:hover::after {
            width: 300px;
            height: 300px;
            opacity: 0;
            animation: ripple 0.8s ease-out;
        }

        @keyframes ripple {
            0% { width: 0; height: 0; opacity: 0.5; }
            100% { width: 400px; height: 400px; opacity: 0; }
        }

        /* Nav Link Animations (Apple UI Style) */
        .nav-link-glow {
            position: relative;
            display: inline-block; /* Ensure transform works */
            padding: 0.5rem 1rem;
            border-radius: 20px;
            transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); /* Apple-like smooth spring/ease */
            color: rgba(255, 255, 255, 0.9);
        }
        
        /* Remove Underline */
        .nav-link-glow::after {
            display: none;
        }

        /* Apple Hover Effect: Background Pill + Scale */
        .nav-link-glow:hover {
            color: #ffffff !important;
            background: rgba(30, 200, 255, 0.25); /* More visible Blue/Cyan glass */
            transform: scale(1.1); /* Slightly stronger scale to be noticeable */
            box-shadow: 0 4px 15px rgba(30, 200, 255, 0.2);
            backdrop-filter: blur(5px);
        }

        /* Active State Pill */
        .nav-link-active {
             background: rgba(255, 255, 255, 0.1);
             font-weight: 600;
        }
      `}</style>
        </>
    );
}
