"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-50 dark:via-gray-100 dark:to-gray-50 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          <span className="text-white dark:text-gray-900">About Me</span>
          <div className="mt-2 h-1 w-20 bg-blue-500 dark:bg-blue-600 mx-auto rounded"></div>
        </h2>

        {/* Content Card */}
        <div className="bg-gray-800/60 dark:bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-gray-300 dark:text-gray-800 text-lg md:text-xl leading-relaxed mb-6 text-center md:text-left">
            Hello! I’m a{" "}
            <span className="font-semibold text-blue-400 dark:text-blue-600">
              passionate web developer
            </span>{" "}
            with a strong focus on creating modern, responsive, and user-friendly
            websites. I love transforming ideas into clean, functional, and
            visually appealing digital experiences.
          </p>

          <p className="text-gray-300 dark:text-gray-800 text-lg md:text-xl leading-relaxed mb-6 text-center md:text-left">
            I graduated from{" "}
            <span className="font-semibold text-blue-400 dark:text-blue-600">
              Biliran Province State University
            </span>
            , where I built a solid foundation in web technologies and gained
            hands-on experience developing projects that highlight usability,
            performance, and real-world solutions.
          </p>

          <p className="text-gray-300 dark:text-gray-800 text-lg md:text-xl leading-relaxed mb-6 text-center md:text-left">
            Over time, I’ve honed my skills in{" "}
            <span className="font-semibold text-blue-400 dark:text-blue-600">
              front-end development, UI/UX design, and performance optimization
            </span>
            My goal is to craft web applications that combine great design with seamless user experiences, ensuring they are both visually appealing and highly functional .
          </p>

          <p className="text-gray-300 dark:text-gray-800 text-lg md:text-xl leading-relaxed text-center md:text-left">
            Outside of coding, I enjoy exploring{" "}
            <span className="font-semibold text-blue-400 dark:text-blue-600">
              new technologies
            </span>
            , sharpening my design skills, and continuously learning how to make
            the web faster, smarter, and more engaging.
          </p>
        </div>
      </div>
    </section>
  );
}
