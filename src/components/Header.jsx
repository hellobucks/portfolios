"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Header({ toggleTheme, theme }) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = ["about", "projects", "skills", "contact"];

  return (
    <header className="w-full overflow-x-hidden flex flex-wrap justify-between items-center py-4 px-4 sm:px-6 md:px-12 bg-gray-900/90 dark:bg-gray-100/90 sticky top-0 z-50 shadow-md transition-colors duration-500">
      {/* Logo */}
      <h1 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-900 truncate">
        My Showcase
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex flex-wrap items-center gap-4">
        <ul className="flex flex-wrap gap-4">
          {navLinks.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`relative font-medium text-sm sm:text-base transition-colors duration-300 ${
                  activeSection === section
                    ? "text-blue-400 dark:text-blue-600 after:w-full"
                    : "text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 after:w-0"
                } after:content-[''] after:block after:h-0.5 after:bg-blue-400 dark:after:bg-blue-600 after:transition-all after:duration-300`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-900 shadow-md hover:scale-110 transition-transform duration-300"
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </nav>

      {/* Mobile Controls */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-900 shadow-md"
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white dark:text-gray-900 text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full px-4 bg-gray-900/95 dark:bg-gray-100/95 backdrop-blur-md flex flex-col items-center gap-4 py-6 shadow-lg md:hidden overflow-x-hidden">
          {navLinks.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className={`font-medium text-lg w-full text-center transition-colors duration-300 ${
                activeSection === section
                  ? "text-blue-400 dark:text-blue-600"
                  : "text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
