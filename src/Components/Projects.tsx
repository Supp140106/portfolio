import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Waves } from "lucide-react";
import NotificationCard from "./NotificationCard";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "MoveSafePacker",
    description: "A comprehensive solution for moving and packing services. Streamlines the booking process and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    links: { demo: "https://www.movesafepacker.com/", code: "#" },
    icon: <Box size={200} />,
    color: "from-orange-400 to-red-400",
  },
  {
    title: "Skriblye",
    description: "A creative platform for digital sketching and note-taking. Built for seamless interaction and real-time collaboration.",
    tags: ["Next.js", "Canvas API", "Socket.io", "Vercel"],
    links: { demo: "https://skrible-pi.vercel.app/", code: "#" },
    icon: <Box size={200} />,
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Incios Ocean Disaster",
    description: "Disaster management system focusing on ocean safety. Features real-time alerts and resource allocation for emergencies.",
    tags: ["Disaster Mgmt", "Real-time Data", "Maps API"],
    links: {
      demo: "https://incios-ocean-disaster-management.vercel.app/signup",
      code: "#",
    },
    icon: <Waves size={200} />,
    color: "from-cyan-400 to-blue-600",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;

    if (!track || !section) return;

    // Force a refresh to get accurate measurements
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;
        return -(trackWidth - windowWidth);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          markers: false, // Set to true for debugging
          onUpdate: () => {
            // Optional: log progress for debugging
            // console.log("Progress:", self.progress);
          },
        },
      });

      return tween;
    }, section);

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#0f0f12] overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Instruction Overlay */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 pointer-events-none">
        <div className="flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-400/40 to-transparent" />
          <span className="text-purple-300/40 text-xs tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">
            Scroll Down to Explore
          </span>
        </div>
      </div>

      {/* Horizontal Track */}
      <div ref={trackRef} className="flex will-change-transform" style={{ width: "fit-content" }}>
        {/* Intro Card */}
        <div
          className="shrink-0 flex items-center justify-center"
          style={{ width: "100vw", height: "100vh" }}
        >
          <div className="text-center px-8">
            <h2 className="text-8xl md:text-9xl font-serif font-normal text-center tracking-tighter leading-[0.85]">
              <span className="text-white block mb-2">Featured</span>
              <span className="block lavish bg-clip-text text-transparent bg-gradient-to-b leading-tight from-[#b829e3] via-[#8e2de2] to-[#4a00e0] drop-shadow-[0_0_15px_rgba(184,41,227,0.3)]">
                Works
              </span>
            </h2>
            <p className="text-white/30 text-lg max-w-xl mx-auto mt-8 font-light tracking-wide">
              A collection of selected projects demonstrating <br /> impactful web solutions.
            </p>
          </div>
        </div>

        {/* Project Cards with NotificationCard */}
        {projects.map((project) => (
          <div
            key={project.title}
            className="shrink-0 flex items-center justify-center"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div className="px-8 w-full">
              <NotificationCard
                mode="website"
                title={project.title}
                message={project.description}
                tags={project.tags}
                websiteUrl={project.links.demo}
                primaryAction="Visit Website"
                secondaryAction="View Details"
                //illustration={index % 2 === 0 ? "purple" : "green"}
                onSecondaryClick={() => console.log(`View details: ${project.title}`)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}