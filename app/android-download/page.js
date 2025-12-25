export default function AndroidDownload() {
  return (
    <div className="min-h-screen bg-[#333]">
      <nav className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/ParkwattLogoSVG3.svg"
                  alt="ParkWatt"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#444] rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Download ParkWatt for Android
          </h1>

          {/* Download Button */}
          <div className="text-center mb-8">
            <a
              href="https://www.parkwatt.com/download/parkwatt.apk"
              download
              className="inline-flex items-center justify-center px-8 py-4 bg-[#26C079] text-white text-lg rounded-lg hover:bg-[#20a364] transition-colors font-semibold shadow-lg"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download APK
            </a>
          </div>

          {/* App Info */}
          <div className="text-center mb-8 text-gray-300">
            <p className="mb-2">
              <strong className="text-white">Version:</strong> 1.0.0 (Build 21)
            </p>
            <p>
              <strong className="text-white">File size:</strong> ~108 MB
            </p>
          </div>

          {/* Installation Instructions */}
          <div className="bg-[#555] rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-[#26C079]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Installation Instructions
            </h2>
            <ol className="space-y-4 text-gray-300">
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-[#26C079] text-white rounded-full flex items-center justify-center font-bold mr-3">
                  1
                </span>
                <span className="pt-1">Download the APK file</span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-[#26C079] text-white rounded-full flex items-center justify-center font-bold mr-3">
                  2
                </span>
                <span className="pt-1">
                  Open Settings → Security → Enable "Install from Unknown Sources"
                </span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-[#26C079] text-white rounded-full flex items-center justify-center font-bold mr-3">
                  3
                </span>
                <span className="pt-1">Open the downloaded APK file</span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-[#26C079] text-white rounded-full flex items-center justify-center font-bold mr-3">
                  4
                </span>
                <span className="pt-1">Tap "Install"</span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-[#26C079] text-white rounded-full flex items-center justify-center font-bold mr-3">
                  5
                </span>
                <span className="pt-1">Open ParkWatt and enjoy!</span>
              </li>
            </ol>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <h3 className="text-yellow-400 font-semibold mb-2 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Important
            </h3>
            <p className="text-gray-300 text-sm">
              Make sure your web server serves the APK with the correct MIME type. 
              You may need to add to <code className="bg-[#666] px-2 py-1 rounded text-[#26C079]">.htaccess</code> or nginx config:{" "}
              <code className="bg-[#666] px-2 py-1 rounded text-[#26C079]">
                AddType application/vnd.android.package-archive .apk
              </code>
            </p>
          </div>

          {/* Support Section */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              Need help?{" "}
              <a
                href="mailto:support@parkwatt.com"
                className="text-[#26C079] hover:underline"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-[#26C079] hover:text-[#20a364] transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
