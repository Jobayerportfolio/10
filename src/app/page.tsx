import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Statistics from "@/components/sections/Statistics";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Loader from "@/components/ui/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Experience />
        <Statistics />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
