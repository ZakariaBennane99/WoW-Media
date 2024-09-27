'use client'


import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function CallToAction() {

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
  );
}