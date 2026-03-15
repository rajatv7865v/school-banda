import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "More - Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College",
  description: "Privacy Policy, Terms and Conditions, and other links.",
};

export default function More() {
  return (
    <div className="pb-24 lg:pb-0">
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              More
            </h1>
            <p className="text-gray-600 mb-8">
              Legal and other information
            </p>
            <div className="space-y-4">
              <Link
                href="/privacy-policy"
                className="flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <div className="text-left min-w-0">
                  <span className="block font-semibold text-gray-800">Privacy Policy</span>
                  <span className="block text-sm text-gray-500 mt-0.5">How we collect and use your information</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/terms"
                className="flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <div className="text-left min-w-0">
                  <span className="block font-semibold text-gray-800">Terms and Conditions</span>
                  <span className="block text-sm text-gray-500 mt-0.5">Rules for using our website</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
