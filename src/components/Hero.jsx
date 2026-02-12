"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Full Stack Developer",
    "Backend Specialist",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: "https://github.com/Buck33ts", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/jerame-matugas", label: "LinkedIn" },
    { icon: <FiMail size={20} />, href: "mailto:jeramematugas@gmail.com", label: "Email" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-950"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-display text-gray-900 dark:text-white tracking-tight">
                Hi, I&apos;m <span className="text-gray-700 dark:text-gray-300">Jerame Matugas</span>
              </h1>
              <div className="text-2xl md:text-4xl font-headline text-gray-600 dark:text-gray-400 h-12 tracking-tight">
                <span>{text}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-lg text-body text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Passionate developer with expertise in building scalable web applications. 
              I transform complex problems into elegant, user-friendly solutions that drive business success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <FiArrowDown className="ml-2 animate-bounce" />
              </a>
              
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 font-medium rounded-full hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-900 dark:hover:border-gray-400 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative flex justify-end items-center h-full">
            <div className="relative w-full max-w-lg h-[36rem] overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Jerame Matugas"
                fill
                className="object-cover"
                priority
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <FiArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
