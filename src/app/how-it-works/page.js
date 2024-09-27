'use client'



import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { FaPencilAlt, FaPaintBrush, FaGlobe, FaBullhorn } from 'react-icons/fa';
import Link from 'next/link';

const steps = [
  {
    icon: FaPencilAlt,
    title: 'Writing Support',
    description: 'We help you write or refine your book.',
    details: [
      'One-on-one sessions with experienced writers',
      'Structural and developmental editing',
      'Proofreading and copy editing',
      'Ghostwriting services for those who need it'
    ]
  },
  {
    icon: FaPaintBrush,
    title: 'Creative & Merch',
    description: 'Design your book cover and promotional materials.',
    details: [
      'Professional book cover design',
      'Interior layout and formatting',
      'Creation of promotional materials (posters, bookmarks, etc.)',
      'Merchandise design and production (t-shirts, mugs, etc.)'
    ]
  },
  {
    icon: FaGlobe,
    title: 'Digital Presence',
    description: 'Create your author website and establish an online presence.',
    details: [
      'Custom author website design and development',
      'Social media profile setup and management',
      'Blog setup and content strategy',
      'Email newsletter setup and management'
    ]
  },
  {
    icon: FaBullhorn,
    title: 'Marketing & Tours',
    description: 'Promote your book and go on tours.',
    details: [
      'Comprehensive marketing strategy',
      'Book launch event planning and execution',
      'Media outreach and interview coordination',
      'Book tour planning and logistics management'
    ]
  },
];

export default function HowItWorksPage() {

    const h1Ref = useRef(null);
    const h2Ref = useRef(null); 
    const [h1Width, setH1Width] = useState(0);
    const [h2Width, setH2Width] = useState(0);
    const [pageWidth, setPageWidth] = useState(0);
  
    useEffect(() => {
        // Function to set the widths of h1, h2 elements and the page width
        const updateWidths = () => {
          if (h1Ref.current) {
            setH1Width(h1Ref.current.offsetWidth); // Set h1 width
          }
          if (h2Ref.current) {
            setH2Width(h2Ref.current.offsetWidth); // Set h2 width
          }
          setPageWidth(window.innerWidth); // Set the page width
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
    <div className="how-it-works-container">
        <div className="section-container no-margin-bottom">
            <h2 className="section-title"ref={h1Ref}>How It Works?</h2>
            <img src="/underline.svg" style={{ width: h1Width }} />
        </div>
      
      <p className="how-it-works-intro">
        We're dedicated to helping women share their amazing life stories. 
        Here's how we support you every step of the way.
      </p>

        {steps.map((step, index) => (
          <div key={index} className="how-it-works-step">
            {
                pageWidth < 768 && (index === 1 || index === 3)  ?
                <>
                    <div className="step-details-container">
                      <h3 className="step-details-title">What we offer:</h3>
                      <ul className="step-details">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="step-content">
                      <div className="step-header">
                        <div className="step-icon">
                          <step.icon />
                        </div>
                        <h2 className="step-title">{index + 1}. {step.title}</h2>
                      </div>
                      <p className="step-description">{step.description}</p>
                    </div>
                </>
                : 
                <>
                    <div className="step-content">
                      <div className="step-header">
                        <div className="step-icon">
                          <step.icon />
                        </div>
                        <h2 className="step-title">{index + 1}. {step.title}</h2>
                      </div>
                      <p className="step-description">{step.description}</p>
                    </div>
                    <div className="step-details-container">
                      <h3 className="step-details-title">What we offer:</h3>
                      <ul className="step-details">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                </>    
            }

          </div>
        ))}
    </div> 
    <section className="cta-section">
    <div className="cta-container">
        <div className="section-container">
            <h2 className="section-title" ref={h2Ref}>Ready to Share Your Story?</h2>
            <img src="/underline-white.svg" style={{ width: h2Width }} />
        </div>
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