import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "SchemanticAI - Turn Sketches into Professional Diagrams",
  description:
    "An intelligent whiteboard that uses Google Gemini AI to transform hand-drawn sketches into clean, publication-ready diagrams instantly.",
  keywords: [
    "whiteboard",
    "AI",
    "Gemini",
    "diagrams",
    "tldraw",
    "sketch to code",
    "visualization",
    "productivity",
  ],
  authors: [{ name: "SchemanticAI Team" }],
  openGraph: {
    title: "SchemanticAI - Turn Sketches into Professional Diagrams",
    description:
      "Transform rough sketches into clean diagrams with AI. The intelligent whiteboard for your workflow.",
    url: "https://chalk-ai.vercel.app",
    siteName: "SchemanticAI",
    images: [
      {
        url: "/SchemanticAI.png",
        width: 1200,
        height: 630,
        alt: "SchemanticAI Demo Canvas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SchemanticAI - Turn Sketches into Professional Diagrams",
    description:
      "Transform rough sketches into clean diagrams with AI. The intelligent whiteboard for your workflow.",
    images: ["/SchemanticAI.png"],
  },
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
