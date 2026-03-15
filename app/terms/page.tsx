import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College",
  description: "Terms and conditions for using the official website of Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College.",
};

export default function TermsAndConditions() {
  return (
    <div className="pb-24 lg:pb-0">
      {/* Hero Section - shorter on mobile */}
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
              Terms and Conditions
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 line-clamp-2">
              Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College
            </p>
          </div>
        </div>
      </section>

      {/* Content - mobile-friendly */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-gray-700">
            <p className="text-sm text-gray-500 mb-6 md:mb-8">
              Last updated: March 2025
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              By accessing and using the official website of Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              2. Use of Website
            </h2>
            <p className="mb-4 text-base sm:text-lg">
              You agree to use this website only for lawful purposes and in a way that does not:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 mb-6 space-y-2 text-base sm:text-lg">
              <li>Infringe the rights of others or restrict their use of the website</li>
              <li>Transmit any harmful, offensive, or illegal content</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Use the website for any commercial purpose without our prior written consent</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              3. Intellectual Property
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              All content on this website, including but not limited to text, images, logos, graphics, and design elements, is the property of Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              4. Accuracy of Information
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              We strive to ensure that the information on this website is accurate and up to date. However, we do not warrant that all information is complete, current, or error-free. The institution reserves the right to correct any errors or omissions and to update content at any time without prior notice.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              5. Links to Third-Party Sites
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              Our website may contain links to external websites. We are not responsible for the content, privacy practices, or availability of these third-party sites. The inclusion of any link does not imply endorsement by the institution.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              6. Admission and Academic Policies
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              Admission to the institution is subject to our admission criteria and availability. The information provided on this website regarding courses, fees, and procedures is for general guidance. Final decisions are governed by the institution&apos;s official policies and applicable education regulations.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              7. Limitation of Liability
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              To the fullest extent permitted by law, Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use this website or any content thereon.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              8. Modifications
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              9. Governing Law
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Uttar Pradesh.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 md:mb-4">
              10. Contact
            </h2>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              For questions about these Terms and Conditions, please contact us at Sgmssic2012@gmail.com or visit our Contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
