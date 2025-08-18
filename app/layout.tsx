import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Enki Studio - AI-Enhanced B2B Design Innovation",
  description: "We turn product specs into visual seduction. B2B communication that commands attention and earns trust through AI-enhanced workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} font-playfair antialiased`}>
        {children}
      </body>
    </html>
  );
}