import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vivek Joshi — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React.js, Next.js, Node.js, TypeScript, and building performant, accessible web systems. New Delhi.",
  keywords: [
    "Vivek Joshi",
    "Full-Stack Developer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "New Delhi",
  ],
  authors: [{ name: "Vivek Joshi" }],
  openGraph: {
    title: "Vivek Joshi — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React.js, Next.js, Node.js, TypeScript, and building performant, accessible web systems. New Delhi.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh bg-canvas text-ink antialiased selection:bg-purple-500/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
