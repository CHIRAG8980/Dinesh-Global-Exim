"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-[#020817] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Dinesh Global Exim
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Premier Export House from India, connecting premium quality products with global markets. Excellence in every shipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Why Choose Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-slate-600 dark:text-slate-400 text-sm hover:text-[#bf953f] dark:hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Our Products</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li>Cotton Fabric</li>
              <li>Readymade Garments</li>
              <li>Agricultural Products</li>
              <li>Metals</li>
              <li>Mixed Products</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#bf953f] dark:text-amber-400 mt-1 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-sm">
                  501, Desk No. 243, 5th Floor, Shapath 1, Bodakdev, SG Highway,<br />
                  Ahmedabad, Gujarat, India – 380054
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#bf953f] dark:text-amber-400 shrink-0" />
                <a href="mailto:dineshglobalexim@gmail.com" className="text-slate-600 dark:text-slate-400 text-sm hover:underline">
                  dineshglobalexim@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#bf953f] dark:text-amber-400 shrink-0" />
                <a href="tel:+919428417032" className="text-slate-600 dark:text-slate-400 text-sm hover:underline">
                  +91 9428417032
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 dark:text-slate-500 text-xs">
            © {currentYear} Dinesh Global Exim. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-500">
            <Link href="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
