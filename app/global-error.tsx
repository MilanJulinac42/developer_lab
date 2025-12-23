'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="sr">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kritična greška
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Desila se neočekivana greška. Molimo te da osvežiš stranicu.
            </p>

            <button
              onClick={reset}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Osveži stranicu
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
