import type { Metadata } from "next";
import { Quicksand, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Quicksand — used only for the large section headings.
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Poppins — general display font (buttons, labels, card titles, numbers).
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus HR — Empowering People, Driving Success",
  description:
    "Nexus HR is a people-first HR consultancy helping businesses build high-performing teams through innovative HR solutions, strategic guidance and people-centric approaches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${poppins.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
