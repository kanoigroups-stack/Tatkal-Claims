"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Media Coverage", href: "/media" },
  ],
  services: [
    { label: "Claim Rejection", href: "/services/claim-rejection" },
    { label: "Claim Delay", href: "/services/claim-delay" },
    { label: "Mis-selling", href: "/services/mis-selling" },
    { label: "Short Settlement", href: "/services/short-settlement" },
  ],
  resources: [
    { label: "Knowledge Center", href: "/blog/" },
    { label: "Case Studies", href: "/success-stories" },
    { label: "IRDAI Guidelines", href: "/irdai" },
    { label: "Ombudsman Info", href: "/ombudsman" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/tatkalclaims", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/tatkalclaims", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/tatkalclaims", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/tatkalclaims", label: "Instagram" },
];

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6" aria-label="Tatkal Claims Home">
              <div className="w-10 h-10 bg-primary-700 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-none">Tatkal Claims</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              India's most trusted platform for resolving insurance complaints. We help policyholders recover rightful claims through expert dispute resolution.
            </p>
            <div className="space-y-3">
              <a href="tel:+919321152524" className="flex items-center gap-3 text-sm hover:text-white transition-colors" aria-label="Call us">
                <Phone className="w-4 h-4 text-accent-500 flex-shrink-0" aria-hidden="true" />
                +91 9321152524
              </a>
              <a href="mailto:help@tatkalclaims.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors" aria-label="Email us">
                <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" aria-hidden="true" />
                help@tatkalclaims.com
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>84, Bakol street, Laudin Villa, Bhayander West, Mumbai - 401101</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {year} Tatkal Claims. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label={`Follow us on ${social.label}`}
              >
                <social.icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
