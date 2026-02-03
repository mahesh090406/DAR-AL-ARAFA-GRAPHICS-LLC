export default function About() {
    return (
        <main>
            <section style={{ color: 'white', paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-lg)' }}>
                <div className="container">
                    <h1 className="heading-xl" style={{ color: 'white' }}>About Dar Al Arafa Graphics</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px' }}>
                        Your creative partner in design and production excellence.
                    </p>
                </div>
            </section>

            <section className="section-padding" style={{ position: 'relative' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                        <div style={{ color: 'white' }}>
                            <h2 className="heading-lg" style={{ color: 'white' }}>Our Story</h2>
                            <p style={{ marginBottom: '1.5rem', opacity: 1, fontSize: '1.1rem', color: '#F8FAFC', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                                Founded with a passion for precision and creativity, Dar Al Arafa Graphics LLC has grown into a premier provider of full-service design and print solutions. We started with a simple mission: to help businesses communicate their value through exceptional visual assets.
                            </p>
                            <p style={{ marginBottom: '1.5rem', opacity: 1, fontSize: '1.1rem', color: '#F8FAFC', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                                Over the years, we have expanded our capabilities to include state-of-the-art offset printing, digital engraving, and custom fabrication, allowing us to serve as a one-stop shop for corporate branding needs.
                            </p>
                        </div>
                        <div>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                height: '100%',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid rgba(255,255,255,0.1)',
                                minHeight: '300px'
                            }}>
                                <span style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>Company Image / Office</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ position: 'relative' }}>
                <div className="container">
                    <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'white' }}>Our Core Values</h2>
                    <div className="grid-3">
                        {['Quality First', 'Customer Success', 'Innovation'].map((val, i) => (
                            <div key={i} className="glass-card" style={{
                                padding: '2rem',
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '20px',
                                color: 'white',
                                transition: 'transform 0.3s ease'
                            }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#38bdf8' }}>{val}</h3>
                                <p style={{ opacity: 1, color: '#FFFFFF', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                                    {i === 0 && "We never compromise on the quality of materials or craftsmanship."}
                                    {i === 1 && "Your growth is our growth. We are dedicated to your business objectives."}
                                    {i === 2 && "We constantly invest in new technology to offer better solutions."}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
