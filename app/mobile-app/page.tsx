"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppDownloadQR, { APK_URL } from "@/components/AppDownloadQR";

export default function MobileAppPage() {
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState("/mobile-app");

  useEffect(() => {
    setPageUrl(`${window.location.origin}/mobile-app`);
  }, []);

  const features = [
    {
      title: "Attendance Management",
      description:
        "Mark and track student attendance easily from your phone. View daily, weekly, and monthly attendance records anytime.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Fee Management",
      description:
        "Check fee status, dues, and payment history in one place. Stay updated on school fee payments without visiting the office.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Quick Access Anytime",
      description:
        "Open the app on Android anytime — at home or school — for fast access to attendance and fee information.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Official School App",
      description:
        "SGMSSIC official Android app for students, parents, and staff — designed for our school community.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      title: "Open this page or scan the QR",
      detail:
        "Open /mobile-app on your phone, or scan the QR code from another device.",
    },
    {
      title: "Open Google Drive & download",
      detail:
        "Tap “Download from Google Drive”. On Drive, tap the Download icon to save the APK to your phone.",
    },
    {
      title: "Allow installation",
      detail:
        "If Android shows a warning, allow install from this source / unknown apps (Chrome or Files).",
    },
    {
      title: "Install & open the app",
      detail:
        "Open the downloaded APK, tap Install, then Open. Use the app for attendance and fee management.",
    },
  ];

  const whoFor = [
    { role: "Students", text: "View attendance and stay informed about fees." },
    { role: "Parents", text: "Track your child’s attendance and fee status easily." },
    { role: "Staff", text: "Manage attendance and fee-related tasks on the go." },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link to share:", pageUrl);
    }
  };

  const shareMessage = `Dear Students / Parents,

Please download the official SGMSSIC mobile app for Attendance and Fee Management.

Open this page:
${pageUrl}

Or download from Google Drive:
${APK_URL}

Steps:
1) Open Google Drive link
2) Tap Download
3) Allow install if asked
4) Open the app

Thank you,
Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College`;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#fff_0%,_transparent_50%)]" />
        <div className="container mx-auto px-4 py-14 sm:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary-200 text-sm font-medium uppercase tracking-wider mb-3">
              SGMSSIC Official Android App
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
              Mobile App for Attendance &amp; Fee Management
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Download the school app from Google Drive, scan the QR code, and follow the steps below.
              Share this page with students, parents, and staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={APK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 hover:bg-primary-50 font-semibold px-6 py-3.5 rounded-lg transition-colors w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download from Google Drive
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:bg-white/10 font-semibold px-6 py-3.5 rounded-lg transition-colors w-full sm:w-auto"
              >
                {copied ? "Link copied!" : "Copy link to share"}
              </button>
            </div>
            <p className="text-sm text-primary-200 mt-4">
              Hosted on Google Drive · Android phones only
            </p>
          </div>
        </div>
      </section>

      {/* Download + QR */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                Scan QR to Download
              </h2>
              <div className="w-20 h-1 bg-primary-600 mb-4" />
              <p className="text-gray-600 mb-4">
                Point your Android phone camera at this QR code. It opens the Google Drive
                link — tap <strong>Download</strong> to get the APK.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Works best when this website is opened on another device (laptop / another phone)</li>
                <li>• Or tap the Download button directly on your Android phone</li>
              </ul>
              <a
                href={APK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:underline"
              >
                Open Google Drive link →
              </a>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <AppDownloadQR size={180} showLabel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                App Features
              </h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need for school attendance and fees — in one app.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                Installation Steps
              </h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto mb-4" />
              <p className="text-gray-600">
                Follow these steps to install the app on an Android phone.
              </p>
            </div>
            <ol className="space-y-5">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-gray-50/80"
                >
                  <span className="shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-14 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                Who Should Install?
              </h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto mb-4" />
              <p className="text-gray-600">
                Send this page to students, parents, and school staff.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {whoFor.map((item) => (
                <div
                  key={item.role}
                  className="bg-white rounded-xl p-6 text-center border border-primary-100"
                >
                  <h3 className="font-bold text-primary-800 text-lg mb-2">{item.role}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Share message box */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-2xl bg-gray-900 text-white p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Message you can send to students &amp; parents
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Copy and share on WhatsApp / SMS:
            </p>
            <div className="bg-gray-800 rounded-xl p-4 text-sm text-gray-100 leading-relaxed mb-5 whitespace-pre-line">
              {shareMessage}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(shareMessage);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  } catch {
                    window.prompt("Copy this message:", shareMessage);
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                {copied ? "Copied!" : "Copy WhatsApp message"}
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:bg-gray-800 font-medium px-5 py-3 rounded-lg transition-colors"
              >
                Need help? Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
