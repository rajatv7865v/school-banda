"use client";

import { useEffect, useState } from "react";

export const APK_URL = "/SGMSSIC-app.apk";

type AppDownloadQRProps = {
  size?: number;
  className?: string;
  showLabel?: boolean;
};

export function getApkUrl() {
  if (typeof window !== "undefined") {
    return `${window.location.origin}${APK_URL}`;
  }
  return APK_URL;
}

export default function AppDownloadQR({
  size = 140,
  className = "",
  showLabel = true,
}: AppDownloadQRProps) {
  const [apkUrl, setApkUrl] = useState<string | null>(null);

  useEffect(() => {
    setApkUrl(getApkUrl());
  }, []);

  const qrSrc = apkUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(apkUrl)}`
    : null;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className="bg-white p-2 rounded-lg inline-flex items-center justify-center"
        style={{ width: size + 16, height: size + 16 }}
      >
        {qrSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={qrSrc}
            alt="QR code to download SGMSSIC mobile app"
            width={size}
            height={size}
            className="block"
          />
        ) : (
          <div className="bg-gray-100 animate-pulse rounded" style={{ width: size, height: size }} />
        )}
      </div>
      {showLabel && (
        <p className="text-xs text-gray-400 mt-2 text-center">
          Scan to download app
        </p>
      )}
    </div>
  );
}
