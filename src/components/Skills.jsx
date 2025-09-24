"use client";

import {
  SiLaravel, SiMongodb, SiMysql, SiPhp, SiReact, SiNextdotjs,
  SiHtml5, SiCss3, SiTailwindcss, SiOpenjdk, SiTypescript,
  SiPostman, SiGit, SiGithub, SiPython
} from "react-icons/si";
import { useEffect, useState } from "react";

export default function Skills() {
  const skills = [
    { name: "Laravel", icon: <SiLaravel size={60} color="#FF2D20" /> },
    { name: "MongoDB", icon: <SiMongodb size={60} color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql size={60} color="#00758F" /> },
    { name: "Java", icon: <SiOpenjdk size={60} color="#007396" /> },
    { name: "PHP", icon: <SiPhp size={60} color="#777BB4" /> },
    { name: "React", icon: <SiReact size={60} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={60} color="#000000" /> },
    { name: "TypeScript", icon: <SiTypescript size={60} color="#3178C6" /> },
    { name: "HTML5", icon: <SiHtml5 size={60} color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 size={60} color="#1572B6" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={60} color="#06B6D4" /> },
    { name: "Postman", icon: <SiPostman size={60} color="#FF6C37" /> },
    { name: "Git", icon: <SiGit size={60} color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub size={60} color="#181717" /> },
    { name: "Python", icon: <SiPython size={60} color="#3776AB" /> },
  ];

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const containerSize = isMobile ? 320 : 750;
  const radius = isMobile ? 120 : 320;

  return (
    <section
      id="skills"
      className="w-full overflow-x-hidden py-16 md:py-24 bg-gray-900 dark:bg-gray-100 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-gray-900 mb-12 tracking-wide">
          Skills
        </h2>

        {/* Orbit-style skill layout */}
        <div className="relative flex justify-center items-center">
          <div
            className="relative rounded-full border-4 border-blue-500/30 shadow-[0_0_80px_rgba(59,130,246,0.4)] animate-pulse"
            style={{
              width: `${containerSize}px`,
              height: `${containerSize}px`,
            }}
          >
            {skills.map((skill, idx) => {
              const angle = (idx / skills.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <div
                  key={idx}
                  className="absolute flex flex-col items-center"
                  style={{
                    transform: `translate(${containerSize / 2 + x}px, ${containerSize / 2 + y}px)`,
                  }}
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-gray-800 dark:bg-white shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="mt-2 text-xs md:text-base font-semibold text-gray-300 dark:text-gray-800 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
