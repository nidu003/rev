"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
    document.body.classList.toggle('nav-open');
  };

  return (
    <nav className="nav" style={{ backgroundColor: 'white' }}>
      <div className="nav-toggle">
        <button className={`nav-toggle-btn ${showNav ? 'active' : ''}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="logo">
        <Link href="/">
          <img src="/image 1.png" alt="Logo" style={{ width: 77, height: 71 }} />
        </Link>
      </div>
      <ul className={`nav-list ${showNav ? 'show' : ''}`}>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
          <Link href="/">
            Products
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}> 
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
          <Link href="/about-us">
            About Us
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
          <Link href="/diy-pricing">
            DIY Pricing
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
          <Link href="/login">
            Login
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
          <Link href="/refer-reoccur">
            Refer & Reoccur
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
          <Link href="/article">
            Article
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;