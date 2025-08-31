import { LanguageProvider } from "./contexts/LanguageContext";
import FloatingHeader from "./components/FloatingHeader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <LanguageProvider>
      <div className="container mx-auto max-w-7xl">
        <FloatingHeader />
        <section id="home">
          <Hero />
        </section>
        <About />
        <section id="services">
          <Services />
        </section>
        <Projects />
        <section id="experience">
          <Experiences />
        </section>
        <Testimonial />
        <Contact />
        <Footer/>
      </div>
    </LanguageProvider>
  );
};

export default App;