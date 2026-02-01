import Link from 'next/link';

export default function ServicesIndex() {
    const allServices = [
        {
            slug: 'graphic-design',
            title: "Graphic Design",
            description: "Strategic branding, logo design, marketing materials.",
            icon: "🎨"
        },
        {
            slug: 'printing',
            title: "Premium Printing",
            description: "Offset & digital printing for all business needs.",
            icon: "🖨️"
        },
        {
            slug: 'engraving',
            title: "Laser Engraving",
            description: "Precision etching on metal, wood, and acrylic.",
            icon: "⚡"
        },
        {
            slug: 'custom',
            title: "Custom Production",
            description: "Signage, displays, and bespoke fabrication.",
            icon: "🛠️"
        }
    ];

    return (
        <main>
            <section style={{ backgroundColor: 'var(--primary)', color: 'white', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h1 className="heading-xl" style={{ color: 'white' }}>Our Services</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px' }}>
                        Discover our comprehensive range of creative and production solutions.
                    </p>
                </div>
            </section>

            <section className="section-padding" style={{ position: 'relative' }}>
                <div className="container">
                    <div className="grid-3">
                        {allServices.map(service => (
                            <div key={service.slug} className="service-card-glass" style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '20px',
                                color: 'white',
                                transition: 'all 0.4s ease'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}>{service.icon}</div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>{service.title}</h2>
                                <p style={{ marginBottom: '2rem', flexGrow: 1, opacity: 0.8, color: '#bdbdbd' }}>{service.description}</p>
                                <Link href={`/services/${service.slug}`} className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
