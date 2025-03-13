import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'sonner';
import { dark } from '@clerk/themes';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MockMate",
  description: "AI-Interviewer",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black overflow-hidden`}
        >
          {/* Global Gradient Background */}
          <div className="absolute left-[10%] top-[20%] w-[250px] h-[250px] bg-gradient-to-b from-white to-blue-500 rounded-full blur-[150px]"></div>
          <div className="absolute right-[10%] top-[30%] w-[250px] h-[250px] bg-gradient-to-b from-white to-purple-500 rounded-full blur-[150px]"></div>

          {/* Toast Notifications */}
          <Toaster />

          {/* Content */}
          <div className="relative z-10">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}