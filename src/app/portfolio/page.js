import PortfolioGrid from "@/components/PortfolioGrid";
import { getData } from "@/lib/store";
import ScrollReveal from "@/components/ScrollReveal";

export const dynamic = 'force-dynamic'; // Ensure we see updates instantly

export default function Portfolio() {
    const data = getData();
    const portfolioItems = data.portfolio || [];

    return (
        <main>
            <section style={{ color: 'white', paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-lg)' }}>
                <div className="container">
                    <ScrollReveal>
                        <h1 className="heading-xl" style={{ color: 'white' }}>Our Work</h1>
                        <p style={{ fontSize: '1.25rem', opacity: 1, maxWidth: '600px', color: '#FFFFFF', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                            A showcase of our finest graphic design, printing, and custom production projects.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <ScrollReveal delay={0.2} width="100%">
                        <PortfolioGrid limit={0} items={portfolioItems} />
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
