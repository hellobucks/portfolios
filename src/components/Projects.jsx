"use client";

export default function Projects() {
  const projects = [
    {
      name: "Procurement System",
      description:
        "A full-stack system to manage supplier bidding, RFQ uploads, and purchase order tracking for streamlined procurement.",
      tech: ["Next.js", "Spring Boot", "MySQL"],
      link: "#", // Replace with GitHub repo or docs
      status: "Repository Available",
    },
    {
      name: "Anxiety Monitoring System",
      description:
        "A campus-based web application designed to track and assess the anxiety levels of students and employees. It provides digital surveys, generates reports, and helps administrators monitor mental well-being for timely support and interventions.",
      tech: ["TailwindCSS", "Laravel (PHP)", "MySQL"],
      link: "#", // Replace with GitHub repo or PDF documentation
      status: "Demo Unavailable – Backend Required",
    },
    {
      name: "Human Resource Management System",
      description:
        "An enterprise HRMS designed to manage employee records, payroll, and performance tracking with an integrated backend for scalability.",
      tech: ["Next.js", "Java", "Groovy", "MySQL", "MongoDB"],
      link: "#", // Replace with GitHub repo or docs
      status: "Repository Available",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-900 dark:bg-gray-100 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white dark:text-gray-900 mb-12">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-gray-800 dark:bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-3">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 dark:text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/20 dark:bg-blue-600/20 text-blue-400 dark:text-blue-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project */}
              <a
                href={project.link}
                className="mt-auto inline-block px-5 py-2 rounded-lg bg-blue-500 text-white dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300 shadow-md text-center"
              >
                {project.status}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
