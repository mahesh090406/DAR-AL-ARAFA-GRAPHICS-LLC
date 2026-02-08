import ServiceCard from "@/components/ServiceCard";
import PortfolioGrid from "@/components/PortfolioGrid";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import { getData } from "@/lib/store";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";

export const dynamic = 'force-dynamic';

export default function Home() {
  const data = getData();
  const portfolioItems = data.portfolio || [];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Service Highlights */}
      <section className="section-padding" id="services">
        <div className="container">
          <ScrollReveal width="100%">
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              <h2 className="heading-lg">Our Expertise</h2>
              <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 1, color: '#F8FAFC', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                Comprehensive creative and production services tailored <br />to elevate your brand identity.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} width="100%">
            <div className="horizontal-grid">
              <ServiceCard
                title="Signage & LED"
                description="Premium indoor/outdoor signage and luminous LED displays for maximum visibility."
                icon="💡"
                href="/services/signage-led"
              />
              <ServiceCard
                title="Metal Laser Cutting"
                description="High-precision cutting for stainless steel, aluminum, and brass projects."
                icon="⚙️"
                href="/services/metal-laser-cutting"
              />
              <ServiceCard
                title="Digital Printing"
                description="Vibrant large format printing, vehicle branding, and marketing assets."
                icon="🖨️"
                href="/services/digital-printing"
              />
              <ServiceCard
                title="Acrylic Fabrication"
                description="Custom acrylic stands, displays, and creative structures."
                icon="🔷"
                href="/services/acrylic-fabrication"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} width="100%">
            <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}>
              <Link href="/services" style={{ fontWeight: 600, color: 'white', textDecoration: 'underline', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                View All Services &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <ScrollReveal width="100%">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 className="heading-lg" style={{ color: 'white' }}>Featured Work</h2>
                <p style={{ opacity: 1, color: '#F8FAFC', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Recent projects for our corporate clients.</p>
              </div>
              <Link href="/portfolio" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>View Full Gallery</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} width="100%">
            <PortfolioGrid limit={3} items={portfolioItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{
        backgroundColor: 'rgba(15, 23, 42, 0.65)', /* Glassy Slate to show live background */
        backdropFilter: 'blur(12px)',
        color: 'white',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container">
          <ScrollReveal width="100%">
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              <h2 className="heading-lg" style={{ color: 'white' }}>Why Choose <span className="text-gold">Dar Al Arafa Graphics</span>?</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} width="100%">
            <div className="grid-3" style={{ textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 10px rgba(255, 214, 10, 0.3))' }}>🏆</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Premium Quality</h3>
                <p style={{ opacity: 0.9, color: '#e2e8f0', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>We use top-tier materials and cutting-edge technology for flawless results.</p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 10px rgba(255, 214, 10, 0.3))' }}>⚡</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Fast Turnaround</h3>
                <p style={{ opacity: 0.9, color: '#e2e8f0', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Efficient workflows to meet your tightest corporate deadlines.</p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 10px rgba(255, 214, 10, 0.3))' }}>🤝</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Client Focused</h3>
                <p style={{ opacity: 0.9, color: '#e2e8f0', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Dedicated support and personalized solutions for every project.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote CFA */}
      <section className="section-padding">
        <ScrollReveal width="100%">
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
            <div>
              <h2 className="heading-lg">Ready to start your project?</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 1, color: '#FFFFFF', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                Get in touch with us today for a free consultation and quote. We are ready to bring your vision to life with precision and creativity.
              </p>
              <ul style={{ space: '1rem', listStyle: 'none', marginBottom: '2rem' }}>
                <li style={{ marginBottom: '0.5rem', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>✅ Free initial consultation</li>
                <li style={{ marginBottom: '0.5rem', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>✅ Detailed project estimates</li>
                <li style={{ marginBottom: '0.5rem', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>✅ Expert design advice</li>
              </ul>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
