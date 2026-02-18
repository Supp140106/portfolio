"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".about-title", {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Paragraph animation
      gsap.from(".about-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Cards stagger animation
      gsap.from(".about-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.6,
        ease: "power3.out",
      });

      // Button animation
      gsap.from(".about-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 1.2,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#0f172a",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h1
        className="about-title"
        style={{ fontSize: "3rem", marginBottom: "1rem" }}
      >
        About Us
      </h1>

      <p
        className="about-text"
        style={{ maxWidth: "600px", marginBottom: "2rem", opacity: 0.9 }}
      >
        We create beautiful digital experiences with smooth animations and
        modern technologies. Our mission is to make interfaces that feel alive.
      </p>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        {["Creative Design", "Modern Stack", "Smooth Animations"].map(
          (item, index) => (
            <div
              key={index}
              className="about-card"
              style={{
                background: "#1e293b",
                padding: "1.5rem",
                borderRadius: "12px",
                width: "200px",
              }}
            >
              <h3>{item}</h3>
            </div>
          )
        )}
      </div>

      <button
        className="about-btn"
        style={{
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          background: "#38bdf8",
          color: "#000",
          fontWeight: 600,
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default AboutPage;
