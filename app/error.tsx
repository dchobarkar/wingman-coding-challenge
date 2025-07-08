"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error({
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
    <div className="h-full bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Something went wrong!
          </h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            We&apos;re sorry, but something unexpected happened. Please try
            again or contact support if the problem persists.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Try again
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Image src="/svg/House.svg" alt="Home" width={20} height={20} />
              Go to Dashboard
            </Link>
          </div>

          <div className="text-sm text-gray-400 mt-6">
            <p>Error ID: {error.digest || "Unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
