import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asta.health"),
  title: {
    default: "ASTA - Smart wards, built on the hospital you already have.",
    template: "%s · ASTA Health Tech",
  },
  description:
    "ASTA turns existing hospital wards into smart wards with device-agnostic AI - real-time vitals, intelligent alerts, and clinical visibility without new monitors.",
  openGraph: {
    title: "ASTA Health Tech",
    description:
      "Device-agnostic AI for hospital wards. Real-time vitals and intelligent alerts on your existing infrastructure.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const themeScript = `
  try {
    var stored = localStorage.getItem('asta-theme');
    var theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  } catch(e) {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add('dark');
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
