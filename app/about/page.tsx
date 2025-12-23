'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import WaveDivider from '@/components/decorative/WaveDivider';
import FloatingShapes from '@/components/decorative/FloatingShapes';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <FloatingShapes variant="hero" />

        {/* Dots pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
              O <span className="text-accent">Developer.Lab</span> platformi
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Edukativna platforma koja pomaže ljudima da uđu u svet Data Science-a kroz praktično učenje i mentorsku podršku.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider variant="default" />

      {/* Founder Section - Milan Vulić */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <FloatingShapes variant="features" />

        <div className="container-custom relative z-10">
          <SectionHeader
            title="Osnivač"
            subtitle="Upoznajte čoveka koji stoji iza Developer.Lab platforme"
          />

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Image / Avatar */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-30 group-hover:opacity-50 transition duration-300 blur"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  {/* Placeholder za sliku - Milan može kasnije dodati pravu */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                        <span className="text-5xl font-bold text-white">MV</span>
                      </div>
                      <p className="text-white/50 text-sm px-8">Ovde će biti fotografija Milana Vulića</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 animate-pulse-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy">Osnivač</p>
                      <p className="text-xs text-gray-500">Developer.Lab</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  Milan Vulić
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-6">
                  Osnivač & Glavni Instruktor
                </p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Dobrodošli na Developer.Lab! Ja sam Milan, entuzijasta u oblasti Data Science-a i mašinskog učenja sa strašću ka edukaciji.
                  </p>
                  <p>
                    Nakon godina rada u tech industriji, shvatio sam koliko je teško ljudima da pronađu kvalitetne, praktične resurse za učenje Data Science-a. Zato sam kreirao Developer.Lab - platformu koja spaja teoriju sa praksom.
                  </p>
                  <p>
                    Moja misija je jednostavna: pomoći što više ljudi da ovladaju Data Science veštinama i pokrenu svoje karijere kroz praktične projekte i mentorsku podršku.
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex gap-4">
                  <a href="#" className="w-12 h-12 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-cyan-100 hover:bg-cyan-600 text-cyan-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-100 hover:bg-slate-700 text-slate-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="curved" height="h-32" />

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-100/50 via-white to-cyan-100/50 relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #2563EB 1px, transparent 1px), linear-gradient(to bottom, #2563EB 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10">
          <SectionHeader
            title="Naša misija i vizija"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div className="card group">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Misija</h3>
              <p className="text-gray-700 leading-relaxed">
                Osnaživanje pojedinaca kroz praktično Data Science obrazovanje. Pružamo pristupačne, kvalitetne kurseve koji kombinuju teoriju sa realnim projektima i kontinuiranom mentor podrškom.
              </p>
            </div>

            {/* Vision Card */}
            <div className="card group">
              <div className="w-16 h-16 bg-gradient-card rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Vizija</h3>
              <p className="text-gray-700 leading-relaxed">
                Biti vodeća regionalna platforma za Data Science edukaciju, gde svako ko želi da uči ima pristup vrhunskom obrazovanju i podršci na svom putu ka uspešnoj tech karijeri.
              </p>
            </div>

            {/* Impact Card */}
            <div className="card group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Uticaj</h3>
              <p className="text-gray-700 leading-relaxed">
                Transformišemo živote kreiranjem pristupačnih mogućnosti za sve koji žele da uče. Svaki polaznik koji uspe je dokaz naše posvećenosti kvalitetnom obrazovanju i podršci.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="double" height="h-20" />

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100/50 via-cyan-100/40 to-blue-100/50 relative overflow-hidden">
        <FloatingShapes variant="testimonials" />

        <div className="container-custom relative z-10">
          <SectionHeader
            title="Naše vrednosti"
            subtitle="Principi koji nas vode u svakodnevnom radu"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Value 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Kvalitet</h3>
              <p className="text-gray-600 leading-relaxed">
                Pružamo samo proveren, aktualan sadržaj sa najboljim praksama iz industrije.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Zajednica</h3>
              <p className="text-gray-600 leading-relaxed">
                Gradimo podržavajuću zajednicu gde svi uče zajedno i rastu kroz kolaboraciju.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Praksa</h3>
              <p className="text-gray-600 leading-relaxed">
                Fokus na hands-on projektima koji pripremaju polaznike za realne poslovne izazove.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="smooth" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Spreman za promenu karijere?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Pridruži se stotinama polaznika koji su već pokrenuli svoje Data Science karijere sa Developer.Lab
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#kursevi" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              Pogledaj kurseve
            </a>
            <a href="/#kontakt" className="btn-outline text-lg px-8 py-4">
              Kontaktiraj nas
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
