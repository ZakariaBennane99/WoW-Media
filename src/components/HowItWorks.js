'use client'


import { FaPencilAlt, FaPaintBrush, FaGlobe, FaBullhorn } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';


const steps = [
  { icon: FaPencilAlt, title: 'Writing Support', description: 'We help you write or refine your book.' },
  { icon: FaPaintBrush, title: 'Creative and Merch', description: 'Design your book cover and promotional materials.' },
  { icon: FaGlobe, title: 'Digital Presence', description: 'Create your author website and establish an online presence.' },
  { icon: FaBullhorn, title: 'Marketing and Tours', description: 'Promote your book and go on tours.' },
];

export default function HowItWorks() {


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
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-container">
          <h2 className="section-title" ref={h2Ref}>
            A Complete Journey From Story to Success
          </h2>
          <img src="/underline.svg" style={{ width: h2Width }} />
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">
                <step.icon />
              </div>
              <h3 className="step-title">{index + 1 + '.'} {step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="cta-container">
          <Link href="/how-it-works" className="cta-button">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}