"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FiGithub,
  FiYoutube,
  FiFacebook,
  FiPhone,
  FiMail,
} from "react-icons/fi";

export default function Home({ profileImg, handleProfileClick }) {
  const [displayedName, setDisplayedName] = useState(""); // for typewriter
  const fullName = "Jerame Matugas";

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const contacts = [
    { icon: <FiGithub size={22} />, href: "https://github.com/", label: "GitHub" },
    { icon: <FiYoutube size={22} />, href: "https://youtube.com/", label: "YouTube" },
    { icon: <FiFacebook size={22} />, href: "https://facebook.com/", label: "Facebook" },
    { icon: <FiMail size={22} />, href: "mailto:jeramematugas@gmail.com", label: "Email" },
    { icon: <FiPhone size={22} />, href: "tel:+639168868536", label: "Phone" },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-28 md:py-36 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-50 dark:via-gray-100 dark:to-gray-50 transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 animate-pulse"></div>

      {/* Profile Image */}
      <div
        className="relative cursor-pointer mb-8 hover:scale-110 transition-transform duration-500"
        onClick={handleProfileClick}
      >
        <Image
          src={profileImg}
          alt="Profile"
          width={230}
          height={230}
          className="rounded-full border-4 border-transparent bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-fade-in">
        {displayedName}
        <span className="animate-pulse text-blue-400">|</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-2xl text-gray-300 dark:text-gray-700 mb-12 text-center max-w-xl animate-fade-in">
        🚀 Web Developer • 🧩 Problem Solver
      </p>

      {/* Contact & Socials */}
      <div className="flex flex-wrap justify-center gap-6">
        {contacts.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full 
                       bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 
                       text-white dark:text-gray-900 shadow-lg transition-all duration-500 
                       hover:scale-125 hover:bg-gradient-to-tr hover:from-blue-500 hover:to-purple-500"
            aria-label={item.label}
          >
            {item.icon}
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-400 dark:text-gray-600">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
