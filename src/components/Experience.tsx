"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPython, FaDocker, FaGitAlt, FaReact } from "react-icons/fa";
import { SiLangchain, SiRedis, SiPytorch, SiOpenai } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { BsNvidia } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";

import htxLogo from "@/components/logos/htx.png";
import cpfLogo from "@/components/logos/cpf.png";
import uowLogo from "@/components/logos/uow.png";
import simLogo from "@/components/logos/sim.png";

const techIcons = {
  NvidiaNIM: BsNvidia,
  Python: FaPython,
  LangChain: SiLangchain,
  Docker: FaDocker,
  Redis: SiRedis,
  PyTorch: SiPytorch,
  OpenAI: SiOpenai,
  AzureML: VscAzure,
  NextJS: TbBrandNextjs,
  Vercel: IoLogoVercel,
  Git: FaGitAlt,
  React: FaReact,
} as const;

const experiences = [
  {
    company: "Home Team Science & Technology Agency",
    position: "AI Engineer Intern",
    date: "Apr 2024 - Oct 2024",
    logo: htxLogo,
    website: "www.htx.gov.sg",
    description: [
      "Engineered containerised Retrieval-Augmented Generation (RAG) pipelines using Docker, open-source LLMs from Hugging Face, and the RAGAS evaluation framework, optimising pipeline performance and deployment.",
      "Refactored system architecture and codebase to support custom prompts and few-shot examples, enabling more nuanced and context-aware outputs from LLMs tailored to specific applications.",
      "Designed and configured scalable microservices with Docker Compose, integrating core Generative AI components and reducing deployment time by 30%.",
    ],
    tech: ["Python", "LangChain", "Docker", "Redis", "PyTorch", "AzureML"],
  },
  {
    company: "Central Provident Fund Board",
    position: "AI Engineer Intern",
    date: "Dec 2024 - Apr 2024",
    logo: cpfLogo,
    website: "www.cpf.gov.sg",
    description: [
      "Developed a Generative AI application for sentiment analysis of employee feedback, leveraging LangChain and GPT models to achieve 95% accuracy in classifying over 10,000 comments and reviews.",
      "Enhanced application performance by researching and fine-tuning prompt templates with GPT models, incorporating zero-shot and few-shot prompting techniques to optimise sentiment analysis accuracy and improve contextual relevance.",
      "Automated engagement report generation using LangChain, reducing delivery time by 50% and streamlining actionable insights derived from sentiment analysis results.",
    ],
    tech: ["Python", "OpenAI", "LangChain"],
  },
];

const education = [
  {
    institution: "University of Wollongong",
    degree: "Bachelor of Computer Science",
    specialization: "Cyber Security",
    date: "Oct 2022 - Sep 2025",
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
    name: "NES CatalystX Hackathon 2024",
    date: "Oct 2024",
    description: [
      "Our team pitched and showcased a GenAI tutoring application that supports dyslexic students with context-rich explanations.",
      "Allows multimodal inputs and incorporates TTS, STT & STS functionalities to enhance accessibility and learning support.",
    ],
    tech: ["Python", "OpenAI", "NvidiaNIM"],
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
      "Created a ChatGPT-style chatbot to explore and experiment with Vercel AI SDK.",
    tech: ["NextJS", "Vercel", "OpenAI"],
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
            <div className="relative m-[3rem]">
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
                        <div className="w-12 h-12 sm:w-[6rem] sm:h-[6rem] rounded border-[0.2rem] border-white overflow-hidden transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={100}
                            height={100}
                            className="object-cover bg-white"
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
            <div className="relative m-[5rem]">
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
                        <div className="w-12 h-12 sm:w-[6rem] bg-white sm:h-[6rem] rounded border-[0.2rem] border-white overflow-hidden transition-transform duration-300 group-hover:scale-110">
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
