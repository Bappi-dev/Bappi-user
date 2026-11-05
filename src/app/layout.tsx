import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { ThemeProvider } from "@/components/providers/theme-provider";
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
  title: "Imamul Hasan Bappi — Full-Stack & Creative Engineer",
  description:
    "Awwwards-caliber portfolio of Imamul Hasan Bappi, specializing in Next.js 16 App Router, Node.js, Express, MongoDB, JWT Security, and Framer Motion micro-interactions.",
  keywords: [
    "Imamul Hasan Bappi",
    "Full Stack Developer",
    "Next.js 16",
    "React 19",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Portfolio",
  ],
  authors: [{ name: "Imamul Hasan Bappi" }],
  openGraph: {
    title: "Imamul Hasan Bappi — Full-Stack & Creative Engineer",
    description:
      "Engineering scalable web systems with obsessive craft, Next.js 16, MERN stack, and fluid motion design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imamul Hasan Bappi — Full-Stack & Creative Engineer",
    description:
      "Next.js 16, Node.js, Express, MongoDB, and Framer Motion portfolio by Imamul Hasan Bappi.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070f",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('portfolio-theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-blue-500/30 selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
