import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amaya & Supun | Wedding Invitation | Galle Face Hotel, Colombo",
  description:
    "We cordially invite you to celebrate the traditional Sri Lankan Poruwa ceremony and wedding reception of Amaya & Supun at the Galle Face Hotel, Colombo.",
  openGraph: {
    title: "Amaya & Supun | Wedding Invitation",
    description: "Saturday, 20th August 2026 · Galle Face Hotel, Colombo",
    images: ["/images/sri-lankan/couple_mandala_square.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#581C24",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Suppress disconnected Chrome extension / React DevTools bridge errors */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                function isExtensionError(err, msg) {
                  var str = (msg || '') + ' ' + ((err && err.stack) || '') + ' ' + ((err && err.message) || '');
                  return str.indexOf('chrome-extension://') !== -1 ||
                         str.indexOf('react_devtools_backend') !== -1 ||
                         str.indexOf('Bridge that has been shut down') !== -1 ||
                         str.indexOf('Cannot send a message through a Bridge') !== -1;
                }
                window.addEventListener('error', function(e) {
                  if (isExtensionError(e.error, e.message)) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    return true;
                  }
                }, true);
                window.addEventListener('unhandledrejection', function(e) {
                  var reason = e.reason;
                  if (isExtensionError(reason, reason && reason.message)) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    return true;
                  }
                }, true);
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-[#581C24] selection:text-white">
        {children}
      </body>
    </html>
  );
}
