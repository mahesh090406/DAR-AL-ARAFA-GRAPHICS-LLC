import { services } from "@/lib/serviceData";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({
        slug,
    }));
}

export default function ServicePage({ params }) {
    const { slug } = params;
    const service = services[slug];

    if (!service) {
        notFound();
    }

    return (
        <main>
            {/* Hero */}
            <section style={{ backgroundColor: 'var(--primary)', color: 'white', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <span style={{ color: 'var(--secondary)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '2px' }}>Our Services</span>
                    <h1 className="heading-xl" style={{ color: 'white', marginTop: '1rem' }}>{service.icon} {service.title}</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px' }}>{service.description}</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-xl)' }}>
                    {/* Content */}
                    <div>
                        <h2 className="heading-lg">Overview</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                            {service.content}
                        </p>

                        <h3 className="heading-lg" style={{ fontSize: '1.5rem' }}>Key Capabilities</h3>
                        <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                            {service.features.map((feature, index) => (
                                <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem' }}>
                                    <span style={{ color: 'var(--secondary)', fontSize: '1.25rem' }}>✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sidebar CTA */}
                    <div style={{ alignSelf: 'start', position: 'sticky', top: '100px' }}>
                        <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--secondary)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Need {service.title}?</h3>
                            <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>Get a custom quote for your project today.</p>
                            <Link href="/quote" className="btn btn-primary" style={{ width: '100%' }}>Request Quote</Link>
                            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Have questions?</p>
                                <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact Support</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
