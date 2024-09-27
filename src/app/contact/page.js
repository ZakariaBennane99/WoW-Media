'use client'



import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactTeaser() {

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or a service
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thanks for your message! We\'ll get back to you soon.');
  };

  return (
    <section className="contact-teaser official">
      <div className="container">
        <div className="section-container">
            <h2 className="section-title" ref={h2Ref}>Book A Free Consultation</h2>
            <img src="/underline.svg" style={{ width: h2Width }} />
        </div>
        <p className="contact-intro">Book a free consultation by filling in the form or contacting us directly using the info below.</p>
        
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="submit-button">SEND MESSAGE</button>
          </form>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>info@TheWoWMedia.com</p>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>123 Publishing Street, Los Angeles, ST 12345</p>
            </div>
            <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2741210941!2d-118.69193035185094!3d34.020161306743085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c0539793ab%3A0xf954b48375f4f312!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1695326391290!5m2!1sen!2sus" 
                  width="100%" 
                  height={350}
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}