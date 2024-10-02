'use client'

import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { FaPen, FaBullhorn, FaCrown, FaGlobe, FaMicrophone } from 'react-icons/fa';
import Link from 'next/link';

const packages = [
  {
  name: "Share Your Voice",
  price: 0,
  icon: FaMicrophone, // Assuming you have this icon imported, if not, you may need to import it
  features: [
    "Submit your personal testimonial for FREE",
    "Basic moderation and review",
    "Publication on our platform",
    "Opportunity to inspire others"
  ],
  warning: "By submitting your story, you grant us permission to use it for commercial purposes. Your story may be featured in our marketing materials or publications."
  },
  {
    name: "Share Your Story",
    price: 2999,
    icon: FaPen,
    features: [
      "20,000-word ghostwritten autobiography",
      "Basic editing and proofreading",
      "Simple cover design",
      "Ebook formatting",
      "Basic landing page",
      "10 author copies",
      "10% royalty on book sales"
    ]
  },
  {
    name: "Amplify Your Voice",
    price: 4999,
    icon: FaBullhorn,
    features: [
      "40,000-word ghostwritten autobiography",
      "Comprehensive editing and proofreading",
      "Professional cover design",
      "Ebook and paperback formatting",
      "Custom landing page",
      "Basic social media setup",
      "25 author copies",
      "15% royalty on book sales",
      "Basic merchandising",
      "5% royalty on merchandise sales"
    ]
  },
  {
    name: "Empower Your Legacy",
    price: 7999,
    icon: FaCrown,
    features: [
      "60,000-word ghostwritten autobiography",
      "Premium editing and proofreading",
      "Custom cover design with multiple concepts",
      "Ebook, paperback, and hardcover formatting",
      "Professional author website",
      "Comprehensive social media setup",
      "50 author copies",
      "20% royalty on book sales",
      "Extended merchandising",
      "10% royalty on merchandise sales",
      "Basic marketing plan and press release"
    ]
  },
  {
    name: "Inspire the World",
    price: 11999,
    icon: FaGlobe,
    features: [
      "80,000-word ghostwritten autobiography",
      "Premium editing, proofreading, and sensitivity reading",
      "Custom cover design with unlimited revisions",
      "All format preparations",
      "Professional author website with blog setup",
      "Comprehensive social media management for 3 months",
      "100 author copies",
      "25% royalty on book sales",
      "Full merchandising line",
      "15% royalty on merchandise sales",
      "Comprehensive marketing plan, press release, and media kit",
      "Virtual book launch event organization"
    ]
  }
];

export default function PackagesPage() {


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
    <div className="packages-page">
        <div className="section-container no-margin-bottom">
            <h2 className="section-title"ref={h1Ref}>Our Publishing Packages</h2>
            <img src="/underline.svg" style={{ width: h1Width }} />
        </div>
      <p className="packages-intro">
        Choose the package that best fits your vision & let's get started!
      </p>
      
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <pkg.icon className="package-icon" />
            <h2 className="package-name">{pkg.name}</h2>
            <ul className="package-features">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>

            {pkg.warning && (
              <div className="warning">
                <p><strong>Warning:</strong> {pkg.warning}</p>
              </div>
            )}

            <button 
              className="package-cta" 
              onClick={() => handleCheckout(pkg.name, pkg.price)}
            >
              Get Started Now
            </button>
          </div>
        ))}
      </div>

      <div className="process-explanation">
        <h2>How It Works</h2>
        <ol>
          <li>Choose your preferred package and click "Get Started Now".</li>
          <li>You'll be directed where you can either fill-in the form with your details, or contact us directly using email/phone.</li>
          <li>Within 24 hours of filling the form or emailing us, one of our dedicated sales representatives will contact you.</li>
          <li>In a personalized consultation, we'll explore your needs in depth and tailor the package to your unique story.</li>
          <li>Once we've refined the details, we'll begin the exciting journey of bringing your story to life!</li>
        </ol>
      </div>

      <div className="packages-note">
        <p>All packages include ISBN assignment, copyright registration, distribution setup on major platforms, and a personalized project manager.</p>
      </div>
    </div>
    <section className="cta-section">
    <div className="cta-container">
        <div className="section-container" style={{ marginBottom: '40px' }}>
            <h2 className="section-title" ref={h2Ref}>Not Ready to Commit?</h2>
            <img src="/underline-white.svg" style={{ width: h2Width }} />
        </div>
        <div className="cta-buttons">
          <Link href="/contact" className="cta-button primary">
            BOOK A FREE Consultation
          </Link>
        </div>
      </div>
      </section>
    </>
  );
}