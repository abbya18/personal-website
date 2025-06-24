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
  title: "Abby Arce - Personal Portfolio",
  description: "Hi! I'm Abby Arce, a Software Engineering student at The University of Texas at Dallas. Software Engineer Intern at Fidelity Investments, Technology Officer at SHPE UTD. Passionate about building tools that make life easier.",
  keywords: ["Abby Arce", "Software Engineer", "Fidelity Investments", "UTD", "Software Engineering", "Student", "Developer"],
  authors: [{ name: "Abby Arce" }],
  creator: "Abby Arce",
  icons: {
    icon: [
      { url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐸</text></svg>" }
    ]
  },
  openGraph: {
    title: "Abby Arce - Personal Portfolio",
    description: "Software Engineering student at UTD, Software Engineer Intern at Fidelity Investments. Passionate about building tools that make life easier.",
    type: "website",
    locale: "en_US",
    siteName: "Abby Arce - Personal Website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abby Arce - Personal Portfolio",
    description: "Software Engineering student at UTD, Software Engineer Intern at Fidelity Investments. Passionate about building tools that make life easier.",
  },
  robots: {
    index: true,
    follow: true,
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
