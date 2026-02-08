import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkVeil from "@/components/DarkVeil"; // Import new background
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dar Al Arafa Graphics LLC",
  description: "Your partner in premium graphic design and printing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          <DarkVeil
            hueShift={10}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1.1}
            scanlineFrequency={4}
            warpAmount={0.95}
            resolutionScale={1}
            brightness={4.0}
          />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
