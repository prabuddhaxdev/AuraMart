function UnauthPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-6">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          401
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Unauthorized Access
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          You don’t have permission to view this page. Please log in or contact
          an administrator if you think this is a mistake.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="/auth/login"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Go to Login
          </a>
          <a
            href="/"
            className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default UnauthPage;
