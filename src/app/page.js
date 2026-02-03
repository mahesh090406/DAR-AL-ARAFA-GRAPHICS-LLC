import ServiceCard from "@/components/ServiceCard";
import PortfolioGrid from "@/components/PortfolioGrid";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import Image from "next/image";
import { getData } from "@/lib/store";

export const dynamic = 'force-dynamic';

export default function Home() {
  const data = getData();
  const portfolioItems = data.portfolio || [];

  return (
    <main>
      {/* Hero Section */}
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        color: 'white',
        // Background handled globally in body
      }}>
        <div className="container" style={{ position: 'relative', width: '100%' }}>
          <div style={{ maxWidth: '800px' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(212, 175, 55, 0.2)',
              color: '#F2C94C',
              borderRadius: '50px',
              fontWeight: 600,
              marginBottom: '1.5rem',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              ✨ #1 Graphic Design & Printing Agency
            </span>
            <h1 className="heading-xl" style={{
              color: 'white',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)' /* Added shadow for readability */
            }}>
              Elevate Your Brand With <br />
              <span style={{ color: 'var(--secondary)' }}>Premium Print</span> & Design.
            </h1>
            <p style={{
              fontSize: '1.25rem',
              maxWidth: '600px',
              marginBottom: '2.5rem',
              opacity: 0.95, /* Increased opacity */
              lineHeight: 1.6,
              color: '#F8FAFC', /* Brighter white */
              textShadow: '0 1px 4px rgba(0,0,0,0.6)'
            }}>
              From concept to finished product, we provide end-to-end creative solutions for corporate clients who demand excellence.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/quote" className="btn btn-primary" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)', border: 'none' }}>
                Start Project
              </Link>
              <Link href="/portfolio" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats Bar */}
        <div style={{
          position: 'absolute',
          bottom: '50px',
          right: '5%',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          display: 'none', // Hidden on very small screens via CSS if needed, but flex by default
          minWidth: '300px',
          animation: 'slideUp 1s ease-out'
        }} className="hero-stats">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ backgroundColor: '#ecfdf5', padding: '0.75rem', borderRadius: '50%' }}>
              <span style={{ fontSize: '1.5rem', color: '#059669' }}>⭐</span>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>4.9/5</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Client Satisfaction</div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600 }}>Google Reviews</span>
              <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>500+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="section-padding" id="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <h2 className="heading-lg">Our Expertise</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 1, color: '#F8FAFC', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              Comprehensive creative and production services tailored <br />to elevate your brand identity.
            </p>
          </div>

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

          <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}>
            <Link href="/services" style={{ fontWeight: 600, color: 'white', textDecoration: 'underline', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 className="heading-lg" style={{ color: 'white' }}>Featured Work</h2>
              <p style={{ opacity: 1, color: '#F8FAFC', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Recent projects for our corporate clients.</p>
            </div>
            <Link href="/portfolio" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>View Full Gallery</Link>
          </div>
          <PortfolioGrid limit={3} items={portfolioItems} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <h2 className="heading-lg" style={{ color: 'white' }}>Why Choose <span className="text-gold">Dar Al Arafa Graphics</span>?</h2>
          </div>

          <div className="grid-3" style={{ textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Premium Quality</h3>
              <p style={{ opacity: 1, color: '#F8FAFC', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>We use top-tier materials and cutting-edge technology for flawless results.</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Fast Turnaround</h3>
              <p style={{ opacity: 1, color: '#F8FAFC', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Efficient workflows to meet your tightest corporate deadlines.</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Client Focused</h3>
              <p style={{ opacity: 1, color: '#F8FAFC', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Dedicated support and personalized solutions for every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CFA */}
      <section className="section-padding">
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
      </section>


    </main>
  );
}
