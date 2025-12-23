import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingShapes from '@/components/decorative/FloatingShapes';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* 404 Section */}
      <section className="relative flex-grow pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <FloatingShapes variant="hero" />

        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10 flex items-center justify-center min-h-[600px]">
          <div className="max-w-3xl mx-auto text-center text-white">
            {/* 404 Number */}
            <div className="mb-8 animate-float">
              <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-accent via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-none">
                404
              </h1>
            </div>

            {/* Message */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ups! Stranica nije pronađena
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Stranica koju tražiš ne postoji ili je premeštena. Ne brini, i dalje možeš nastaviti učenje!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Početna stranica
              </Link>
              <Link
                href="/courses"
                className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg backdrop-blur-md flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Pregledaj kurseve
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">Ili pregledaj neki od ovih linkova:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="text-accent hover:text-cyan-300 transition-colors font-medium">
                  O nama
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/courses" className="text-accent hover:text-cyan-300 transition-colors font-medium">
                  Svi kursevi
                </Link>
                <span className="text-gray-600">•</span>
                <a href="/#kontakt" className="text-accent hover:text-cyan-300 transition-colors font-medium">
                  Kontakt
                </a>
                <span className="text-gray-600">•</span>
                <a href="/#cene" className="text-accent hover:text-cyan-300 transition-colors font-medium">
                  Cene
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
