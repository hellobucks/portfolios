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
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans transition-colors duration-500 dark:bg-gray-50 dark:text-gray-900">
      {/* HEADER */}
      <Header toggleTheme={toggleTheme} theme={theme} />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-12 space-y-24 max-w-6xl mx-auto">
        <Home profileImg={profileImg} handleProfileClick={handleProfileClick} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
