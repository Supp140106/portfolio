import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Components/Hero";
import Dock from "./Components/Dock";
import Projects from "./Components/Projects";
import Contact from "./Components/Contactme";
import CustomCursor from "./Components/CustomCursor";


// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

export default function App() {


  return (
    <div className="scroll-smooth">
      <CustomCursor />
      <Hero />
      <Projects />
      <Contact />
      <Dock />
    </div>
  );
}