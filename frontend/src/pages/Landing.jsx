import { useEffect } from "react";
import Nav from "@/components/scania/Nav";
import Hero from "@/components/scania/Hero";
import Marquee from "@/components/scania/Marquee";
import History from "@/components/scania/History";
import Owners from "@/components/scania/Owners";
import IconicTrucks from "@/components/scania/IconicTrucks";
import EVProduction from "@/components/scania/EVProduction";
import FutureVision from "@/components/scania/FutureVision";
import Stats from "@/components/scania/Stats";
import Contact from "@/components/scania/Contact";
import Footer from "@/components/scania/Footer";

export default function Landing() {
  useEffect(() => {
    document.title = "Scania Heavy Trucks — Heritage. Power. Electric Future.";
  }, []);

  return (
    <main className="bg-[#F2F5F8] text-black font-body antialiased" data-testid="landing-root">
      <Nav />
      <Hero />
      <Marquee />
      <History />
      <Stats />
      <Owners />
      <IconicTrucks />
      <EVProduction />
      <FutureVision />
      <Contact />
      <Footer />
    </main>
  );
}
