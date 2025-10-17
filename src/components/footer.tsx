/**
 * @fileoverview Footer component for Bluebonnet Home Inspections website.
 * @description This component displays company information, service areas, links, and legal requirements
 * following the implementation checklist requirements for trust signals and compliance.
 */

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { fetchAPI } from "@/lib/api";

/**
 * Footer component with NAP, service areas, and important links
 * @returns {JSX.Element} The site footer with comprehensive information
 */
export const Footer = async () => {
  const currentYear = new Date().getFullYear();
  // let footer = {};
  const res = await fetch("https://home-inspections.codersh.com/wp-json/acf/v3/options/options", {
  next: { revalidate: 3600 }, // optional cache revalidation
  });
  const data = await res.json();
  const footer = data.acf;
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="font-serif text-xl mb-4">
              {footer?.company_name}
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  {footer?.address}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`tel:${footer?.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {footer?.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${footer?.email}`}
                  className="hover:text-white transition-colors"
                >
                  {footer?.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>{footer?.license}</span>
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-serif text-xl mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/cedar-park-home-inspector"
                  className="hover:text-white transition-colors"
                >
                  Cedar Park
                </Link>
              </li>
              <li>
                <Link
                  href="/round-rock-home-inspector"
                  className="hover:text-white transition-colors"
                >
                  Round Rock
                </Link>
              </li>
              <li>
                <Link
                  href="/leander-home-inspector"
                  className="hover:text-white transition-colors"
                >
                  Leander
                </Link>
              </li>
              <li>
                <Link
                  href="/georgetown-home-inspector"
                  className="hover:text-white transition-colors"
                >
                  Georgetown
                </Link>
              </li>
              <li>
                <Link
                  href="/austin-home-inspector"
                  className="hover:text-white transition-colors"
                >
                  Austin
                </Link>
              </li>
              <li>
                <Link
                  href="/pflugerville-home-inspector"
                  className="hover:text-white transition-colors"
                >
                  Pflugerville
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Tim McCoy
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="hover:text-white transition-colors"
                >
                  Inspection Process
                </Link>
              </li>
              <li>
                <Link
                  href="/sample-report"
                  className="hover:text-white transition-colors"
                >
                  Sample Report
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Industry Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/for-agents"
                  className="hover:text-white transition-colors"
                >
                  For Real Estate Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-white transition-colors"
                >
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications & Legal */}
          <div>
            <h3 className="font-serif text-xl mb-4">Certifications</h3>
            <div className="space-y-3 text-gray-300">
              <p className="font-semibold">{footer?.certification_1}</p>
              <p>{footer?.certification_2}</p>
              <p>{footer?.certification_3_}</p>
              <p>{footer?.guarantee}</p>

              <div className="pt-4 space-y-2">
                <Link
                  href="/privacy-policy"
                  className="block text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="block text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <a
                  href="https://www.trec.texas.gov/public/trec-consumer-protection-notice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-white transition-colors"
                >
                  TREC Consumer Protection Notice
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Bluebonnet Home Inspections, PLLC. All rights
              reserved.
            </p>
            <p className="text-sm text-gray-400">
              Tim McCoy personally protects your family's biggest investment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
