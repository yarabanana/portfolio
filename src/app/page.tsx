import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/layout/Footer"; // Додано імпорт

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contacts />
      <Footer /> {/* Додано на сторінку */}
    </main>
  );
}