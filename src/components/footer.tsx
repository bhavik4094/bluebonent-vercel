"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchAPI } from "@/lib/api";

interface MenuItem {
  ID: number;
  title: string;
  url: string;
  order: number;
}

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [footer, setFooter] = useState<any>({});
  const [leftMenu, setLeftMenu] = useState<MenuItem[]>([]);
  const [rightMenu, setRightMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFooterData = async () => {
      try {
        // 🔹 Fetch ACF footer fields
        const res = await fetch(
          "https://home-inspections.codersh.com/wp-json/acf/v3/options/options",
          { next: { revalidate: 3600 } }
        );
        const data = await res.json();
        setFooter(data.acf);

        // 🔹 Fetch Footer Menus (left & right)
        const [left, right] = await Promise.all([
          fetchAPI("custom/v1/menu/footer-menu-left"),
          fetchAPI("custom/v1/menu/footer-menu-right"),
        ]);

        if (left?.items) {
          const sorted = left.items.sort(
            (a: MenuItem, b: MenuItem) => a.order - b.order
          );
          setLeftMenu(sorted);
        }

        if (right?.items) {
          const sorted = right.items.sort(
            (a: MenuItem, b: MenuItem) => a.order - b.order
          );
          setRightMenu(sorted);
        }
      } catch (error) {
        console.error("Footer fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFooterData();
  }, []);

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="font-serif text-xl mb-4">{footer?.company_name}</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{footer?.address}</span>
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

          {/* Service Areas (Dynamic Left Menu) */}
          <div>
            <h3 className="font-serif text-xl mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              {loading ? (
                <li>Loading...</li>
              ) : (
                leftMenu.map((item) => (
                  <li key={item.ID}>
                    <Link
                      href={item.url || "#"}
                      className="hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Quick Links (Dynamic Right Menu) */}
          <div>
            <h3 className="font-serif text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {loading ? (
                <li>Loading...</li>
              ) : (
                rightMenu.map((item) => (
                  <li key={item.ID}>
                    <Link
                      href={item.url || "#"}
                      className="hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))
              )}
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
