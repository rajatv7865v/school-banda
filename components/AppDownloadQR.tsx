"use client";

import { useEffect, useState } from "react";

/** Google Drive link (APK is too large to host on the site) */
export const APK_URL =
  "https://drive.google.com/file/d/1ej-X2VV8A-VOEPPpL2QLoUCsJh2bog_p/view";

type AppDownloadQRProps = {
  size?: number;
  className?: string;
  showLabel?: boolean;
};

export function getApkUrl() {
  return APK_URL;
}

export default function AppDownloadQR({
  size = 140,
  className = "",
  showLabel = true,
}: AppDownloadQRProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const qrSrc = ready
    ? `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(APK_URL)}`
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
            alt="QR code to download SGMSSIC mobile app from Google Drive"
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
