import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Stair } from "@/components/Stair";
import NavContextProvider from "@/components/navbar/NavContext";
import AppShell from "@/components/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const font1 = localFont({
  src: [
    {
      path: "../font/Lausanne-300.woff2",
      weight: "300",
      style: "normal"
    }
  ],
  variable: "--font-font1",
})

const font2 = localFont({
  src: [
    {
      path: "../font/Lausanne-500.woff2",
      weight: "500",
      style: "normal"
    }
  ],
  variable: "--font-font2",
})

export const metadata: Metadata = {
  title: "K72 — Creative Design Showcase",
  description: "K72 is a sleek, Awwwards-inspired website showcasing modern web design, animations, and creative UI/UX experiences.",
  keywords: [
    "K72",
    "Awwwards clone",
    "creative web design",
    "modern UI",
    "next.js portfolio",
    "web animations",
    "frontend design showcase"
  ],
  authors: [{ name: "Aryan Kumar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${font1.variable}  ${font2.variable} antialiased`}
      >
        <Stair>
          <NavContextProvider>
            <AppShell>
              {children}
            </AppShell>
          </NavContextProvider>
        </Stair>
      </body>
    </html>
  );
}
