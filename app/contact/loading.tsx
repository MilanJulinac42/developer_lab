import Navigation from '@/components/layout/Navigation';

export default function Loading() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Skeleton */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="h-12 bg-white/10 rounded-lg w-2/3 mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 bg-white/10 rounded-lg w-3/4 mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact Form Skeleton */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact info skeleton */}
            <div className="space-y-6">
              <div className="h-10 bg-gray-200 rounded w-64 mb-8 animate-pulse"></div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form skeleton */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse"></div>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i}>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
                    <div className={`h-${i === 5 ? '32' : '12'} bg-gray-200 rounded-lg animate-pulse`}></div>
                  </div>
                ))}
                <div className="h-14 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
