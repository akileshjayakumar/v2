"use client";

import { useState, useEffect, useRef } from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        experienceRef.current &&
        scrollPosition >= experienceRef.current.offsetTop
      ) {
        setActiveSection("experience");
      } else if (
        skillsRef.current &&
        scrollPosition >= skillsRef.current.offsetTop
      ) {
        setActiveSection("skills");
      } else {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-['VT323',monospace] sm:p-4 md:p-6 border-2 sm:border-4 border-white">
      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between items-center sm:px-9 md:px-6 py-[1rem] px-[1rem] sm:py-2 md:py-5 sticky top-0 bg-black z-50 border-b border-cyan-400">
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 md:gap-8 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.3em] sm:tracking-[0.2em] mb-2 sm:mb-0">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className={`hover:text-red-400 transition-colors duration-300 rounded p-2 sm:p-3 ${
              activeSection === "about" ? "text-white" : "text-gray-600"
            }`}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className={`hover:text-red-400 transition-colors duration-300 rounded p-2 sm:p-3 ${
              activeSection === "skills" ? "text-white" : "text-gray-600"
            }`}
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection(experienceRef)}
            className={`hover:text-red-400 transition-colors duration-300 rounded p-2 sm:p-3 ${
              activeSection === "experience" ? "text-white" : "text-gray-600"
            }`}
          >
            EXPERIENCE
          </button>
        </div>
        <div className="flex gap-2"></div>
      </nav>

      {/* Main Content */}
      <main className="mt-4 sm:mt-8 md:mt-16 space-y-12 sm:space-y-16 md:space-y-24">
        {/* Hero Section */}
        <section className="h-[calc(100vh-150px)] sm:h-[calc(100vh-200px)] flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['VT323',monospace] tracking-wider text-center">
            hi, i&apos;m akilesh
            <span
              className={`${
                cursorVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
            >
              _
            </span>
          </h1>
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={skillsRef}>
          <Skills />
        </section>

        <section ref={experienceRef}>
          <Experience />
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}
