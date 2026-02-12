"use client";

import {
  SiLaravel, SiMongodb, SiMysql, SiPhp, SiReact, SiNextdotjs,
  SiHtml5, SiCss3, SiTailwindcss, SiOpenjdk, SiTypescript,
  SiPostman, SiGit, SiGithub, SiPython
} from "react-icons/si";
import { useEffect, useState } from "react";

export default function Skills() {
  const skills = [
    { name: "Laravel", icon: <SiLaravel size={32} color="#FF2D20" /> },
    { name: "MongoDB", icon: <SiMongodb size={32} color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql size={32} color="#00758F" /> },
    { name: "Java", icon: <SiOpenjdk size={32} color="#007396" /> },
    { name: "PHP", icon: <SiPhp size={32} color="#777BB4" /> },
    { name: "React", icon: <SiReact size={32} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={32} color="#000000" /> },
    { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
    { name: "HTML5", icon: <SiHtml5 size={32} color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 size={32} color="#1572B6" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={32} color="#06B6D4" /> },
    { name: "Postman", icon: <SiPostman size={32} color="#FF6C37" /> },
    { name: "Git", icon: <SiGit size={32} color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub size={32} color="#181717" /> },
    { name: "Python", icon: <SiPython size={32} color="#3776AB" /> },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display text-slate-900 dark:text-white mb-6 tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Technologies</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 shadow-lg"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
