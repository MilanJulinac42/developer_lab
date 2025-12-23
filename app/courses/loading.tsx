import Navigation from '@/components/layout/Navigation';

export default function Loading() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Skeleton */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-12 bg-white/10 rounded-lg w-3/4 mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 bg-white/10 rounded-lg w-2/3 mx-auto mb-8 animate-pulse"></div>
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 animate-pulse">
                  <div className="h-8 bg-white/20 rounded w-16 mx-auto mb-2"></div>
                  <div className="h-4 bg-white/20 rounded w-20 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid Skeleton */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="h-10 bg-gray-200 rounded-lg w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-96 mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                {/* Icon skeleton */}
                <div className="w-14 h-14 bg-gray-200 rounded-xl mb-6 animate-pulse"></div>

                {/* Title skeleton */}
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>

                {/* Meta skeleton */}
                <div className="flex gap-3 mb-4">
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                </div>

                {/* Description skeleton */}
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                </div>

                {/* Features skeleton */}
                <div className="space-y-2 mb-6">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="flex gap-2">
                      <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                    </div>
                  ))}
                </div>

                {/* Price skeleton */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="h-10 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
                </div>

                {/* Button skeleton */}
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
