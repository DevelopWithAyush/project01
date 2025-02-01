import CallToAction from "@/components/CallToAction";
import CompanyLogo from "@/components/CompanyLogo";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Section3 from "@/components/Section3";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyLogo />
      <Section3 />
      <Faq />
      <CallToAction />
      <Footer/>
    </>
  );
}
