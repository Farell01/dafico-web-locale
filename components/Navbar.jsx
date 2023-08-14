"use client"
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

import Link from 'next-intl/link';
import Logo from '@public/assets/Dafico_Logo.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 640) {
        setIsMobileMenuOpen(false);
      }
    };

    // Check if window is defined (i.e., if code is running on the client side)
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Close the mobile menu after a brief delay
  useEffect(() => {
    if (isMobileMenuOpen) {
      const timerId = setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 30000);

      return () => clearTimeout(timerId);
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center relative">
      {/* Logo or Mobile Menu Icon */}
      <div className={`flex items-center ml-5 small-logo`}>
        <Link href="/">
          <Image src={Logo} alt="Dafico Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && windowWidth <= 640 && (
        <div className="absolute z-10 top-20 right-4 bg-gray-900 p-4">
          <ul className="space-y-6">
            <MobileMenuItem href="/">Home</MobileMenuItem>
            <MobileMenuItem href="/projects">Projects</MobileMenuItem>
            <MobileMenuItem href="/about">About</MobileMenuItem>
            <MobileMenuItem href="/gallery">Gallery</MobileMenuItem>
            <MobileMenuItem href="/contact">Contact</MobileMenuItem>
          </ul>
        </div>
      )}
      {/* Desktop Menu */}
      <ul className={`hidden sm:flex space-x-4`}>
        <MenuItem href="/" isDesktop={true}>Home</MenuItem>
        <MenuItem href="/projects" isDesktop={true}>Projects</MenuItem>
        <MenuItem href="/about" isDesktop={true}>About</MenuItem>
        <MenuItem href="/gallery" isDesktop={true}>Gallery</MenuItem>
        <MenuItem href="/contact" isDesktop={true}>Contact</MenuItem>
        <Link href="/" locale="id">🇮🇩</Link>
        <Link href="/" locale="en">🇬🇧</Link>
      </ul>
    </nav>
  );
}


function MenuItem({ href, children, isDesktop }) {
  const textSizeClass = isDesktop ? 'text-xl text-white' : 'text-white';

  return (
    <li>
      <Link href={href} passHref>
        <span className={`cursor-pointer ${textSizeClass} hover:translate-y-[-3px] relative inline-block transition-transform duration-300`}>
          {children}
          <span className="absolute bottom-[-5px] left-0 w-full h-3 bg-gray-500 opacity-50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </span>
      </Link>
    </li>
  );
}

function MobileMenuItem({ href, children }) {
  return (
    <li>
      <Link href={href} passHref>
        <span className="text-white cursor-pointer hover:translate-y-[-3px] relative inline-block transition-transform duration-300">
          {children}
          <span className="absolute bottom-[-5px] left-0 w-full h-3 bg-gray-500 opacity-50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </span>
      </Link>
    </li>
  );
}

export default Navbar;
