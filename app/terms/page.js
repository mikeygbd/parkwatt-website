export default function Terms() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">
            Last updated: November 17, 2024
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using ParkWatt, you agree to be bound by these
              Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Description of Service
            </h2>
            <p>
              ParkWatt is a marketplace platform that connects EV drivers with
              hosts who have available charging stations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              User Responsibilities
            </h2>
            <p>As a user, you agree to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Treat other users with respect</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Payments and Fees
            </h2>
            <p>
              All payments are processed securely through Stripe. Hosts set
              their own pricing, and ParkWatt may charge a service fee on
              transactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Cancellation Policy
            </h2>
            <p>
              Cancellation policies are set by individual hosts and displayed at
              the time of booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Limitation of Liability
            </h2>
            <p>
              ParkWatt is not responsible for any damages arising from the use
              of charging stations listed on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p>Questions about these Terms? Contact us at:</p>
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
