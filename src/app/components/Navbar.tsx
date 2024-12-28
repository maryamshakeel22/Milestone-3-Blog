"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Updated for Next.js 13+ routing
import { LuLinkedin } from "react-icons/lu";
import { FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route dynamically

  // Helper function to check active link
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          Blog
        </h1>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`hover:text-yellow-400 transition ${
              isActive('/') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/components/post"
            className={`hover:text-yellow-400 transition ${
              isActive('/components/post') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            Categories
          </Link>
          <Link
            href="/contact"
            className={`hover:text-yellow-400 transition ${
              isActive('/contact') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            Contact
          </Link>
          <Link
            href={'https://linkedin.com/in/maryam-shakeel-5720a12b5/'}
            className={`hover:text-yellow-400 transition ${
              isActive('/new-post') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            <FaLinkedin className='size-6 hover:text-blue-400'/>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none text-yellow-400"
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <Link
            href="/"
            className={`block py-2 px-4 ${
              isActive('/') ? 'bg-yellow-500 text-black' : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            href="/components/post"
            className={`block py-2 px-4 ${
              isActive('/components/post')
                ? 'bg-yellow-500 text-black'
                : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Categories
          </Link>
          <Link
            href="/contact"
            className={`block py-2 px-4 ${
              isActive('/contact')
                ? 'bg-yellow-500 text-black'
                : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Contact
          </Link>
          <Link
            href={'https://linkedin.com/in/maryam-shakeel-5720a12b5/'}
            className={`block py-2 px-4 ${
              isActive('/new-post')
                ? 'bg-yellow-500 text-black'
                : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
           <FaLinkedin className='size-6 hover:text-blue-400'/>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;