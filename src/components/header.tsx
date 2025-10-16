"use client";

import Link from "next/link";
import { Phone, Star, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchAPI } from "@/lib/api"; // adjust the path if needed

interface MenuItem {
  ID: number;
  title: string;
  url: string;
  parent: string;
  order: number;
  object_id: string;
  object_slug: string;
}

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  //  Fetch menu items dynamically from WP custom endpoint
  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await fetchAPI("custom/v1/menu/header-menu");

        if (data?.items) {
          const sorted = data.items
            .sort((a: MenuItem, b: MenuItem) => a.order - b.order)
            .map((item: MenuItem) => ({
              ...item,
              // Clean URL: remove WP base + index.php
              url: item.url.replace(
                "https://home-inspections.codersh.com/index.php",
                ""
              ),
            }));

          setMenuItems(sorted);
        }
      } catch (error) {
        console.error("Error loading menu:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* 🟦 Top Trust Bar */}
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
              ))}
            </div>
            <span className="text-charcoal font-medium">5.0 Google Rating</span>
          </div>
        </div>
      </div>

      {/*  Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo2.png"
              alt="Bluebonnet Home Inspections"
              width={170}
              height={45}
              priority
            />
          </Link>

          {/*  Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {loading ? (
              <span className="text-gray-400">Loading...</span>
            ) : (
              menuItems.map((item) => (
                <Link
                  key={item.ID}
                  href={item.url || "#"}
                  className="text-charcoal hover:text-primaryBlue transition-colors"
                >
                  {item.title}
                </Link>
              ))
            )}
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
              className="bg-gradient-to-r from-primaryBlue to-accentBlue text-white px-6 py-2.5 rounded-full font-semibold hover:from-accentBlue hover:to-primaryBlue transition-all"
            >
              Schedule Now
            </Link>

            {/*  Mobile Menu Button */}
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

        {/*  Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {loading ? (
                  <span className="text-gray-400">Loading...</span>
                ) : (
                  menuItems.map((item) => (
                    <Link
                      key={item.ID}
                      href={item.url || "#"}
                      onClick={closeMobileMenu}
                      className="text-charcoal hover:text-primaryBlue transition-colors py-2 px-4 rounded hover:bg-lightGray"
                    >
                      {item.title}
                    </Link>
                  ))
                )}

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
