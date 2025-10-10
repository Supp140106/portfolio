import React from "react";
import SplitText from "./SplitText";
import { motion } from "framer-motion";
import "./css/Hero.css";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const Hero: React.FC = () => {
  const handleAnimationComplete = () => {
    console.log("Full hero text animation finished!");
  };

  // 🧭 Smooth scroll handler
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      const yOffset = -80; // adjust if navbar overlaps
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-6xl md:text-8xl font-extrabold text-center leading-tight">
          Hi <span className="wave">👋</span>
          <br />
          <SplitText
            text="I’m Supprit Das"
            className="inline-block text-6xl md:text-8xl font-extrabold"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-white text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          A passionate{" "}
          <motion.span
            className="text-[#00FF00] inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.span>{" "}
          crafting modern, scalable web experiences.
        </motion.p>

        {/* 👇 Smooth scroll button */}
        <InteractiveHoverButton onClick={handleScrollToContact} className="mt-6">
          Contact Me
        </InteractiveHoverButton>
      </section>
    </>
  );
};

export default Hero;
