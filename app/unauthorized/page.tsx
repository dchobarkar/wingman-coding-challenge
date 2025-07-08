import Link from "next/link";
import Image from "next/image";

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">403</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Access Denied
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            You don&apos;t have permission to access this resource. Please
            contact your administrator if you believe this is an error.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Image src="/svg/House.svg" alt="Home" width={20} height={20} />
            Go to Dashboard
          </Link>

          <div className="text-sm text-gray-400">
            <button
              onClick={() => window.history.back()}
              className="hover:text-gray-600 transition-colors"
            >
              ← Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
