import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--primary)', color: 'var(--text-light)', padding: 'var(--spacing-2xl) 0 var(--spacing-lg)' }}>
            <div className="container">
                <div className="grid-3" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    {/* Brand & Info */}
                    <div>
                        <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                            DAR AL ARAFA <span className="text-gold">GRAPHICS</span>
                        </h3>
                        <p style={{ opacity: 0.8, marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Your trusted partner for premium graphic design, printing, engraving, and custom production solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.25rem' }}>Services</h4>
                        <ul style={{ listStyle: 'none', space: '0.75rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/services/graphic-design" style={{ opacity: 0.8 }}>Graphic Design</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/services/printing" style={{ opacity: 0.8 }}>Digital & Offset Printing</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/services/engraving" style={{ opacity: 0.8 }}>Laser Engraving</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="/services/production" style={{ opacity: 0.8 }}>Custom Production</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.25rem' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                <span className="text-gold">📍</span> 123 Business District, City, Country
                            </li>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                <span className="text-gold">📞</span> +1 234 567 890
                            </li>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                <span className="text-gold">✉️</span> contact@daralarafa.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', opacity: 0.6 }}>
                    © {new Date().getFullYear()} Dar Al Arafa Graphics llc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
