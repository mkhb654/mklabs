import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "MK Labs | AI Implementation Partner",
  description: "Turn your business into an AI-scalable company. Built to automate, scale, and sell.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased min-h-full`}
        style={{
          fontFamily: "var(--font-outfit), system-ui, sans-serif",
          background: "#060606",
        }}
      >
        {children}
      </body>
    </html>
  );
}
