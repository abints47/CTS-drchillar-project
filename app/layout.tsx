import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import AosProvider from '@/components/AosProvider';
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBotWidget from "@/components/ChatBotWidget";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CTS-Chiller Maintenance Company | HVAC Expert in UAE",
  description: "Professional chiller maintenance, HVAC repair, and cooling solutions in the UAE. Trust CTS for expert commercial and industrial HVAC services to keep your systems running efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased overflow-x-hidden">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        <main className="flex-1 w-full">
          <SmoothScroll>
            <AosProvider>
              {children}
              <ChatBotWidget />
            </AosProvider>
          </SmoothScroll>
        </main>
        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}