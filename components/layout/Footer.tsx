'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // TODO: Replace with actual newsletter API
      console.log('Newsletter signup:', email);

      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-navy dark:bg-slate-950 text-gray-300 dark:text-gray-400 pt-16 pb-8 transition-colors duration-300">
      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="border-t border-b border-gray-700 dark:border-slate-800 py-12 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ostani u toku
                </h3>
                <p className="text-gray-400">
                  Prijavi se za newsletter i dobijaj savete, vesti i specijalne ponude
                </p>
              </div>

              <div>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (submitStatus !== 'idle') setSubmitStatus('idle');
                    }}
                    placeholder="Upiši svoj email"
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Šalje se
                      </span>
                    ) : (
                      'Prijavi se'
                    )}
                  </button>
                </form>

                {submitStatus === 'success' && (
                  <p className="mt-3 text-green-400 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Uspešno si se prijavio!
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="mt-3 text-red-400 text-sm">
                    Upiši validnu email adresu
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">DEVELOPER.LAB</span>
            </div>
            <p className="text-sm leading-relaxed">
              Edukativna platforma za buduće Data Science profesionalce.
            </p>
          </div>

          {/* Kursevi */}
          <div>
            <h3 className="text-white font-bold mb-4">Kursevi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/python-data-science" className="hover:text-accent transition-colors">Python za Data Science</Link></li>
              <li><Link href="/courses/machine-learning" className="hover:text-accent transition-colors">Machine Learning</Link></li>
              <li><Link href="/courses/deep-learning-ai" className="hover:text-accent transition-colors">Deep Learning & AI</Link></li>
              <li><Link href="/courses" className="hover:text-accent transition-colors">Svi kursevi</Link></li>
            </ul>
          </div>

          {/* Kompanija */}
          <div>
            <h3 className="text-white font-bold mb-4">Kompanija</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">O nama</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Kontakt</Link></li>
              <li><Link href="/#" className="hover:text-accent transition-colors">Karijera</Link></li>
              <li><Link href="/#" className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Zakon */}
          <div>
            <h3 className="text-white font-bold mb-4">Pravno</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-accent transition-colors">Uslovi korišćenja</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privatnost</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Developer.Lab. Sva prava zadržana.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-accent rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
