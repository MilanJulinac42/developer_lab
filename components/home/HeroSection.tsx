'use client';

import Link from 'next/link';
import ParallaxBackground from '@/components/effects/ParallaxBackground';
import AnimatedCounter from '@/components/effects/AnimatedCounter';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Parallax Background Orbs */}
      <ParallaxBackground speed={0.3} className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      <ParallaxBackground speed={0.5} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Floating animated shapes with parallax */}
      <ParallaxBackground speed={0.2} className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-400/20 rounded-lg animate-float" />
      <ParallaxBackground speed={0.4} className="absolute top-40 right-20 w-16 h-16 bg-cyan-400/10 rounded-full animate-pulse-slow" />
      <ParallaxBackground speed={0.6} className="absolute bottom-32 right-40 w-12 h-12 border-2 border-cyan-400/20 rounded-full animate-wiggle" />

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
              <Link href="/courses" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Pogledaj kurseve
              </Link>
              <button className="btn-outline flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Pogledaj demo
              </button>
            </div>

            {/* Social Proof with Animated Counter */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                    {i === 4 ? '+' : String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold">
                  <AnimatedCounter end={500} suffix="+" /> polaznika
                </p>
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
                    <div className="space-y-2 text-gray-300">
                      <div><span className="text-purple-400">import</span> <span className="text-blue-400">pandas</span> <span className="text-purple-400">as</span> pd</div>
                      <div><span className="text-purple-400">import</span> <span className="text-blue-400">numpy</span> <span className="text-purple-400">as</span> np</div>
                      <div className="mt-4"><span className="text-purple-400">def</span> <span className="text-green-400">analyze_data</span>():</div>
                      <div className="ml-4">df = pd.<span className="text-green-400">read_csv</span>(<span className="text-yellow-300">'data.csv'</span>)</div>
                      <div className="ml-4"><span className="text-purple-400">return</span> df.<span className="text-green-400">describe</span>()</div>
                    </div>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Glowing effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
