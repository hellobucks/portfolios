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
    { icon: <FiGithub size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FiMail size={20} />, href: "mailto:jeramematugas@gmail.com", label: "Email" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I&apos;m <span className="text-primary-600 dark:text-primary-400">Jerame</span>
              </h1>
              <div className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 h-12">
                <span>{text}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate developer with expertise in building scalable web applications. 
              I transform complex problems into elegant, user-friendly solutions that drive business success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <FiArrowDown className="ml-2 animate-bounce" />
              </a>
              
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-medium rounded-full hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-600 dark:hover:border-primary-400 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary-600 dark:bg-primary-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Large Profile Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-6 border-white dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <Image
                  src="/profile.jpg"
                  alt="Jerame Matugas"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 dark:to-gray-900/20 rounded-full"></div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center animate-float border border-gray-100 dark:border-gray-700">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Years Exp</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-600 dark:bg-primary-500 rounded-2xl shadow-lg flex flex-col items-center justify-center animate-float-delayed">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-white font-medium">Projects</div>
              </div>

              {/* Additional Floating Elements */}
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-float border border-gray-100 dark:border-gray-700">
                <span className="text-xl">🚀</span>
              </div>
              
              <div className="absolute top-1/3 -right-8 w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full shadow-lg flex items-center justify-center animate-float-delayed border border-primary-200 dark:border-primary-800">
                <span className="text-xl">⭐</span>
              </div>
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
