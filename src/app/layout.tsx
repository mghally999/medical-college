import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";

const dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "CS Medical College | UK Medical Education",
  description:
    "CS Medical College Ltd, UK offers exceptional healthcare education with world-class facilities and experienced faculty.",
  icons: {
    icon: "/images/logo/logo.png", // Directly using your logo.png
    shortcut: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
  openGraph: {
    title: "CS Medical College | UK Medical Education",
    description: "Exceptional healthcare education with world-class facilities",
    url: "https://www.csmedicalcollege.co.uk",
    siteName: "CS Medical College",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_UK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CS Medical College | UK Medical Education",
    description: "Exceptional healthcare education with world-class facilities",
    images: ["/images/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/images/logo/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo/logo.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta
          name="theme-color"
          content="#2F73F2"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1E3A8A"
          media="(prefers-color-scheme: dark)"
        />

        {/* Viewport meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${dmsans.className} overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <AuthDialogProvider>
          <SessionProviderComp session={session}>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
              storageKey="csmedical-theme"
            >
              <Aoscompo>
                {/* <Header /> */}
                <NextTopLoader color="#2F73F2" height={3} showSpinner={false} />
                {children}
                <Footer />
              </Aoscompo>
              <ScrollToTop />
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}
