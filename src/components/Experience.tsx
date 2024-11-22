"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPython, FaDocker, FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiNeo4J,
  SiOracle,
  SiFastapi,
  SiLangchain,
  SiRedis,
  SiPytorch,
  SiStreamlit,
  SiOpenai,
  SiPowerautomate,
  SiNvidia,
  SiTailwindcss,
  SiNodedotjs,
  SiKoa,
  SiJavascript,
  SiFirebase,
  SiMicrosoftexcel,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";

import htxLogo from "@/components/logos/htx.png";
import cpfLogo from "@/components/logos/cpf.png";
import uowLogo from "@/components/logos/uow.png";
import simLogo from "@/components/logos/sim.png";

const techIcons = {
  Python: FaPython,
  FastAPI: SiFastapi,
  LangChain: SiLangchain,
  Docker: FaDocker,
  Redis: SiRedis,
  PyTorch: SiPytorch,
  Streamlit: SiStreamlit,
  OpenAI: SiOpenai,
  MicrosoftPA: SiPowerautomate,
  AzureML: VscAzure,
  CUDA: SiNvidia,
  NextJS: TbBrandNextjs,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  Vercel: IoLogoVercel,
  Git: FaGitAlt,
  MongoDB: SiMongodb,
  Neo4j: SiNeo4J,
  Oracle: SiOracle,
  React: FaReact,
  NodeJS: SiNodedotjs,
  Koa: SiKoa,
  JavaScript: SiJavascript,
  Firebase: SiFirebase,
  Excel: SiMicrosoftexcel,
} as const;

const experiences = [
  {
    company: "Home Team Science & Technology Agency",
    position: "AI Engineer Intern",
    date: "Apr 2024 - Oct 2024",
    logo: htxLogo,
    website: "www.htx.gov.sg",
    description: [
      "Engineered and containerised RAG and RAGAS pipelines with open-source LLMs from HuggingFace.",
      "Improved context recall and precision by 90% by integrating the HyDE retriever, enhancing document retrieval relevance.",
      "Refactored system code to enable custom prompts and few-shot learning, delivering more tailored LLM outputs.",
      "Configured a microservice architecture to containerised and integrate services across the GenAI tech stack.",
      "Curated benchmarking datasets by automating YouTube scraping and transcription, supporting STT model training efforts.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "Docker",
      "Redis",
      "PyTorch",
      "AzureML",
    ],
  },
  {
    company: "Central Provident Fund Board",
    position: "AI Engineer Intern",
    date: "Dec 2024 - Apr 2024",
    logo: cpfLogo,
    website: "www.cpf.gov.sg",
    description: [
      "Developed a GenAI application to analyse employee comments, posts, and reviews, delivering sentiment insights for HR.",
      "Researched and fine-tuned GPT models, optimising context window sizes to enhance sentiment analysis accuracy.",
      "Automated test case generation using zero-shot and few-shot prompting techniques to evaluate sentiment analysis.",
      "Automated report generation for HR, providing quick access to key metrics and trends.",
    ],
    tech: [
      "Python",
      "Streamlit",
      "OpenAI",
      "LangChain",
      "MicrosoftPA",
      "Excel",
    ],
  },
];

const education = [
  {
    institution: "University of Wollongong",
    degree: "Bachelor of Computer Science",
    specialization: "Big Data and Cyber Security",
    date: "Oct 2022 - Jun 2026",
    logo: uowLogo,
    website: "www.uow.edu.au",
  },
  {
    institution: "Singapore Institute of Management",
    degree: "Diploma of Education",
    specialization: "Information Technology",
    date: "Oct 2021 - Sep 2022",
    logo: simLogo,
    website: "www.sim.edu.sg",
  },
];

const projects = [
  {
    name: "NES Catalyst X Hackathon 2024",
    date: "Oct 2024",
    description:
      "Our team pitched and showcased a GenAI tutoring application that supports dyslexic students with context-rich explanations.",
    tech: ["Python", "Streamlit", "OpenAI", "PyTorch", "CUDA"],
    links: {
      github: "https://github.com/akileshjayakumar/CatalystX-2024",
      demo: "https://eduxcatalystx2024.streamlit.app/",
    },
  },
  {
    name: "LangGraph Agentic Chatbot",
    date: "Oct 2024",
    description:
      "Developed an LLM Agent capable of answering user queries by searching and retrieving real-time information from the web.",
    tech: ["Python", "OpenAI"],
    links: {
      github: "https://github.com/akileshjayakumar/LangGraph-Agentic-Chatbot",
      demo: "https://huggingface.co/spaces/akileshjayakumar/LangGraph-Agentic-Chatbot",
    },
  },
  {
    name: "Next.js LLM Chatbot",
    date: "Apr 2024",
    description:
      "Created a ChatGPT-style chatbot to explore and experiment with Vercel's AI SDK.",
    tech: ["NextJS", "TypeScript", "TailwindCSS", "Vercel"],
    links: {
      github: "https://github.com/akileshjayakumar/Next.js-SDK-Chatbot",
      demo: "https://nextjs-sdk-chatbot.vercel.app/",
    },
  },
];

export default function Experience() {
  const [activeSection, setActiveSection] = useState("work");

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 bg-black text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 font-['VT323',monospace] tracking-wider">
        EXPERIENCE
      </h2>

      <div className="flex justify-center gap-8 mb-12">
        {[
          { id: "work", label: "./work" },
          { id: "edu", label: "./edu" },
          { id: "proj", label: "./proj" },
        ].map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`text-lg font-mono hover:text-blue-400 transition-colors ${
              activeSection === section.id ? "text-blue-400" : "text-gray-500"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-3xl"
        >
          {activeSection === "work" && (
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white" />
              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 sm:pl-16">
                    <div className="absolute left-0 top-0 -translate-x-1/2">
                      <a
                        href={`https://${exp.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative group"
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white bg-black overflow-hidden transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={100}
                            height={100}
                            className="bg-white object-cover"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold font-mono">
                        {exp.company}
                      </h3>
                      <p className="text-lg sm:text-xl font-mono">
                        {exp.position}
                      </p>
                      <p className="text-gray-400 font-mono mb-4">{exp.date}</p>
                      <ul className="space-y-4 text-gray-300">
                        {exp.description.map((desc, i) => (
                          <li
                            key={i}
                            className="flex items-start font-mono text-sm sm:text-base"
                          >
                            <span className="mr-2">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-4 mt-4">
                        {exp.tech.map((tech) => {
                          const Icon =
                            techIcons[tech as keyof typeof techIcons];
                          return (
                            <div key={tech} className="group relative">
                              {Icon && (
                                <Icon className="w-6 h-6 text-cyan-400 transition-transform duration-300 hover:scale-110 mt-[2rem]" />
                              )}
                              <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {tech}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "edu" && (
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white" />
              <div className="space-y-16">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 sm:pl-16">
                    <div className="absolute left-0 top-0 -translate-x-1/2">
                      <a
                        href={`https://${edu.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative group"
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white bg-black overflow-hidden transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={90}
                            height={90}
                            className="bg-white object-cover"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold font-mono">
                        {edu.institution}
                      </h3>
                      <p className="text-lg sm:text-xl font-mono">
                        {edu.degree}
                      </p>
                      <p className="text-base sm:text-lg text-gray-300 font-mono">
                        {edu.specialization}
                      </p>
                      <p className="text-gray-400 font-mono">{edu.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "proj" && (
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white" />
              <div className="space-y-16">
                {projects.map((project, index) => (
                  <div key={index} className="relative pl-8 sm:pl-16">
                    <div className="absolute left-0 top-0 -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold font-mono">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 font-mono">{project.date}</p>
                      <p className="text-gray-300 font-mono">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-4">
                        {project.tech.map((tech) => {
                          const Icon =
                            techIcons[tech as keyof typeof techIcons];
                          return (
                            <div key={tech} className="group relative">
                              {Icon && (
                                <Icon className="w-6 h-6 text-cyan-400 transition-transform duration-300 hover:scale-110 mt-[2rem]" />
                              )}
                              <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {tech}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex gap-6">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white-500 hover:text-blue-400 transition-colors font-mono mt-[2rem]"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white-500 hover:text-blue-400 transition-colors font-mono mt-[2rem]"
                        >
                          Live Site
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
