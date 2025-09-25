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
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const contacts = [
    { icon: <FiGithub size={22} />, href: "https://github.com/", label: "GitHub" },
    { icon: <FiYoutube size={22} />, href: "https://youtube.com/", label: "YouTube" },
    { icon: <FiFacebook size={22} />, href: "https://facebook.com/", label: "Facebook" },
    { icon: <FiMail size={22} />, href: "mailto:jeramematugas@gmail.com", label: "Email" },
    { icon: <FiPhone size={22} />, href: "tel:+639123456789", label: "Phone" },
  ];

  return (
    <section
      id="home"
      className="w-full overflow-x-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gray-950 dark:bg-gray-100 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div
          className="mx-auto mb-6 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden 
                     shadow-2xl cursor-pointer bg-gradient-to-br from-indigo-500/20 
                     to-pink-500/20 p-1 transition-transform duration-500 
                     hover:scale-110 hover:rotate-2"
          onClick={handleProfileClick}
        >
          <Image
            src={profileImg}
            alt="Jerame Matugas"
            width={192}
            height={192}
            className="object-contain w-full h-full rounded-xl"
          />
        </div>

        {/* Name with Typewriter */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-gray-900 mb-4">
          {displayedName}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 dark:text-gray-700 text-sm sm:text-base mb-8">
          Full Stack Developer • Creative Technologist • Problem Solver
        </p>

        {/* Contact Icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {contacts.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 dark:bg-white 
                         text-white dark:text-gray-900 shadow-md hover:scale-110 hover:shadow-lg 
                         transition-all duration-300"
            >
              {icon}
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
