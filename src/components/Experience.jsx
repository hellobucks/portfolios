"use client";

import { useState } from "react";
import { FiCalendar, FiMapPin, FiBriefcase, FiExternalLink } from "react-icons/fi";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: "Lead development of enterprise web applications using Next.js, Node.js, and cloud technologies. Implemented microservices architecture and improved system performance by 40%.",
      achievements: [
        "Architected scalable backend systems serving 10K+ users",
        "Reduced page load times by 60% through optimization",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Backend Developer",
      company: "Digital Innovations",
      location: "Cebu City",
      period: "2020 - 2022",
      description: "Developed and maintained RESTful APIs and database systems. Worked with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built RESTful APIs with 99.9% uptime",
        "Implemented automated testing reducing bugs by 45%",
        "Optimized database queries improving performance by 35%"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      location: "Manila",
      period: "2019 - 2020",
      description: "Assisted in developing web applications and gained experience in modern web technologies. Contributed to various client projects.",
      achievements: [
        "Developed responsive front-end interfaces",
        "Participated in agile development processes",
        "Collaborated on 5+ client projects"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Biliran Province State University",
      location: "Naval, Biliran",
      period: "2015 - 2019",
      description: "Graduated with honors. Specialized in software development and database systems.",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "Lead developer in capstone project",
        "Active member of Computer Science Society"
      ]
    }
  ];

  const currentData = activeTab === "experience" ? experiences : education;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "experience"
                  ? "bg-primary-600 dark:bg-primary-500 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "education"
                  ? "bg-primary-600 dark:bg-primary-500 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-400 dark:from-primary-500 dark:to-primary-300"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {currentData.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                          {activeTab === "experience" ? (
                            <FiBriefcase className="mr-2" />
                          ) : (
                            <FiMapPin className="mr-2" />
                          )}
                          {item.company || item.school}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                        <FiCalendar className="mr-2" />
                        {item.period}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                      <FiMapPin className="mr-2" />
                      {item.location}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
