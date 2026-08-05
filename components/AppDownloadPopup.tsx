"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppDownloadQR, { APK_URL } from "./AppDownloadQR";

const STORAGE_KEY = "sgmssic-app-popup-dismissed";

export default function AppDownloadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // ignore storage errors
    }

    const timer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const steps = [
    "Scan the QR code or tap Download APK to open Google Drive.",
    "Tap Download on Google Drive to save the APK.",
    "Allow install from unknown sources if Android asks.",
    "Open the APK and install — then use attendance & fees.",
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="app-download-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close download popup"
        onClick={close}
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="bg-primary-700 text-white px-5 py-4 flex items-start justify-between gap-3">
          <div>
            <h2 id="app-download-title" className="text-lg sm:text-xl font-semibold">
              Download Mobile App
            </h2>
            <p className="text-primary-100 text-sm mt-1">
              Attendance &amp; Fee Management
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            className="shrink-0 w-10 h-10 rounded-full hover:bg-white/15 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-gray-600 text-sm mb-5">
            Install the SGMSSIC Android app to mark attendance and manage fees on your phone.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <AppDownloadQR size={150} showLabel={false} className="shrink-0" />

            <div className="flex-1 w-full">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                How to install
              </h3>
              <ol className="space-y-3">
                {steps.map((step, index) => (
                  <li key={index} className="flex gap-3 text-sm text-gray-700">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 font-semibold flex items-center justify-center text-xs">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-3 rounded-lg transition-colors text-center"
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
            <Link
              href="/mobile-app"
              onClick={close}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
            >
              View steps &amp; features
            </Link>
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">
            Hosted on Google Drive · Android only
          </p>
        </div>
      </div>
    </div>
  );
}
