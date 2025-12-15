import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import { ThemeProvider } from "@/components/ThemeProvider";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Vivek Joshi | Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and modern web development. Creating elegant, performant user interfaces with thoughtful motion design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.variable}>
      <body className={`${sora.className} antialiased`}>
        <ErrorReporter />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}