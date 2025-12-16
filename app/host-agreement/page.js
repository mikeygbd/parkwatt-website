export default function HostAgreement() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ParkWatt Host Agreement
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: December 16, 2024
        </p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            This Host Agreement ("Agreement") is entered into between you
            ("Host") and ParkWatt, Inc. ("ParkWatt", "we", "us", or "our") and
            governs your use of the ParkWatt platform to list and rent your
            electric vehicle (EV) charging equipment.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            1. Host Responsibilities
          </h2>
          <p className="mb-4">As a Host, you agree to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Maintain your charging equipment in safe, working condition at all
              times
            </li>
            <li>
              Provide accurate descriptions of your charger type, location, and
              availability
            </li>
            <li>
              Ensure the charging location is accessible during listed
              availability hours
            </li>
            <li>
              Comply with all local, state, and federal laws regarding EV
              charging and electrical equipment
            </li>
            <li>Respond to Driver inquiries and issues in a timely manner</li>
            <li>
              Provide clear instructions for accessing the charging equipment
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            2. Pricing and Payments
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              You set your own charging rates ($/kWh) and may adjust them at any
              time
            </li>
            <li>
              ParkWatt charges a transaction fee of $1.49 per booking to cover
              platform costs
            </li>
            <li>
              Stripe processing fees (2.9% + $0.30 for cards, 0.8% for ACH) are
              deducted from payments
            </li>
            <li>
              Payouts are processed automatically within 2-7 business days after
              a completed charging session
            </li>
            <li>
              You are responsible for reporting earnings to tax authorities
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            3. Cancellation Policy
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Drivers may cancel bookings according to the cancellation policy
              you select
            </li>
            <li>
              You may cancel bookings only in emergency situations (equipment
              failure, safety concerns)
            </li>
            <li>
              Frequent cancellations may result in listing suspension or account
              termination
            </li>
            <li>
              You may deactivate your listing at any time, but existing
              confirmed bookings must be honored
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            4. Liability and Insurance
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              ParkWatt is a marketplace platform and is not responsible for
              damages, injuries, or losses that occur during charging sessions
            </li>
            <li>
              You maintain full responsibility for your property and equipment
            </li>
            <li>
              You agree to maintain adequate homeowners or commercial property
              insurance
            </li>
            <li>
              You release ParkWatt from any liability related to Driver use of
              your equipment
            </li>
            <li>
              Drivers are responsible for any damage they cause to your property
              or equipment
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            5. Indemnification
          </h2>
          <p className="mb-6">
            You agree to indemnify, defend, and hold harmless ParkWatt, its
            officers, directors, employees, and agents from and against any
            claims, liabilities, damages, losses, and expenses (including
            reasonable attorney fees) arising out of or in any way connected
            with:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Your breach of this Agreement</li>
            <li>Your violation of any law or regulation</li>
            <li>
              Your listing content or the condition of your charging equipment
            </li>
            <li>
              Any injury, loss, or damage to persons or property occurring at
              your listing
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            6. Listing Removal and Account Termination
          </h2>
          <p className="mb-4">ParkWatt reserves the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Remove any listing that violates this Agreement or our Terms of
              Service
            </li>
            <li>
              Suspend or terminate Host accounts for policy violations, safety
              concerns, or fraudulent activity
            </li>
            <li>
              Withhold payments if suspected fraud or Terms violations occur
            </li>
            <li>Modify platform fees with 30 days advance notice</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            7. Intellectual Property
          </h2>
          <p className="mb-6">
            By uploading photos and descriptions of your charger, you grant
            ParkWatt a non-exclusive, worldwide, royalty-free license to use,
            display, and distribute this content on the platform and in
            promotional materials.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            8. Data and Privacy
          </h2>
          <p className="mb-6">
            Your use of the platform is subject to our{" "}
            <a
              href="/privacy"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Privacy Policy
            </a>
            . We collect and use your data to facilitate bookings, process
            payments, and improve our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            9. Modifications
          </h2>
          <p className="mb-6">
            ParkWatt may modify this Agreement at any time. We will notify you
            of material changes via email or in-app notification. Continued use
            of the platform after changes constitutes acceptance of the modified
            Agreement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            10. Governing Law
          </h2>
          <p className="mb-6">
            This Agreement is governed by the laws of the State of Colorado,
            without regard to its conflict of law provisions. Any disputes shall
            be resolved in the state or federal courts located in Denver,
            Colorado.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            11. Contact Information
          </h2>
          <p className="mb-6">
            If you have questions about this Host Agreement, please contact us
            at:
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@parkwatt.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              support@parkwatt.com
            </a>
          </p>
          <p className="mb-6">
            <strong>Website:</strong>{" "}
            <a
              href="https://www.parkwatt.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              www.parkwatt.com
            </a>
          </p>

          <div className="mt-12 pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-600">
              By checking the agreement box in the ParkWatt app, you acknowledge
              that you have read, understood, and agree to be bound by this Host
              Agreement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
