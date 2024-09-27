'use client'


import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';


const testimonials = [
  {
    author: "Maria Rodriguez",
    bookCover: "/images/test-3.jpg",
    quote: "This publishing house turned my dream into reality. Their support was invaluable throughout my journey.",
  },
  {
    author: "Marie Thompson",
    bookCover: "/images/test-5.jpg",
    quote: "From manuscript to bestseller, they guided me every step of the way. I couldn't have asked for a better partner.",
  },
  {
    author: "Aisha Patel",
    bookCover: "/images/test-4.jpg",
    quote: "The marketing support I received was exceptional. My book reached audiences I never thought possible.",
  }
];

export default function SuccessStories() {

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
      <section className="success-stories">
        <div className="container">
          <div className="section-container">
            <h2 className="section-title" ref={h2Ref}>
              Our Authors' Journeys
            </h2>
            <img src="/underline.svg" style={{ width: h2Width }} />
          </div>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="book-cover">
                  <Image src={testimonial.bookCover} alt={`${testimonial.author}'s Book`} width={150} height={150} />
                </div>
                <blockquote className="quote">"{testimonial.quote}"</blockquote>
                <p className="author">- {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="cta-container">
            <Link href="/success-stories" className="cta-button">
              Read Their Stories
            </Link>
          </div>
        </div>
      </section>
    );
}