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
    "Problem Solver"
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
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-black dark:via-slate-950 dark:to-purple-950">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Floating Code Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-blue-400 font-mono text-sm animate-float">
            {'const developer = {'}
          </div>
          <div className="absolute top-32 right-20 text-purple-400 font-mono text-sm animate-float-delayed">
            {'skills: ["Full Stack", "Innovation"]'}
          </div>
          <div className="absolute bottom-40 left-20 text-cyan-400 font-mono text-sm animate-float">
            {'passion: "Building Dreams"}'}
          </div>
          <div className="absolute bottom-20 right-10 text-green-400 font-mono text-sm animate-float-delayed">
            {'status: "Available for Hire"}'}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-20">
        {/* Mobile Layout - Image and Name First */}
        <div className="lg:hidden space-y-8 text-center">
          {/* Innovation Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-bold text-white shadow-lg animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
            Innovation-Driven Developer
          </div>
          
          {/* Interactive Image */}
          <div className="relative flex justify-center group">
            <div className="relative w-64 h-72 transform transition-all duration-500 hover:scale-105">
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                <Image
                  src="/profile.jpg"
                  alt="Jerame Matugas"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                  style={{ objectPosition: 'center 30%' }}
                />
                
                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Python'].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-600/80 backdrop-blur-sm rounded text-xs text-white font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-3 py-2 shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-white font-bold text-sm">5+ Years</div>
                <div className="text-white/80 text-xs">Experience</div>
              </div>
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-display text-white tracking-tight leading-tight">
              Hi, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Jerame Matugas
              </span>
            </h1>
            <div className="text-2xl md:text-3xl font-headline text-blue-300 h-12 tracking-tight">
              <span>{text}</span>
              <span className="animate-pulse text-cyan-400">|</span>
            </div>
          </div>
          
          {/* Value Proposition */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Transforming Ideas into Digital Reality</h3>
              <p className="text-blue-200 leading-relaxed">
                I don&apos;t just write code - I craft digital experiences that solve real problems and delight users. 
                From complex backend systems to beautiful frontend interfaces, I bring innovation to every project.
              </p>
            </div>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <FiArrowDown className="ml-2 animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-300 font-bold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                View Innovation Gallery
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left space-y-8">
            {/* Innovation Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-bold text-white shadow-lg animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
              Innovation-Driven Developer
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl xl:text-7xl font-display text-white tracking-tight leading-tight">
                Hi, I&apos;m <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                  Jerame Matugas
                </span>
              </h1>
              <div className="text-3xl xl:text-4xl font-headline text-blue-300 h-16 tracking-tight">
                <span>{text}</span>
                <span className="animate-pulse text-cyan-400">|</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Transforming Ideas into Digital Reality</h3>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                I don&apos;t just write code - I craft digital experiences that solve real problems and delight users. 
                From complex backend systems to beautiful frontend interfaces, I bring innovation to every project.
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-blue-300">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-sm text-blue-300">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">100%</div>
                  <div className="text-sm text-blue-300">Passion</div>
                </div>
              </div>
            </div>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <FiArrowDown className="ml-2 animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-300 font-bold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                View Innovation Gallery
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-start space-x-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Image/Visual */}
          <div className="relative flex justify-end">
            <div className="relative w-96 h-[28rem] group">
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                <Image
                  src="/profile.jpg"
                  alt="Jerame Matugas"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                  style={{ objectPosition: 'center 30%' }}
                />
                
                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Python', 'Next.js', 'MongoDB'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded text-sm text-white font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-6 py-4 shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-white font-bold text-2xl">5+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-6 py-4 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-white font-bold text-2xl">50+</div>
                <div className="text-white/80 text-sm">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-blue-300 font-medium">Explore Innovation</span>
          <div className="animate-bounce">
            <FiArrowDown className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
