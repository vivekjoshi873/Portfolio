import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vivek Joshi — Front-End Developer",
  description:
    "Front-End Developer specializing in React.js, Next.js, TypeScript, and building performant, accessible web systems. New Delhi.",
  keywords: [
    "Vivek Joshi",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "New Delhi",
  ],
  authors: [{ name: "Vivek Joshi" }],
  openGraph: {
    title: "Vivek Joshi — Front-End Developer",
    description:
      "Front-End Developer specializing in React.js, Next.js, TypeScript, and building performant, accessible web systems. New Delhi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <body className="min-h-dvh bg-canvas text-ink antialiased selection:bg-purple-500/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
