"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "On-the-Job Training (OJT)",
      company: "Rameses Systems Inc.",
      period: "Jan 2024 – Jun 2024",
      details: [
        "Assisted in backend development tasks using Groovy and Spring Boot.",
        "Gained experience in API design, database integration, and debugging.",
        "Collaborated with senior developers in building procurement system features."
      ],
    },
    {
      id: 2,
      role: "Software Engineer – Backend Developer",
      company: "Rameses Systems Inc.",
      period: "Jul 2024 – Present",
      details: [
        "Responsible for designing and implementing backend modules of government systems.",
        "Developed scalable APIs using Groovy + Spring Boot integrated with MySQL.",
        "Implemented authentication, exception handling, and payroll module designs.",
        "Collaborate with frontend team to ensure smooth system integration."
      ],
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          <span className="inline-flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-blue-600" />
            Work Experience
          </span>
        </h2>

        <div className="relative border-l-2 border-blue-500">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-6"
            >
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-blue-600 border-2 border-white shadow"></div>
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-gray-600 font-medium">
                  {exp.company} • <span>{exp.period}</span>
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
