import PortfolioGrid from "@/components/PortfolioGrid";

export default function Portfolio() {
    return (
        <main>
            <section style={{ backgroundColor: 'var(--primary)', color: 'white', padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h1 className="heading-xl" style={{ color: 'white' }}>Our Work</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px' }}>
                        A showcase of our finest graphic design, printing, and custom production projects.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <PortfolioGrid limit={0} />
                </div>
            </section>
        </main>
    );
}
