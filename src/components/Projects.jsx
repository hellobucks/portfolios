"use client";

export default function Projects() {
  const projects = [
    {
      name: "Procurement System",
      description:
        "A full-stack system to manage supplier bidding, RFQ uploads, and purchase order tracking for streamlined procurement processes.",
      tech: ["Next.js", "Spring Boot", "MySQL"],
      link: "#",
      status: "Repository Available",
    },
    {
      name: "Anxiety Monitoring System",
      description:
        "Campus-based web application for tracking student and employee anxiety levels through digital surveys and generating reports for timely mental health support.",
      tech: ["TailwindCSS", "Laravel", "MySQL"],
      link: "#",
      status: "Demo Available",
    },
    {
      name: "Human Resource Management System",
      description:
        "Enterprise HRMS designed to manage employee records, payroll processing, and performance tracking with integrated backend scalability.",
      tech: ["Next.js", "Java", "Groovy", "MySQL", "MongoDB"],
      link: "#",
      status: "Repository Available",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-lg bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200"
                >
                  {project.status}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
