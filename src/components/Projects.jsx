"use client";

import { useState } from "react";
import { FiExternalLink, FiGithub, FiFilter } from "react-icons/fi";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      name: "Procurement Management System",
      description: "Enterprise-grade procurement platform with supplier management, RFQ processing, and purchase order tracking. Features real-time analytics and automated workflows.",
      tech: ["Next.js", "Spring Boot", "MySQL", "Redis"],
      category: "fullstack",
      image: "/project1.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Buck33ts",
      featured: true
    },
    {
      id: 2,
      name: "Mental Health Monitoring Platform",
      description: "Campus-focused mental health assessment system with AI-powered sentiment analysis, real-time reporting, and intervention management for educational institutions.",
      tech: ["React", "Laravel", "MySQL", "Python"],
      category: "fullstack",
      image: "/project2.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Buck33ts",
      featured: true
    },
    {
      id: 3,
      name: "HR Management Suite",
      description: "Comprehensive HRMS with payroll processing, performance tracking, employee management, and advanced analytics dashboard for enterprise organizations.",
      tech: ["Next.js", "Java", "MongoDB", "PostgreSQL"],
      category: "fullstack",
      image: "/project3.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Buck33ts",
      featured: false
    },
    {
      id: 4,
      name: "Real-time Analytics Dashboard",
      description: "High-performance data visualization platform with real-time metrics, custom reporting, and predictive analytics for business intelligence.",
      tech: ["TypeScript", "Node.js", "WebSocket", "D3.js"],
      category: "frontend",
      image: "/project4.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Buck33ts",
      featured: false
    },
    {
      id: 5,
      name: "API Gateway Service",
      description: "Microservices API gateway with authentication, rate limiting, request routing, and comprehensive monitoring for distributed systems.",
      tech: ["Go", "Docker", "Kubernetes", "Redis"],
      category: "backend",
      image: "/project5.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Buck33ts",
      featured: false
    },
    {
      id: 6,
      name: "E-commerce Platform",
      description: "Scalable e-commerce solution with inventory management, payment processing, order tracking, and admin dashboard for online retailers.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      category: "fullstack",
      image: "/project6.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Buck33ts",
      featured: false
    }
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "fullstack", label: "Full Stack" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);
  const displayProjects = filter === "all" && featuredProjects.length > 0 
    ? featuredProjects 
    : filteredProjects;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing expertise in modern web development, 
            system architecture, and user experience design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-1">
            <FiFilter className="ml-3 mr-2 text-gray-500 dark:text-gray-400" />
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  filter === category.value
                    ? "bg-primary-600 dark:bg-primary-500 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 opacity-50">
                    {project.name.charAt(0)}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 dark:bg-primary-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200"
                  >
                    <FiExternalLink className="mr-2" size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FiGithub className="mr-2" size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filter === "all" && projects.length > featuredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setFilter("all")}
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-medium rounded-full hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-white dark:hover:text-white transition-all duration-300"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
