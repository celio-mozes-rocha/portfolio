import Hero from "@/sections/Hero";
import About from "@/sections/About";
//import Contact from "@/sections/Contact";
import Footer from "@/components/layout/Footer";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}