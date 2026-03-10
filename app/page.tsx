import Layout from "@/components/Layout";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}