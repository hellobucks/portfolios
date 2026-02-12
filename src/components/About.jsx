"use client";

import { FiUser, FiCode, FiAward, FiTarget } from "react-icons/fi";

export default function About() {
  const highlights = [
    {
      icon: <FiCode size={24} />,
      title: "Backend Specialist",
      description: "Expert in building scalable, efficient backend systems"
    },
    {
      icon: <FiAward size={24} />,
      title: "Problem Solver",
      description: "Transform complex challenges into elegant solutions"
    },
    {
      icon: <FiTarget size={24} />,
      title: "Results Driven",
      description: "Focus on performance and user experience"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display text-slate-900 dark:text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Highlights */}
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="flex items-center mb-6 w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl text-blue-600 dark:text-blue-400">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-headline text-slate-900 dark:text-white mb-3 tracking-tight font-semibold">
                {highlight.title}
              </h3>
              <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 md:p-14 shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center">
                    <FiUser className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-headline text-slate-900 dark:text-white mb-3 tracking-tight text-lg font-semibold">
                      Professional Background
                    </h4>
                    <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dedicated backend developer with expertise in building reliable, efficient, and scalable systems. 
                      Specialized in database design and API development with a focus on performance optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center">
                    <FiAward className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-headline text-slate-900 dark:text-white mb-3 tracking-tight text-lg font-semibold">
                      Education & Expertise
                    </h4>
                    <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                      Graduate of <span className="font-semibold text-blue-600 dark:text-blue-400">Biliran Province State University</span>. 
                      Skilled in SQL, MongoDB, API development, and system architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center">
                  <FiTarget className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-headline text-slate-900 dark:text-white mb-3 tracking-tight text-lg font-semibold">
                    Continuous Growth
                  </h4>
                  <p className="text-body text-slate-600 dark:text-slate-400 leading-relaxed">
                    Passionate about exploring <span className="font-semibold text-blue-600 dark:text-blue-400">new technologies</span>, 
                    improving database skills, and finding innovative solutions to complex problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
