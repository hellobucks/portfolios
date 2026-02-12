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
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"></div>
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full mr-1.5 lg:mr-2 animate-pulse"></span>
              Available for Opportunities
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-display text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I&apos;m <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Jerame Matugas
                </span>
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-headline text-slate-600 dark:text-slate-400 h-12 lg:h-16 tracking-tight">
                <span>{text}</span>
                <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
              </div>
            </div>

            <p className="text-lg lg:text-xl text-body text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Full Stack Developer specializing in building scalable web applications with modern technologies. 
              Transforming complex challenges into elegant, user-centric solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start pt-2 lg:pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                Get In Touch
                <FiArrowDown className="ml-2 animate-bounce" />
              </a>
              
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-2.5 lg:px-8 lg:py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 text-sm lg:text-base"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-4 pt-2">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-80 lg:w-96 lg:h-[28rem]">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-pink-400/10 rounded-2xl lg:rounded-3xl blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg lg:shadow-2xl border-2 lg:border-4 border-white dark:border-slate-800">
                <Image
                  src="/profile.jpg"
                  alt="Jerame Matugas"
                  fill
                  className="object-cover"
                  priority
                  style={{ objectPosition: 'center 30%' }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Badge - Hidden on mobile */}
              <div className="hidden lg:block absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 px-6 py-4">
                <div className="text-2xl font-bold text-slate-900 dark:text-white">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-slate-500 dark:text-slate-500 font-medium">Scroll</span>
          <div className="animate-bounce">
            <FiArrowDown className="w-5 h-5 text-slate-400 dark:text-slate-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
