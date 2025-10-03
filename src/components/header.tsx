/**
 * @fileoverview Header component for Bluebonnet Home Inspections website.
 * @description This component displays the site navigation, trust signals, and primary CTAs
 * following the implementation checklist requirements for trust building and conversion optimization.
 */

"use client";

import Link from "next/link";
import { Phone, Star, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header component with navigation and trust signals
 * @returns {JSX.Element} The site header with navigation
 */
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Trust Bar - Top Section */}
      <div className="bg-lightGray py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4 text-mediumGray">
            <span className="font-semibold text-charcoal">
              TREC License #23059
            </span>
            <span className="hidden sm:inline">Fully Insured & Bonded</span>
            <span className="hidden md:inline">InterNACHI Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}``
            </div>
            <span className="text-charcoal font-medium">5.0 Google Rating</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="text-primaryBlue">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 5 L35 15 L35 35 L5 35 L5 15 Z" />
                <path d="M20 5 L20 25 M10 15 L30 15" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-charcoal">Bluebonnet</h1>
              <p className="text-xs text-mediumGray">Home Inspections</p>
            </div> */}
            <img src="/logo2.png" alt="Bluebonnet Home Inspections" />
            {/* <div>
              <h1 className="font-serif text-xl font-bold text-charcoal">Bluebonnet</h1>
              <p className="text-xs text-mediumGray">Home Inspections</p>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/services"
              className="text-charcoal hover:text-primaryBlue transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-charcoal hover:text-primaryBlue transition-colors"
            >
              About
            </Link>
            <Link
              href="/process"
              className="text-charcoal hover:text-primaryBlue transition-colors"
            >
              Our Process
            </Link>
            <Link
              href="/sample-report"
              className="text-charcoal hover:text-primaryBlue transition-colors"
            >
              Sample Report
            </Link>
            <Link
              href="/blog"
              className="text-charcoal hover:text-primaryBlue transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/for-agents"
              className="text-charcoal hover:text-primaryBlue transition-colors"
            >
              For Agents
            </Link>
            <Link
              href="/reviews"
              className="text-charcoal hover:text-primaryBlue transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/faq"
              className="text-charcoal hover:text-primaryBlue transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* CTA Section */}
          <div className="flex items-center gap-4">
            <a
              href="tel:512-560-5670"
              className="hidden sm:flex items-center gap-2 text-primaryBlue hover:text-accentBlue transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">512-560-5670</span>
            </a>
            <Link
              href="/schedule"
              className=" bg-gradient-to-r from-primaryBlue to-accentBlue text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primaryBlue transition-colors"
            >
              Schedule Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-charcoal hover:text-primaryBlue transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/services"
                  onClick={closeMobileMenu}
                  className="text-charcoal hover:text-primaryBlue transition-colors py-2 px-4 rounded hover:bg-lightGray"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="text-charcoal hover:text-primaryBlue transition-colors py-2 px-4 rounded hover:bg-lightGray"
                >
                  About
                </Link>
                <Link
                  href="/process"
                  onClick={closeMobileMenu}
                  className="text-charcoal hover:text-primaryBlue transition-colors py-2 px-4 rounded hover:bg-lightGray"
                >
                  Our Process
                </Link>
                <Link
                  href="/sample-report"
                  onClick={closeMobileMenu}
                  className="text-charcoal hover:text-primaryBlue transition-colors py-2 px-4 rounded hover:bg-lightGray"
                >
                  Sample Report
                </Link>
                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="text-charcoal hover:text-primaryBlue transition-colors py-2 px-4 rounded hover:bg-lightGray"
                >
                  Blog
                </Link>
                <Link
                  href="/for-agents"
                  onClick={closeMobileMenu}
                  className="text-charcoal hover:text-primaryBlue transition-colors py-2 px-4 rounded hover:bg-lightGray"
                >
                  For Agents
                </Link>
                <Link
                  href="/reviews"
                  onClick={closeMobileMenu}
                  className="text-charcoal hover:text-primaryBlue transition-colors py-2 px-4 rounded hover:bg-lightGray"
                >
                  Reviews
                </Link>
                <Link
                  href="/faq"
                  onClick={closeMobileMenu}
                  className="text-charcoal hover:text-primaryBlue transition-colors py-2 px-4 rounded hover:bg-lightGray"
                >
                  FAQ
                </Link>

                {/* Mobile Phone CTA */}
                <a
                  href="tel:512-560-5670"
                  className="flex items-center gap-2 text-primaryBlue hover:text-blue-700 transition-colors py-2 px-4 rounded hover:bg-lightGray font-semibold"
                  onClick={closeMobileMenu}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: 512-560-5670</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};
