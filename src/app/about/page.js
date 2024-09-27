'use client'



import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Link from 'next/link';


export default function AboutUsPage() {

    const h1Ref = useRef(null);
    const h2Ref = useRef(null); 
    const [h1Width, setH1Width] = useState(0);
    const [h2Width, setH2Width] = useState(0);
  
    useEffect(() => {
        // Function to set the widths of h1, h2 elements and the page width
        const updateWidths = () => {
          if (h1Ref.current) {
            setH1Width(h1Ref.current.offsetWidth); // Set h1 width
          }
          if (h2Ref.current) {
            setH2Width(h2Ref.current.offsetWidth); // Set h2 width
          }
        };
    
        // Set initial widths on mount
        updateWidths();
    
        // Update widths on window resize
        window.addEventListener('resize', updateWidths);
    
        // Cleanup the event listener on unmount
        return () => {
          window.removeEventListener('resize', updateWidths);
        };
    }, []);

  return (
    <>
    <div className="about-us-page">
        <div className="section-container no-margin-bottom">
            <h2 className="section-title"ref={h1Ref}>About The WOW Media</h2>
            <img src="/underline.svg" style={{ width: h1Width }} />
        </div>
        <h2>Women At The Well: Empowering Voices, Transforming Lives</h2>

      <section className="our-story">
        <h2>Our Story</h2>
        <div className="story-content">
          <div className="story-text">
            <p>The WOW Media was born from a moment of profound connection and shared purpose. In a fateful meeting, Erika Ballard encountered Maisha Leonard, whose story of resilience and faith in the face of unimaginable tragedy would become the catalyst for our mission.</p>
            <p>Maisha, the stepmother of NBA star Kawhi Leonard, had endured a horrific ordeal. While pregnant, she witnessed the murder of her husband and was herself shot multiple times. In the depths of this trauma, Maisha found strength and healing through her faith in Jesus Christ.</p>
            <p>When Maisha shared her desire to tell her story—her testimony of survival, healing, and unwavering faith—with Erika, a spark was ignited. They recognized a pressing need: a platform for women to share their powerful stories of overcoming adversity, a well of inspiration for others facing their own challenges.</p>
          </div>
          <div className="story-image">
            <img src="/images/founders.jpg" alt="Erika Ballard and Maisha Leonard" />
            <p className="image-caption"><em>Erika Ballard and Maisha Leonard, Founders of WOW Media</em></p>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>At The WOW Media, we believe in the transformative power of storytelling. Our mission is to amplify the voices of women who have faced adversity, overcome challenges, and emerged stronger. We provide a nurturing platform for these women to share their journeys, offering hope, inspiration, and guidance to others.</p>
        <p>We are more than just a publishing house; we are a community of support, a fountain of empowerment, and a catalyst for change. Through books, speaking engagements, and multimedia content, we bring these powerful stories to light, touching lives and inspiring courage in others.</p>
      </section>

      <section className="our-approach">
        <h2>Our Approach</h2>
        <div className="approach-grid">
          <div className="approach-item">
            <h3>Compassionate Guidance</h3>
            <p>We understand the vulnerability required to share deeply personal stories. Our team provides compassionate support throughout the writing and publishing process.</p>
          </div>
          <div className="approach-item">
            <h3>Professional Excellence</h3>
            <p>From ghostwriting to marketing, we offer top-tier services to ensure each story reaches its full potential and the widest possible audience.</p>
          </div>
          <div className="approach-item">
            <h3>Holistic Support</h3>
            <p>We go beyond publishing, offering author websites, merchandising, and marketing support to build lasting platforms for our authors.</p>
          </div>
          <div className="approach-item">
            <h3>Community Building</h3>
            <p>The WOW Media fosters a supportive community of authors and readers, creating a network of empowerment and mutual support.</p>
          </div>
        </div>
      </section>
    </div>
        <section className="cta-section">
          <div className="cta-container">
            <div className="section-container no-margin-bottom">
                <h2 className="section-title" ref={h2Ref}>Join Our Community</h2>
                <img src="/underline-white.svg" style={{ width: h2Width }} />
            </div>
            <p id='about-cta-desc'>Every woman has a story worth telling, a voice worth hearing. Whether you're ready to share your own story or draw inspiration from others, The WOW Media invites you to be part of our community.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="cta-button primary">
                Book a Free Consultation
              </Link>
              <Link href="/packages" className="cta-button secondary">
                Get Started Now
              </Link>
            </div>
          </div>
        </section>

    </>
  );
}