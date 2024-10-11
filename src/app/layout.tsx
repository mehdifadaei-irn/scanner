import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/custom/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const VazirBold = localFont({
  src: "./fonts/BYekan.woff",
  variable: "--font-yekan-mono",
  weight: "500",
});
const VazirThin = localFont({
  src: "./fonts/Vazir-Thin.woff",
  variable: "--font-geist-mono",
  weight: "100",
});
const VazirMedium = localFont({
  src: "./fonts/Vazir-Medium.woff",
  variable: "--font-geist-mono",
  weight: "400",
});
const Vazir = localFont({
  src: "./fonts/Vazir.woff",
  variable: "--font-geist-mono",
  weight: "300",
});
const geistLight = localFont({
  src: "./fonts/Vazir-Light.woff",
  variable: "--font-geist-mono",
  weight: "200",
});

export const metadata: Metadata = {
  title: "Website Scanner - Pentest - tool",
  description: "Website Scanner - Pentest - tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${VazirBold.variable} bg-[#F9FAFB] antialiased min-h-screen`}
      >
        <Providers>
          <div className="relative w-full min-h-screen">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
