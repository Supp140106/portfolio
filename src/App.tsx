import AboutMe from "./components/AboutMe";
import ContactMe from "./components/Contact";


import Hero from "./components/Hero";
import LetterGlitch from "./components/LetterGlitch";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
  return (
    <>
<div id="home" className="h-screen w-full flex flex-col bg-gradient-to-b from-transparent via-[#050505] to-black">
  <LetterGlitch glitchSpeed={50} centerVignette outerVignette smooth>
    <Navbar />
    <Hero />
  </LetterGlitch>
</div>

<div id="about" className="h-screen w-full flex flex-col merge-container">
  <AboutMe />
</div>

<div id="projects">
  <Projects />
</div>

<div id="contact" className="h-screen w-full flex flex-col items-center justify-center bg-black">
  <ContactMe />
</div>


    </>
  );
}

export default App;



