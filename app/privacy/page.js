export default function Privacy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">
            Last updated: November 17, 2024
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Introduction
            </h2>
            <p>
              ParkWatt ("we," "our," or "us") respects your privacy and is
              committed to protecting your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Information We Collect
            </h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Account information (name, email, phone number)</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Location data (to find nearby charging stations)</li>
              <li>Booking and transaction history</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Provide and improve our services</li>
              <li>Process bookings and payments</li>
              <li>Send booking confirmations and notifications</li>
              <li>Respond to customer service requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. Payment processing is handled by Stripe,
              which is PCI-DSS compliant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:support@parkwatt.com"
                className="text-green-400 hover:text-green-300"
              >
                support@parkwatt.com
              </a>
            </p>
          </section>
        </div>
        <a
          href="/"
          className="inline-block mt-12 text-green-400 hover:text-green-300"
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
