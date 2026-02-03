import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground"; // Import new background

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dar Al Arafa Graphics LLC",
  description: "Your partner in premium graphic design and printing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground /> {/* Mount animated background */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
