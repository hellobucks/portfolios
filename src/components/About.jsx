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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-gray-900 dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Highlights */}
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4 text-primary-600 dark:text-primary-400">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-headline text-gray-900 dark:text-white mb-2 tracking-tight">
                {highlight.title}
              </h3>
              <p className="text-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <FiUser className="text-primary-600 dark:text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-headline text-gray-900 dark:text-white mb-2 tracking-tight">
                      Professional Background
                    </h4>
                    <p className="text-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Dedicated backend developer with expertise in building reliable, efficient, and scalable systems. 
                      Specialized in database design and API development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <FiAward className="text-primary-600 dark:text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-headline text-gray-900 dark:text-white mb-2 tracking-tight">
                      Education & Expertise
                    </h4>
                    <p className="text-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Graduate of <span className="font-semibold text-primary-600 dark:text-primary-400">Biliran Province State University</span>. 
                      Skilled in SQL, MongoDB, API development, and system architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <FiTarget className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h4 className="font-headline text-gray-900 dark:text-white mb-2 tracking-tight">
                    Continuous Growth
                  </h4>
                  <p className="text-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Passionate about exploring <span className="font-semibold text-primary-600 dark:text-primary-400">new technologies</span>, 
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
