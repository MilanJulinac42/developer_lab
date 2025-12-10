export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold gradient-text">DEVELOPER.LAB</span>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#kursevi" className="text-navy hover:text-primary transition-colors font-medium">Kursevi</a>
              <a href="#o-nama" className="text-navy hover:text-primary transition-colors font-medium">O nama</a>
              <a href="#cene" className="text-navy hover:text-primary transition-colors font-medium">Cene</a>
              <a href="#kontakt" className="text-navy hover:text-primary transition-colors font-medium">Kontakt</a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block text-primary hover:text-primary-dark font-semibold transition-colors">
                Prijavi se
              </button>
              <button className="btn-primary text-sm sm:text-base">
                Počni besplatno
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Subtle dots pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
                Postani Data Scientist za <span className="text-accent">12 nedelja</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Praktični kursevi sa realnim projektima, mentor podrškom 24/7 i garantovanom pripremom za posao u tech industriji.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="btn-primary bg-white text-primary hover:bg-gray-100">
                  Pogledaj kurseve
                </button>
                <button className="btn-outline flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Pogledaj demo
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                      {i === 4 ? '+' : String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold">500+ polaznika</p>
                  <p className="text-gray-300">⭐ 4.9/5 ocena</p>
                </div>
              </div>
            </div>

            {/* Right - Video Demo Placeholder */}
            <div className="hidden md:block">
              <div className="relative group">
                {/* Video placeholder with play button */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-2 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                  {/* Video screen */}
                  <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
                    {/* Simulated code editor content */}
                    <div className="p-6 font-mono text-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-gray-400 text-xs">demo.py</span>
                      </div>
                      <div className="space-y-2">
                        <div className="text-purple-400">import <span className="text-blue-400">pandas</span> as pd</div>
                        <div className="text-purple-400">import <span className="text-blue-400">numpy</span> as np</div>
                        <div className="text-gray-500"># Load dataset</div>
                        <div className="text-cyan-400">df = pd.read_csv(<span className="text-green-400">'data.csv'</span>)</div>
                        <div className="text-cyan-400">model.fit(X, y)</div>
                      </div>
                    </div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                      <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 hover:bg-white transition-all duration-300 shadow-2xl">
                        <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </button>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      2:34
                    </div>
                  </div>

                  {/* Video title */}
                  <div className="p-4">
                    <p className="text-white font-semibold mb-1">Uvod u Data Science</p>
                    <p className="text-gray-300 text-sm">Pogledaj besplatnu demo lekciju</p>
                  </div>
                </div>

                {/* Floating stats badges */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-pulse-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy">95%</p>
                      <p className="text-xs text-gray-500">Completion rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Zašto Developer.Lab?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
              <h3 className="text-xl font-bold text-navy mb-3">Praktični projekti</h3>
              <p className="text-gray-600 leading-relaxed">
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
              <h3 className="text-xl font-bold text-navy mb-3">Mentor podrška</h3>
              <p className="text-gray-600 leading-relaxed">
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
              <h3 className="text-xl font-bold text-navy mb-3">Brzo do posla</h3>
              <p className="text-gray-600 leading-relaxed">
                Naši polaznici u proseku nalaze posao za 3 meseca nakon završetka kursa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
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
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-300 blur"></div>
              <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
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

            {/* Course 2 - Machine Learning (Popular) */}
            <div className="group relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                  ⭐ NAJPOPULARNIJI
                </span>
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-300 blur"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 transform scale-105">
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

            {/* Course 3 - Deep Learning */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-300 blur"></div>
              <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
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

      {/* Learning Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
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

      {/* Footer */}
      <footer className="bg-navy text-gray-300 py-12">
        <div className="container-custom">
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
                Edukativna platforma za buduće Data Scientists profesionalce.
              </p>
            </div>

            {/* Kursevi */}
            <div>
              <h3 className="text-white font-bold mb-4">Kursevi</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Python za Data Science</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Deep Learning & AI</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Svi kursevi</a></li>
              </ul>
            </div>

            {/* Kompanija */}
            <div>
              <h3 className="text-white font-bold mb-4">Kompanija</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">O nama</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Mentori</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Karijera</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Zakon */}
            <div>
              <h3 className="text-white font-bold mb-4">Pravno</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Uslovi korišćenja</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privatnost</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Kontakt</a></li>
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
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
