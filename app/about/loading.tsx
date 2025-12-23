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

      {/* Content Skeleton */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Founder section */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
              <div className="w-48 h-48 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="flex-1 space-y-4">
                <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>

            {/* Cards section */}
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-xl mb-6 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
