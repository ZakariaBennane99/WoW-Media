'use client'



import { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const featuredBooks = [
  {
    title: "Beyond the Horizon",
    author: "Marie Thompson",
    cover: "/book-cover-2.svg",
    description: "An inspiring journey of self-discovery across continents."
  },
  {
    title: "Echoes of Resilience",
    author: "Maria Rodriguez",
    cover: "/book-cover-1.svg",
    description: "A powerful memoir of overcoming adversity and finding inner strength."
  },
  {
    title: "Whispers of Change",
    author: "Aisha Patel",
    cover: "/book-cover-3.svg",
    description: "A compelling story of cultural identity and social transformation."
  },
  {
    title: "Uncharted Waters",
    author: "Sarah Chen",
    cover: "/book-cover-4.svg",
    description: "An adventurous tale of breaking barriers in male-dominated industries."
  }
];

export default function FeaturedBooks() {

  const [showSlider, setShowSlider] = useState(false);

  const h2Ref = useRef(null);
  const [h2Width, setH2Width] = useState(0);

  useEffect(() => {
    setShowSlider(true);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="featured-books">
      <div className="container">
        <div className="section-container">
            <h2 className="section-title"ref={h2Ref}>Stories That Inspire</h2>
            <img src="/underline.svg" style={{ width: h2Width }} />
        </div>
        {showSlider && (
          <Slider {...settings}>
            {featuredBooks.map((book, index) => (
              <div key={index} className="book-slide">
                <div className="book-cover">
                  <img src={book.cover} alt={book.title} />
                </div>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <p className="book-description">{book.description}</p>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}