import { notFound } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import WaveDivider from '@/components/decorative/WaveDivider';
import { getCourseBySlug, getAllCourseSlugs } from '@/lib/data/courses';
import { createCourseMetadata } from '@/lib/metadata';

export async function generateStaticParams() {
  const slugs = getAllCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    return {
      title: 'Kurs nije pronađen - Developer.Lab',
    };
  }

  return createCourseMetadata(course);
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Course Info */}
            <div className="text-white">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                <a href="/courses" className="hover:text-accent transition-colors">Kursevi</a>
                <span>/</span>
                <span className="text-white">{course.title}</span>
              </div>

              {/* Level Badge */}
              <div className="inline-block mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  course.level === 'Početni' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                  course.level === 'Srednji' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                  'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                }`}>
                  {course.level} nivo
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                {course.subtitle}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-400">({course.students} polaznika)</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary bg-accent hover:bg-accent/90 text-lg px-8 py-4">
                  Upiši se sada
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  Pitaj nas
                </button>
              </div>
            </div>

            {/* Right - Price Card */}
            <div className="relative">
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    ⭐ NAJPOPULARNIJI
                  </span>
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-white mb-2">
                    {course.price} <span className="text-2xl text-gray-300">RSD</span>
                  </div>
                  <p className="text-gray-300">Jednokratna uplata</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Doživotni pristup materijalu</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mentor podrška 24/7</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sertifikat po završetku</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Praktični projekti</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>14 dana povraćaj novca</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-accent to-blue-500 hover:from-accent/90 hover:to-blue-600 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Počni sada
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="default" />

      {/* Course Overview */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">O kursu</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {course.longDescription}
            </p>

            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-navy mb-6">Šta ćeš naučiti</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Predznanje</h3>
              <ul className="space-y-3">
                {course.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">Plan i program</h2>
            <p className="text-gray-600 text-center mb-12">Detaljni pregled svega što ćeš naučiti tokom {course.duration}</p>

            <div className="space-y-4">
              {course.curriculum.map((week, idx) => (
                <details key={idx} className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-blue-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${course.gradient} rounded-lg flex items-center justify-center text-white font-bold`}>
                        {week.week}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy">{week.title}</h3>
                        <p className="text-sm text-gray-500">{week.topics.length} tema</p>
                      </div>
                    </div>
                    <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <ul className="space-y-3">
                      {week.topics.map((topic, topicIdx) => (
                        <li key={topicIdx} className="flex items-start gap-3 text-gray-700">
                          <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">Tvoj instruktor</h2>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Instructor Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {course.instructor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Instructor Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy mb-2">{course.instructor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{course.instructor.title}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">Često postavljena pitanja</h2>
            <p className="text-gray-600 text-center mb-12">Odgovori na najčešća pitanja o kursu</p>

            <div className="space-y-4">
              {course.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-blue-50 transition-colors">
                    <h3 className="text-lg font-semibold text-navy pr-8">{faq.question}</h3>
                    <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Spreman da počneš?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Upiši se na {course.title} i započni svoju Data Science karijeru danas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-accent hover:bg-accent/90 text-lg px-8 py-4">
              Upiši se sada - {course.price} RSD
            </button>
            <a href="/courses" className="btn-outline text-lg px-8 py-4">
              Pogledaj ostale kurseve
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
