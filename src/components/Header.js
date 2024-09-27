'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    const handleScroll = () => {
      if (isLargeScreen) {
        setIsSticky(window.scrollY > 0);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLargeScreen]);

  return (
    <header className={`header ${isSticky && isLargeScreen ? 'sticky' : ''}`}>
      <nav className="nav-container">
        <ul className="nav-list left">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/how-it-works">How It Works</Link></li>
          <li><Link href="/packages">Packages</Link></li>
        </ul>
        <div className="logo">
          <Image src="/logo.png" alt="Publishing House Logo" width={80} height={109.6} />
        </div>
        <ul className="nav-list right">
          <li><Link href="/success-stories">Success Stories</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}