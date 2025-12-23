'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import TiltCard from '@/components/effects/TiltCard';
import AnimatedGradient from '@/components/effects/AnimatedGradient';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />

      {/* Wavy Divider */}
      <div className="relative h-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <svg className="absolute bottom-0 w-full h-24 text-blue-50" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0C240 53.3 480 80 720 80C960 80 1200 53.3 1440 0V120H0V0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
        <AnimatedGradient />

        {/* Decorative circles */}
        <div className="absolute top-10 right-20 w-32 h-32 border-4 border-blue-200 dark:border-blue-900 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-cyan-200 dark:border-cyan-900 rounded-full opacity-20"></div>

        {/* Floating shapes */}
        <div className="absolute top-40 left-40 w-16 h-16 bg-blue-200/30 dark:bg-blue-900/30 rounded-2xl rotate-12 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-40 right-60 w-20 h-20 bg-cyan-200/30 dark:bg-cyan-900/30 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
              Zašto Developer.Lab?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Praktičan pristup učenju sa svim što ti treba za uspešan start u Data Science karijeri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card group">
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Praktični projekti</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Radi na realnim Data Science projektima koji će ti biti portfolio za pronalaženje posla
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card group">
              <div className="w-14 h-14 bg-gradient-card rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Mentor podrška</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Dobijaj odgovore od iskusnih Data Scientists mentora 24/7 preko naše platforme
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card group">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Brzo do posla</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Naši polaznici u proseku nalaze posao za 3 meseca nakon završetka kursa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curved Divider */}
      <div className="relative h-32">
        <svg className="absolute top-0 w-full h-32 text-white" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0L60 13.3C120 26.7 240 53.3 360 64C480 74.7 600 69.3 720 58.7C840 48 960 32 1080 26.7C1200 21.3 1320 26.7 1380 29.3L1440 32V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100/50 via-white to-cyan-100/50 relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #2563EB 1px, transparent 1px), linear-gradient(to bottom, #2563EB 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        {/* Decorative curved line */}
        <div className="absolute top-20 left-0 w-full h-64 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 160C240 100 480 140 720 120C960 100 1200 80 1440 100" stroke="url(#paint0_linear)" strokeWidth="3" fill="none"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="0">
                <stop stopColor="#2563EB"/>
                <stop offset="1" stopColor="#0EA5E9"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Tehnologije koje ćeš savladati
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Radi sa najtraženijim alatima i bibliotekama u Data Science industriji
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Python */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Python</span>
            </div>

            {/* Pandas */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">🐼</span>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Pandas</span>
            </div>

            {/* NumPy */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.315 4.876L6.3043 8.8863c-.1948.1997-.3047.4686-.3047.7515s.11.5518.3047.7515l4.0107 4.011c.1997.1947.4685.3047.7514.3047.2829 0 .5518-.11.7515-.3047l4.0117-4.011c.3908-.3908.3908-1.0238 0-1.4146L11.8182 4.876c-.3909-.3908-1.0239-.3908-1.4147 0z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">NumPy</span>
            </div>

            {/* Scikit-learn */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Scikit-learn</span>
            </div>

            {/* TensorFlow */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">TF</span>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">TensorFlow</span>
            </div>

            {/* PyTorch */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5l9.5 5.5v11L12 24.5 2.5 19V8L12 2.5z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">PyTorch</span>
            </div>

            {/* Matplotlib */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Matplotlib</span>
            </div>

            {/* Seaborn */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Seaborn</span>
            </div>

            {/* Jupyter */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-gray-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="6" cy="18" r="1.5"/>
                  <circle cx="18" cy="6" r="1.5"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Jupyter</span>
            </div>

            {/* Git */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.62 11.108l-8.731-8.729c-.57-.57-1.595-.57-2.166 0l-1.95 1.95 2.521 2.521c.607-.204 1.301-.064 1.791.426.491.491.631 1.188.425 1.794l2.43 2.43c.605-.204 1.302-.064 1.792.427.678.678.678 1.773 0 2.452-.677.677-1.774.677-2.452 0-.515-.516-.641-1.271-.379-1.904l-2.267-2.267-.001 5.961c.165.081.319.187.457.325.678.678.678 1.773 0 2.452-.677.677-1.773.677-2.45 0-.678-.679-.678-1.774 0-2.452.167-.167.356-.29.555-.375v-6.012c-.199-.085-.388-.208-.555-.375-.517-.517-.644-1.276-.38-1.912l-2.484-2.484-6.571 6.57c-.569.57-.569 1.595 0 2.166l8.732 8.729c.569.57 1.595.57 2.164 0l8.697-8.697c.57-.569.57-1.595 0-2.165"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Git</span>
            </div>

            {/* SQL */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">SQL</span>
            </div>

            {/* Docker */}
            <div className="group flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Docker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="kursevi" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Naši kursevi
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Od početnika do profesionalca - odaberi kurs koji ti odgovara
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Course 1 - Python */}
            <TiltCard maxTilt={5}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-300 blur"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-navy mb-2">Python za Data Science</h3>
                  <p className="text-sm text-blue-600 font-semibold">8 nedelja • Početni</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Savladaj Python od osnova i nauči biblioteke kao što su NumPy, Pandas i Matplotlib za analizu podataka.
                </p>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">12.990</span>
                    <span className="text-gray-500 text-sm">RSD</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Jednokratna uplata</p>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                  Saznaj više
                </button>
              </div>
              </div>
            </TiltCard>

            {/* Course 2 - Machine Learning (Popular) */}
            <TiltCard maxTilt={5}>
              <div className="group relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                  ⭐ NAJPOPULARNIJI
                </span>
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-300 blur"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform scale-105">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-navy mb-2">Machine Learning</h3>
                  <p className="text-sm text-blue-600 font-semibold">12 nedelja • Srednji</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Nauči algoritme mašinskog učenja, rad sa Scikit-learn i implementaciju ML modela na realnim podacima.
                </p>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">19.990</span>
                    <span className="text-gray-500 text-sm">RSD</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Jednokratna uplata</p>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                  Saznaj više
                </button>
              </div>
              </div>
            </TiltCard>

            {/* Course 3 - Deep Learning */}
            <TiltCard maxTilt={5}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-300 blur"></div>
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-navy mb-2">Deep Learning & AI</h3>
                  <p className="text-sm text-cyan-600 font-semibold">10 nedelja • Napredni</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Uroni u duboko učenje sa TensorFlow i PyTorch. Kreiraj neuronske mreže i AI aplikacije.
                </p>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">24.990</span>
                    <span className="text-gray-500 text-sm">RSD</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Jednokratna uplata</p>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                  Saznaj više
                </button>
              </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-20">
        <svg className="absolute top-0 w-full h-20 text-white" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 50C360 10 720 90 1080 50C1260 30 1350 40 1440 50V100H0V50Z" fill="currentColor"/>
        </svg>
        <svg className="absolute top-0 w-full h-20 text-blue-50/50" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 70C360 30 720 100 1080 60C1260 40 1350 50 1440 60V100H0V70Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100/50 via-cyan-100/40 to-blue-100/50 relative overflow-hidden">
        {/* Playful background elements */}
        <div className="absolute top-32 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"></div>

        {/* Decorative dots */}
        <div className="absolute top-20 left-10 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-300/40"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-300/40"></div>
          <div className="w-3 h-3 rounded-full bg-blue-300/40"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Šta kažu naši polaznici
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Priče uspeha onih koji su promenili svoju karijeru sa nama
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Developer.Lab mi je promenio život! Za 3 meseca sam od početnika došao do Junior Data Scientist pozicije. Mentori su fenomenalni!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div>
                  <p className="font-bold text-navy">Marko Jovanović</p>
                  <p className="text-sm text-gray-500">Junior Data Scientist @ Tech Corp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Projekti su bili ključni za moj portfolio. Dobila sam posao pre nego što sam završila kurs. Hvala Developer.Lab timu!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center text-white font-bold">
                  AP
                </div>
                <div>
                  <p className="font-bold text-navy">Ana Petrović</p>
                  <p className="text-sm text-gray-500">ML Engineer @ AI Startup</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Najbolja investicija u moju karijeru! Praktičan pristup i odlični mentori. Sada radim kao Data Analyst i jako sam zadovoljan."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary-light rounded-full flex items-center justify-center text-white font-bold">
                  NS
                </div>
                <div>
                  <p className="font-bold text-navy">Nikola Stefanović</p>
                  <p className="text-sm text-gray-500">Data Analyst @ Finance Co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth Wave Divider */}
      <div className="relative h-24 bg-gradient-to-b from-blue-100/50 to-white">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0C240 40 480 80 720 80C960 80 1200 40 1440 0V120H0V0Z" fill="white"/>
        </svg>
      </div>

      {/* Learning Timeline Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle blue accent on left */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 opacity-20"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-blue-100 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-cyan-100 rounded-lg rotate-45 opacity-30"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Tvoj put do Data Science karijere
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Prati naš strukturiran proces od upisa do zaposlenja
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Item 1 */}
            <div className="relative flex items-start gap-8 pb-12">
              {/* Line connector */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

              {/* Number circle */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-navy mb-2">Upis i onboarding</h3>
                <p className="text-gray-600 mb-4">
                  Upoznaj se sa platformom, mentorima i ostalim polaznicima. Pripremi svoj radni prostor i alate za učenje.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium">1 nedelja</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium">Setup okruženja</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-start gap-8 pb-12">
              {/* Line connector */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

              {/* Number circle */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-navy mb-2">Aktivno učenje</h3>
                <p className="text-gray-600 mb-4">
                  Prati video lekcije, radi zadatke i projekte. Dobijaj feedback od mentora i uči kroz praksu na realnim problemima.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-sm rounded-full font-medium">8-12 nedelja</span>
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-sm rounded-full font-medium">Projekti</span>
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-sm rounded-full font-medium">Mentor podrška</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-start gap-8 pb-12">
              {/* Line connector */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

              {/* Number circle */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-navy mb-2">Portfolio i CV</h3>
                <p className="text-gray-600 mb-4">
                  Završi završni projekat i napravi portfolio. Optimizuj LinkedIn profil i pripremi CV sa pomođenom naših kariernih savetnika.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full font-medium">2 nedelje</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full font-medium">Završni projekat</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full font-medium">CV review</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative flex items-start gap-8">
              {/* Number circle */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-navy mb-2">Zaposlenje</h3>
                <p className="text-gray-600 mb-4">
                  Priprema za intervjue, pomoć u pregovorima i podrška dok ne dobiješ posao. Naši polaznici prosečno nalaze posao za 3 meseca.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full font-medium">1-3 meseca</span>
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full font-medium">Interview prep</span>
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full font-medium">Job placement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Započni svoju Data Science karijeru danas
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Pridruži se stotinama zadovoljnih polaznika koji su promenili svoje karijere sa Developer.Lab
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              Započni besplatno
            </button>
            <button className="btn-outline text-lg px-8 py-4">
              Kontaktiraj nas
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
