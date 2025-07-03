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
  title: "VeoFlow Prompts - AI-Powered Video Generation Prompts",
  description: "Generate perfect video prompts with AI assistance for Google Veo 3 and Flow. Create stunning videos with optimized prompts for Google's latest video generation models.",
  keywords: ["Google Veo 3", "Google Flow", "AI video generation", "video prompts", "AI prompts", "video creation", "prompt engineering", "text-to-video"],
  authors: [{ name: "VeoFlow Prompts" }],
  creator: "VeoFlow Prompts",
  publisher: "VeoFlow Prompts",
  openGraph: {
    title: "VeoFlow Prompts - AI-Powered Video Generation Prompts",
    description: "Generate perfect video prompts with AI assistance for Google Veo 3 and Flow. Create stunning videos with optimized prompts.",
    url: "https://veoflow-prompts.com",
    siteName: "VeoFlow Prompts",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeoFlow Prompts - AI-Powered Video Generation Prompts",
    description: "Generate perfect video prompts with AI assistance for Google Veo 3 and Flow.",
    creator: "@veoflowprompts",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
