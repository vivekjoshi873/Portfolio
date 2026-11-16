import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vivek Joshi | Front-End Developer",
  description:
    "Front-End Developer specializing in React.js, Next.js, TypeScript, and building performant, accessible web experiences.",
  keywords: [
    "Vivek Joshi",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Vivek Joshi" }],
  openGraph: {
    title: "Vivek Joshi | Front-End Developer",
    description:
      "Front-End Developer specializing in React.js, Next.js, TypeScript, and building performant, accessible web experiences.",
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
      <body className="min-h-full bg-[#09090b] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
