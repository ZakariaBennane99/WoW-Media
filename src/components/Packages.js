'use client'



import Link from 'next/link';
import { FaPen, FaBullhorn, FaCrown, FaGlobe } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const packages = [
  {
    name: "Share Your Story",
    price: "$2,999",
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
    price: "$4,999",
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
    price: "$7,999",
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
    price: "$11,999",
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

export default function Packages() {

    const h2Ref = useRef(null);
    const [h2Width, setH2Width] = useState(0);
  
    useEffect(() => {
      // Function to set the width of the h2 element to the img
      const setWidth = () => {
        if (h2Ref.current) {
          setH2Width(h2Ref.current.offsetWidth);
        }
      };
  
      // Set the width on mount
      setWidth();
  
      // Update the width on window resize
      window.addEventListener('resize', setWidth);
  
      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener('resize', setWidth);
      };
    }, []);

  return (
    <section className="packages">
      <div className="container">
        <div className="section-container">
            <h2 className="section-title" ref={h2Ref}>Tailored Packages to Fit Your Needs</h2>
            <img src="/underline.svg" style={{ width: h2Width }} />
        </div>
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <pkg.icon className="package-icon" />
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-price"><b>{pkg.price}</b></p>
              <ul className="package-features">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="packages-note">
          <p>All packages include ISBN assignment, copyright registration, distribution setup on major platforms, and a personalized project manager.</p>
        </div>
        <div className="cta-container">
          <Link href="/packages" className="cta-button">
            Compare Our Packages
          </Link>
        </div>
      </div>
    </section>
  );
}