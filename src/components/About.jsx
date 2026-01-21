"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Hello! I&apos;m a dedicated <span className="font-semibold text-primary-600 dark:text-primary-400">backend developer</span> with a strong focus on building reliable, efficient, and scalable systems. I enjoy designing and optimizing databases and creating robust backend architectures that power real-world applications.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I graduated from <span className="font-semibold text-primary-600 dark:text-primary-400">Biliran Province State University</span>, where I developed a solid foundation in programming and database technologies, gaining hands-on experience in building solutions that prioritize performance and data integrity.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Over time, I&apos;ve sharpened my skills in SQL, MongoDB, API development, and system design. My goal is to create backend systems that are both powerful and easy to maintain, ensuring smooth and efficient application performance.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Outside of coding, I enjoy exploring <span className="font-semibold text-primary-600 dark:text-primary-400">new technologies</span>, improving my database skills, and finding smarter ways to solve complex problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
