'use client'



import { useState, useEffect, useRef } from 'react';

import React from 'react';
import Link from 'next/link';

const successStories = [
  {
    author: "Maria Rodriguez",
    bookTitle: "Echoes of Resilience",
    photo: 'test-3.jpg',
    bookCover: "/book-cover-1.svg",
    quote: "This publishing house turned my dream into reality. Their support was invaluable throughout my journey.",
    video: "/hero-background.mp4",
    books: [
      { title: "Echoes of Resilience", cover: "/book-cover-1.svg", sales: "250,000 copies" }
    ],
    results: "New York Times Bestseller for 10 weeks.",
    adaptation: "Netflix documentary series in production."
  },
  {
    author: "Marie Thompson",
    bookTitle: "Echoes of Resilience",
    photo: 'test-5.jpg',
    quote: "From manuscript to bestseller, they guided me every step of the way. I couldn't have asked for a better partner.",
    video: "/hero-background.mp4",
    books: [
      { title: "Beyond the Horizon", cover: "/book-cover-2.svg", sales: "500,000 copies" },
      { title: "Uncharted Waters", cover: "/book-cover-4.svg", sales: "350,000 copies" }
    ],
    results: "Amazon's #1 Best Seller in Memoirs for 3 months.",
    adaptation: "Feature film rights optioned by Universal Pictures."
  },
  {
    author: "Aisha Patel",
    bookTitle: "Whispers of Change",
    photo: 'test-4.jpg',
    quote: "The marketing support I received was exceptional. My book reached audiences I never thought possible.",
    video: "/hero-background.mp4",
    books: [
      { title: "Whispers of Change", cover: "/book-cover-3.svg", sales: "400,000 copies" }
    ],
    results: "Winner of the Pulitzer Prize for Biography.",
    adaptation: "HBO Max limited series in pre-production."
  }
];

export default function SuccessStoriesPage() {

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
    <div className="success-stories-page">
        <div className="section-container">
            <h2 className="section-title"ref={h2Ref}>Our Authors' Journeys to Success</h2>
            <img src="/underline.svg" style={{ width: h2Width }} />
        </div>
      
      {successStories.map((story, index) => (
        <section key={index} className="author-section">
          <h2 className="author-name">{story.author}</h2>
          
          <div className="author-content">
            
            <div className="author-details">
                <div className='author-test-holder'>
                    <img src={'/images/' + story.photo} />
                    <blockquote className="author-quote">"{story.quote}"</blockquote>
                </div>
              
              <div className="author-books">
                <h3>Published Works:</h3>
                <div className="books-grid">
                  {story.books.map((book, bookIndex) => (
                    <div key={bookIndex} className="book-item">
                      <img src={book.cover} alt={book.title} />
                      <p className="book-title">{book.title}</p>
                      <p className="book-sales">{book.sales} sold</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="author-results">
                <h3>Achievements:</h3>
                <p>{story.results}</p>
              </div>
              
              <div className="author-adaptation">
                <h3>Media Adaptation:</h3>
                <p>{story.adaptation}</p>
              </div>
            </div>

            <div className="author-media">
              <video controls width="300" className="author-video">
                <source src={story.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        </section>
      ))}
    </div>
    <section className="cta-section">
        <div className="cta-container">
            <div className="section-container">
                <h2 className="section-title" ref={h1Ref}>Ready to Share Your Story?</h2>
                <img src="/underline-white.svg" style={{ width: h1Width }} />
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