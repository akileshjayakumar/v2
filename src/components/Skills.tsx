import React from "react";
import {
  FaPython,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiNeo4J,
  SiOracle,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiLangchain } from "react-icons/si";

const skills = [
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "SQL", icon: DiMysql, color: "#4479A1" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26" },
  { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
  { name: "LangChain", icon: SiLangchain, color: "#fff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Neo4j", icon: SiNeo4J, color: "#008CC1" },
  { name: "Oracle", icon: SiOracle, color: "#F80000" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 md:mb-16 font-['VT323',monospace] tracking-wider text-center">
        SKILLS
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center group"
          >
            {typeof skill.icon === "function" ? (
              <div className="relative">
                <skill.icon
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-xl"
                  style={{
                    backgroundColor: skill.color,
                    filter: "blur(20px)",
                    transform: "scale(1.2)",
                  }}
                />
              </div>
            ) : (
              <div className="relative">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-xl"
                  style={{
                    backgroundColor: skill.color,
                    filter: "blur(20px)",
                    transform: "scale(1.2)",
                  }}
                />
              </div>
            )}
            <span
              className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
              style={{ color: skill.color }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
