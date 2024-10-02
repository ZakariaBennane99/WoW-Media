import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text-box">
          <h1 className="hero-title">Empowering Women to Share Their Stories</h1>
          <p className="hero-subtitle">From writing to worldwide tours, we offer the support you need to publish and promote your inspiring story.</p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary">Book A Free Consultation</Link>
            <Link href="/packages" className="btn btn-secondary">Get Started Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}