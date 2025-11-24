"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Our Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-yellow-50 border-b border-yellow-100 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16 py-10">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 cursor-pointer">
            <Image
              src="/images/home-page-images/bfb378934ebd7dee98e8e5cc11312636fda7bdd1.png"
              alt="Bhagwati Industries Logo"
              width={180}
              height={60}
              className="h-8 w-auto md:h-10 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-25 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-slate-900 font-medium text-base xl:text-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Buy Now Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/buy"
              className="px-4 xl:px-6 py-2 xl:py-2.5 yellow-theme-bg text-white font-semibold rounded-full text-sm xl:text-base transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Buy Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-yellow-100 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-700 hover:text-slate-900 font-medium text-base py-2 transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/buy"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-6 py-3 yellow-theme-bg text-white font-semibold rounded-full text-base text-center transition-all shadow-sm cursor-pointer"
              >
                Buy Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

