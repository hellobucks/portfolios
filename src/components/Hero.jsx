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
    { icon: <FiGithub size={20} />, href: "https://github.com/hellobucks", label: "GitHub" },
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
                Hi, I&apos;m <span className="text-primary-600 dark:text-primary-400">Jerame Matugas</span>
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
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 dark:from-primary-400 dark:via-primary-500 dark:to-primary-600 rounded-3xl blur-3xl opacity-25 animate-pulse"></div>
              
              {/* Professional Frame */}
              <div className="relative w-80 h-96 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 border-8 border-white dark:border-gray-800 bg-white dark:bg-gray-900">
                {/* Inner Frame */}
                <div className="absolute inset-2 border-2 border-gray-100 dark:border-gray-700 rounded-2xl"></div>
                
                {/* Profile Image */}
                <Image
                  src="/profile.jpg"
                  alt="Jerame Matugas"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  style={{ objectPosition: 'center 20%' }}
                />
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-gray-900/5 rounded-2xl"></div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/90 dark:from-gray-900/90 to-transparent rounded-b-2xl"></div>
              </div>

              {/* Professional Achievement Badges */}
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center justify-center animate-float border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium text-center px-2">Years Experience</div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-600 rounded-2xl shadow-xl flex flex-col items-center justify-center animate-float-delayed hover:shadow-2xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-xs text-white font-medium text-center px-2">Projects Delivered</div>
              </div>

              {/* Status Indicators */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
              
              <div className="absolute top-4 right-4 flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Available</span>
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
