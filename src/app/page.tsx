"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const fullText = [
  "exploring LLMs and GenAI.",
  "a software developer.",
  "a web developer.",
  "a linux enthusiast.",
  "a tech enthusiast.",
  "when i'm not coding, i'm probably on wordle.",
];

export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150); // Adjust for typing speed
  const [cursorVisible, setCursorVisible] = useState(true);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Typing and deleting effect
  useEffect(() => {
    const currentText = fullText[loopNum % fullText.length];
    let timer;

    if (!isDeleting && text === currentText) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
    } else if (isDeleting && text === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }, 500); // Pause before typing next
    } else if (!isDeleting) {
      timer = setTimeout(() => {
        setText(currentText.substring(0, text.length + 1));
        setTypingSpeed(100); // Typing speed
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentText.substring(0, text.length - 1));
        setTypingSpeed(50); // Backspacing speed
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-['VT323',monospace] sm:p-6 md:p-10 border-2 sm:border-4 border-white">
      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between items-center sm:px-12 md:px-16 py-[1.5rem] px-[1.5rem] sm:py-4 md:py-6 sticky top-0 bg-black z-50 border-b border-cyan-400">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-10 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.3em] sm:tracking-[0.2em] mb-3 sm:mb-0">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="hover:text-red-400 transition-colors duration-300 rounded p-3 sm:p-4"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="hover:text-red-400 transition-colors duration-300 rounded p-3 sm:p-4"
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection(experienceRef)}
            className="hover:text-red-400 transition-colors duration-300 rounded p-3 sm:p-4"
          >
            EXPERIENCE
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mt-6 sm:mt-10 md:mt-16 space-y-16 sm:space-y-20 md:space-y-28">
        {/* Hero Section */}
        <section className="h-[calc(100vh-150px)] sm:h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-['VT323',monospace] tracking-wider mb-4"
              style={{ minHeight: "3rem" }}
            >
              hi, i&apos;m akilesh
              <span
                className={`${
                  cursorVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-100`}
              >
                _
              </span>
            </h1>
            <h2
              className="mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl italic"
              style={{ minHeight: "2rem" }}
            >
              {text}
              <span
                className={`${
                  cursorVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              >
                |
              </span>
            </h2>
          </motion.div>
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
