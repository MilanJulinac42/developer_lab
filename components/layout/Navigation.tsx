'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm z-50 transition-colors duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 relative z-50">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xl font-bold gradient-text">DEVELOPER.LAB</span>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-navy dark:text-white hover:text-primary dark:hover:text-accent transition-colors font-medium">
              Kursevi
            </Link>
            <Link href="/about" className="text-navy dark:text-white hover:text-primary dark:hover:text-accent transition-colors font-medium">
              O nama
            </Link>
            <Link href="/contact" className="text-navy dark:text-white hover:text-primary dark:hover:text-accent transition-colors font-medium">
              Kontakt
            </Link>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button className="hidden sm:block text-primary dark:text-accent hover:text-primary-dark dark:hover:text-accent/80 font-semibold transition-colors">
              Prijavi se
            </button>
            <button className="btn-primary text-sm sm:text-base">
              Počni besplatno
            </button>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-3 relative z-50">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-navy dark:bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-navy dark:bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-navy dark:bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-navy/95 backdrop-blur-lg transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`flex flex-col items-center justify-center h-full transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-8'}`}>
          {/* Mobile Nav Links */}
          <div className="flex flex-col items-center space-y-8 mb-12">
            <Link
              href="/courses"
              className="text-2xl font-semibold text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kursevi
            </Link>
            <Link
              href="/about"
              className="text-2xl font-semibold text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              O nama
            </Link>
            <Link
              href="/contact"
              className="text-2xl font-semibold text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="flex flex-col items-center space-y-4 w-64">
            <button
              className="w-full text-white border-2 border-white hover:bg-white hover:text-primary font-semibold py-3 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prijavi se
            </button>
            <button
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Počni besplatno
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
