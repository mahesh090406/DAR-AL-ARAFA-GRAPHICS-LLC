import QuoteForm from "@/components/QuoteForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function QuotePage() {
    return (
        <main>
            <section style={{
                position: 'relative',
                padding: '160px 0 var(--spacing-xl) 0',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                // Background handled globally in body
            }}>
                {/* Background Image Overlay */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    {/* No Overlay - Clean View of Global Art */}
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <ScrollReveal>
                            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                                <h1 className="heading-xl" style={{ color: 'white' }}>Start Your Project</h1>
                                <p style={{ fontSize: '1.25rem', opacity: 0.9, color: '#E2E8F0' }}>
                                    Tell us about your needs and we'll provide a detailed proposal.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2} width="100%">
                            <QuoteForm />
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </main>
    );
}
