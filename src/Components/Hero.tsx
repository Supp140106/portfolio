import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Globe from "./Globe";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "Python", level: 95 },
  { name: "Tailwind CSS", level: 95 },
  { name: "PostgreSQL", level: 70 },
  { name: "Docker", level: 65 },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const globeRef = useRef(null);
  const heroTextRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useGSAP(
    () => {
      // Ensure all refs are ready
      if (
        !sectionRef.current ||
        !pinRef.current ||
        !globeRef.current ||
        !heroTextRef.current ||
        !aboutRef.current ||
        !skillsRef.current
      ) {
        return;
      }

      // Set initial states explicitly
      gsap.set(aboutRef.current, {
        opacity: 0,
        y: 80,
        x: 0,
        willChange: "transform, opacity"
      });

      gsap.set(skillsRef.current, {
        y: "100vh",
        opacity: 0,
        willChange: "transform, opacity"
      });

      gsap.set(globeRef.current, {
        willChange: "transform"
      });

      // Set initial scale for skill bars
      gsap.set(".skill-bar-inner", {
        scaleX: 0,
        transformOrigin: "left",
      });

      gsap.set(heroTextRef.current, {
        willChange: "transform, opacity"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
          id: "hero-scroll",
        },
      });

      // Phase 1: Hero text fades out upward
      tl.to(heroTextRef.current, {
        opacity: 0,
        y: -60,
        ease: "power2.inOut",
      }, 0);

      // Phase 2: Globe moves right + up into center-right position
      tl.to(globeRef.current, {
        x: "23vw",
        y: "-60vh",
        scale: 0.55,
        ease: "power2.inOut",
      }, 0);

      // Phase 3: About Me fades in
      tl.to(aboutRef.current, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }, 0.3);

      // Phase 4: About Me slides out to the left
      tl.to(aboutRef.current, {
        x: "-100vw",
        opacity: 0,
        ease: "power2.inOut",
      }, 1.5);

      // Phase 4b: Globe slides out to the right
      tl.to(globeRef.current, {
        x: "100vw",
        opacity: 0,
        ease: "power2.inOut",
      }, 1.5);

      // Phase 5: Skills section slides in from bottom
      tl.to(skillsRef.current, {
        y: "0",
        opacity: 1,
        ease: "power2.out",
      }, 1.8);

      // Phase 6: Skill bars animate from 0 to max
      tl.to(".skill-bar-inner", {
        scaleX: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      }, 2.0);

      // Cleanup will-change on completion
      tl.eventCallback("onComplete", () => {
        gsap.set([heroTextRef.current, globeRef.current, aboutRef.current, skillsRef.current], {
          clearProps: "willChange"
        });
      });
    },
    {
      scope: sectionRef,
      revertOnUpdate: true
    }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-[300vh] w-full bg-[#14031f]"
    >
      {/* Pinned inner viewport */}
      <div
        ref={pinRef}
        className="relative h-screen w-full flex flex-col items-center justify-start pt-32 overflow-hidden"
      >
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#6b2ca1] via-[#2b0a4a] to-[#14031f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.35),transparent_60%)]" />

        {/* Hero Text Content */}
        <div ref={heroTextRef} className="relative z-10 text-center px-6">
          <h1 className="font-['Playfair_Display'] text-white leading-[1.05] tracking-tight">
            <span className="block mb-1 text-[clamp(3.5rem,7vw,6.5rem)]">
              Architecting
            </span>
            <span
              className="block italic text-[clamp(4rem,8vw,7rem)]
              bg-gradient-to-r from-[#c084fc] via-[#d946ef] to-[#a855f7]
              bg-clip-text text-transparent mb-2 leading-tight"
            >
              Scalable Digital
            </span>
            <span className="block text-[clamp(3.5rem,7vw,6.5rem)]">
              Solutions
            </span>
          </h1>
        </div>

        {/* Globe Wrapper */}
        <div
          ref={globeRef}
          className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-[15%] z-15 scale-[0.85] md:scale-110"
        >
          <Globe />
        </div>

        {/* About Me Content */}
        <div
          ref={aboutRef}
          className="absolute inset-0 z-30 flex items-center pointer-events-none"
        >
          <div className="pointer-events-auto w-full max-w-xl ml-[6vw] md:ml-[8vw] px-6">
            <span
              className="inline-block mb-4 text-[clamp(1rem,2vw,1.5rem)] font-semibold tracking-[0.25em] uppercase
    text-purple-400/80 font-['Inter',sans-serif]"
            >
              About{" "}
              <span className="lavish normal-case text-6xl italic tracking-normal">
                Supprit Das
              </span>
            </span>

            <h2
              className="font-['Playfair_Display'] text-white text-[clamp(2rem,4vw,3.25rem)]
                leading-[1.15] tracking-tight mb-6"
            >
              Passionate about
              <span
                className="italic bg-gradient-to-r from-[#c084fc] to-[#d946ef]
                  bg-clip-text text-transparent"
              >
                {" "}
                crafting
              </span>{" "}
              digital experiences
            </h2>

            <p
              className="font-['Inter',sans-serif] text-purple-200/70 text-base md:text-lg
                leading-relaxed mb-4"
            >
              I'm a full-stack developer who thrives at the intersection of
              design and engineering. I build performant, accessible web
              applications with modern technologies and a keen eye for detail.
            </p>
            <p
              className="font-['Inter',sans-serif] text-purple-200/50 text-sm md:text-base
                leading-relaxed mb-8"
            >
              When I'm not coding, you'll find me exploring new frameworks,
              contributing to open source, or diving into creative side projects
              that push the boundaries of what's possible on the web.
            </p>
          </div>
        </div>

        {/* Skills Content */}
        <div
          ref={skillsRef}
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="pointer-events-auto w-full max-w-3xl px-6">
            <div className="text-center mb-12">
              <h2
                className="font-['Playfair_Display'] text-white text-[clamp(2.5rem,5vw,4rem)]
                  leading-[1.15] tracking-tight"
              >
                Technical
                <span
                  className="italic bg-gradient-to-r from-[#c084fc] to-[#d946ef]
                    bg-clip-text text-transparent ml-3"
                >
                  Proficiency
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-purple-100 font-['Inter',sans-serif] font-medium text-lg">
                      {skill.name}
                    </span>
                    <span className="text-purple-300/80 font-['Inter',sans-serif] text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-purple-900/30 rounded-full overflow-hidden backdrop-blur-sm border border-purple-500/10">
                    <div
                      className="skill-bar-inner h-full bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#c084fc]
                        rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}