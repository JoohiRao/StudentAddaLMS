import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Urbanist } from 'next/font/google';

export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400','500','600','700'], // or ['400', '500', '600', '700'] as needed
  variable: '--font-urbanist',
});

// const jakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
//   variable: "--font-jakarta", // optional for CSS variable use
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

