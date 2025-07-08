"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Critical Error
              </h1>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                We&apos;re experiencing technical difficulties. Please refresh
                the page or try again later.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Try again
              </button>

              <div className="text-sm text-gray-400 mt-6">
                <p>Error ID: {error.digest || "Unknown"}</p>
                <p className="mt-2">
                  If this problem persists, please contact support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
