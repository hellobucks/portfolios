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
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Jerame Matugas";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const contacts = [
    { icon: <FiGithub size={20} />, href: "https://github.com/Buck33ts", label: "GitHub" },
    { icon: <FiMail size={20} />, href: "mailto:jeramematugas@gmail.com", label: "Email" },
    { icon: <FiPhone size={20} />, href: "tel:+639123456789", label: "Phone" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Profile Image */}
        <div
          className="mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 p-1 cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={handleProfileClick}
        >
          <Image
            src={profileImg}
            alt="Jerame Matugas"
            width={128}
            height={128}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Name with Typewriter */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {displayedName}
          <span className="inline-block w-1 h-12 md:h-16 bg-primary-600 dark:bg-primary-400 ml-1 animate-pulse"></span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Full Stack Developer specializing in building scalable web applications with modern technologies
        </p>

        {/* Contact Icons */}
        <div className="flex justify-center space-x-6">
          {contacts.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-600 dark:hover:border-primary-400 transition-all duration-200"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
