import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Service";
import { MapSection } from "../components/MapSection";
import { About } from "../components/About";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <Services />
      <MapSection />
      <About />
      <ContactSection />
      <Footer />
    </>
  );
}
