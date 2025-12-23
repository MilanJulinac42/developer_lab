import Navigation from '@/components/layout/Navigation';

export default function Loading() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Skeleton */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side skeleton */}
            <div className="text-white">
              <div className="h-6 bg-white/10 rounded w-32 mb-4 animate-pulse"></div>
              <div className="h-12 bg-white/10 rounded w-full mb-4 animate-pulse"></div>
              <div className="h-6 bg-white/10 rounded w-3/4 mb-8 animate-pulse"></div>

              <div className="flex flex-wrap gap-4 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-white/10 rounded animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded w-20 animate-pulse"></div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="h-12 bg-white/10 rounded-lg w-40 animate-pulse"></div>
                <div className="h-12 bg-white/10 rounded-lg w-32 animate-pulse"></div>
              </div>
            </div>

            {/* Right side - Price card skeleton */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                  </div>
                ))}
              </div>
              <div className="h-16 bg-gray-200 rounded-lg mt-8 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Overview section */}
            <div className="mb-16">
              <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* What you'll learn section */}
            <div className="mb-16">
              <div className="h-8 bg-gray-200 rounded w-56 mb-6 animate-pulse"></div>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum section */}
            <div className="mb-16">
              <div className="h-8 bg-gray-200 rounded w-40 mb-6 animate-pulse"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded-lg animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
