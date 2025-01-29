"use client";

import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

function ToolsUsed() {
  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-4">
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <TbBrandNextjs
          size={24}
          title="Next.js"
          className="text-white transition duration-300 ease-in-out transform hover:scale-125 sm:w-8 sm:h-8"
        />
      </a>
      <span className="text-lg sm:text-xl text-white">+</span>
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <SiTypescript
          size={24}
          title="TypeScript"
          className="text-blue-600 transition duration-300 ease-in-out transform hover:scale-125 sm:w-8 sm:h-8"
        />
      </a>
      <span className="text-lg sm:text-xl text-white">+</span>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <SiTailwindcss
          size={24}
          title="Tailwind CSS"
          className="text-cyan-500 transition duration-300 ease-in-out transform hover:scale-125 sm:w-8 sm:h-8"
        />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mb-6 sm:mb-10 px-4 tracking-wider text-center text-white">
      <h3 className="mb-8 sm:mb-16">
        <a
          href="https://github.com/akileshjayakumar?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm sm:text-xl py-3 sm:py-4 px-6 sm:px-9 tracking-wider bg-gradient-to-r from-green-400 to-blue-500 hover:from-cyan-500 hover:to-cyan-600 text-white 
          font-bold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          More projects on my GitHub!
        </a>
      </h3>
      <div className="font-bold flex flex-col justify-center items-center space-y-4">
        <div className="text-sm sm:text-base">built with</div>
        <ToolsUsed />
        <div className="text-sm sm:text-base">© 2024 Akilesh Jayakumar</div>
      </div>
    </footer>
  );
}

export default Footer;
