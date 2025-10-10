export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white text-gray-900 dark:from-gray-900 dark:to-black dark:text-white text-center px-4 transition-colors duration-300">
      <h1 className="text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        404
      </h1>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <a
        href="/"
        className="mt-8 inline-block rounded-full bg-pink-500 px-6 py-3 text-lg font-medium text-white shadow-md transition hover:bg-pink-600 dark:hover:bg-pink-400"
      >
        Go Home
      </a>
    </div>
  );
}
