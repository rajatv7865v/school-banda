import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College",
  description: "Privacy policy for the official website of Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College.",
};

export default function PrivacyPolicy() {
  return (
    <div className="pb-24 lg:pb-0">
      {/* Hero Section - shorter on mobile for better content visibility */}
      <section className="relative h-[32vh] min-h-[200px] sm:min-h-[240px] md:h-[40vh] md:min-h-[280px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about-us.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 drop-shadow-2xl">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 line-clamp-2">
              Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College
            </p>
          </div>
        </div>
      </section>

      {/* Content - mobile-friendly spacing and typography */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-gray-700">
            <p className="text-sm text-gray-500 mb-6 md:mb-8">
              Last updated: March 2025
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              1. Introduction
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College (&quot;we&quot;, &quot;our&quot;, or &quot;the Institution&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our official website or use our services.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4 text-base sm:text-lg">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 mb-6 space-y-2 text-base sm:text-lg">
              <li>Name, contact details, and email address when you use our contact or inquiry forms</li>
              <li>Information submitted during the admission process</li>
              <li>Any other information you choose to provide when communicating with us</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4 text-base sm:text-lg">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 mb-6 space-y-2 text-base sm:text-lg">
              <li>Respond to your inquiries and provide requested information</li>
              <li>Process admissions and related administrative tasks</li>
              <li>Send important updates about the institution, events, or academic matters</li>
              <li>Improve our website and services</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted service providers who assist us in operating our website or conducting our operations, and only to the extent necessary. We may also disclose information when required by law or to protect our rights and safety.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              5. Data Security
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              6. Your Rights
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              You have the right to access, correct, or request deletion of your personal information held by us. To exercise these rights or if you have questions about this Privacy Policy, please contact us using the details provided on our Contact page.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              7. Changes to This Policy
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              8. Contact Us
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              For any questions regarding this Privacy Policy or our data practices, please contact us at Sgmssic2012@gmail.com or visit our Contact page for more details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
