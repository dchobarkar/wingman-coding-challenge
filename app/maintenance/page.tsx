export default function Maintenance() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Under Maintenance
          </h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            We&apos;re currently performing scheduled maintenance to improve
            your experience. We&apos;ll be back shortly!
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm max-w-md mx-auto">
            <h3 className="font-semibold text-gray-900 mb-2">
              Expected Duration
            </h3>
            <p className="text-gray-600">
              We expect to be back online within 30 minutes.
            </p>
          </div>

          <div className="text-sm text-gray-400">
            <p>
              Thank you for your patience. Follow us on social media for
              updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
