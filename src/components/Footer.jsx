"use client";

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const socialLinks = [
    { icon: <FiGithub size={20} />, href: "https://github.com/Buck33ts", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/jerame-matugas", label: "LinkedIn" },
    { icon: <FiMail size={20} />, href: "mailto:jeramematugas@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Jerame <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Matugas</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Full Stack Developer passionate about building scalable and user-friendly web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <a href="#hero" className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                Home
              </a>
              <a href="#about" className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#skills" className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                Skills
              </a>
              <a href="#projects" className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                Projects
              </a>
              <a href="#contact" className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className="text-slate-600 dark:text-slate-400">
                Email: <span className="font-medium">jeramematugas@gmail.com</span>
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Location: <span className="font-medium">Philippines</span>
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Status: <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Available for freelance work
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 md:mb-0">
              © {new Date().getFullYear()} Jerame Matugas. All rights reserved.
            </p>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={18} />
              <span className="text-sm font-semibold">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
