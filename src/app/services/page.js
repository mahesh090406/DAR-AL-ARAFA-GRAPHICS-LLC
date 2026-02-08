import { getData } from "@/lib/store";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const dynamic = 'force-dynamic';

export default function ServicesIndex() {
    const data = getData();
    const services = data.services || {};
    const allServices = Object.keys(services).map(slug => ({ slug, ...services[slug] }));

    return (
        <main>
            <section style={{ color: 'white', paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-lg)' }}>
                <div className="container">
                    <ScrollReveal>
                        <h1 className="heading-xl" style={{ color: 'white' }}>Our Services</h1>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px' }}>
                            Discover our comprehensive range of creative and production solutions.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="section-padding" style={{ position: 'relative' }}>
                <div className="container">
                    <ScrollReveal delay={0.2} width="100%">
                        <div className="horizontal-grid">
                            {allServices.map(service => (
                                <div key={service.slug} style={{ height: '100%' }}>
                                    <div className="service-card-glass" style={{
                                        padding: '1.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '16px',
                                        color: 'white',
                                        transition: 'all 0.4s ease'
                                    }}>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}>{service.icon}</div>
                                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>{service.title}</h2>
                                        <p style={{ marginBottom: '1.5rem', flexGrow: 1, opacity: 1, color: '#FFFFFF', textShadow: '0 1px 3px rgba(0,0,0,0.8)', fontSize: '0.9rem', lineHeight: '1.5', fontWeight: 500 }}>{service.description}</p>
                                        <Link href={`/services/${service.slug}`} className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
