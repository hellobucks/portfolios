"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);
  const [profileImg, setProfileImg] = useState("/profile.jpg");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("dark");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const handleProfileClick = () =>
    setProfileImg((prev) =>
      prev === "/profile.jpg" ? "/profile2.jpg" : "/profile.jpg"
    );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* HEADER */}
      <Header toggleTheme={toggleTheme} theme={theme} />

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:px-12 lg:px-16 space-y-32">
        <Home profileImg={profileImg} handleProfileClick={handleProfileClick} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
