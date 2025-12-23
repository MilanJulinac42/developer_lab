import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import WaveDivider from '@/components/decorative/WaveDivider';
import FloatingShapes from '@/components/decorative/FloatingShapes';
import CourseCard from '@/components/courses/CourseCard';
import { courses } from '@/lib/data/courses';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Svi kursevi',
  description: 'Pregledaj sve naše Data Science kurseve - od Python osnova do naprednog Deep Learning-a. Praktični kursevi sa sertifikatima i mentor podrškom.',
  path: '/courses',
});

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <FloatingShapes variant="hero" />

        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
              Pronađi svoj <span className="text-accent">savršen kurs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Od Python osnova do naprednog AI-a - svi kursevi su dizajnirani da te pripreme za uspešnu Data Science karijeru
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-accent mb-1">6</div>
                <div className="text-sm text-gray-300">Kurseva</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-gray-300">Polaznika</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-gray-300">Projekata</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="default" />

      {/* Courses Grid Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <FloatingShapes variant="features" />

        <div className="container-custom relative z-10">
          <SectionHeader
            title="Svi kursevi"
            subtitle="Izaberi kurs koji odgovara tvom nivou znanja i ciljevima"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider variant="curved" height="h-32" />

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-100/50 via-white to-cyan-100/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(to right, #2563EB 1px, transparent 1px), linear-gradient(to bottom, #2563EB 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10">
          <SectionHeader
            title="Zašto naši kursevi?"
            subtitle="Dobijamo više od tradicionalnih online kurseva"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card group">
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Aktualan sadržaj</h3>
              <p className="text-gray-600 leading-relaxed">
                Kursevi se redovno ažuriraju sa najnovijim tehnologijama i best practices iz industrije.
              </p>
            </div>

            <div className="card group">
              <div className="w-14 h-14 bg-gradient-card rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Mentor podrška 24/7</h3>
              <p className="text-gray-600 leading-relaxed">
                Direktan pristup mentorima koji su tu da odgovore na sva tvoja pitanja i pomognu ti.
              </p>
            </div>

            <div className="card group">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Sertifikati</h3>
              <p className="text-gray-600 leading-relaxed">
                Dobijaj verifikovane sertifikate nakon završetka svakog kursa za svoj portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="double" height="h-20" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100/50 via-cyan-100/40 to-blue-100/50 relative overflow-hidden">
        <FloatingShapes variant="testimonials" />

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Nisi siguran koji kurs ti odgovara?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Kontaktiraj nas i pomoći ćemo ti da odabereš idealan kurs za tvoje ciljeve i trenutno znanje
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about" className="btn-primary text-lg px-8 py-4">
              Kontaktiraj nas
            </a>
            <a href="/#kursevi" className="btn-secondary text-lg px-8 py-4">
              Pogledaj FAQ
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
