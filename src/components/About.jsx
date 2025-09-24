"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-50 dark:via-gray-100 dark:to-gray-50 transition-colors duration-500 overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 sm:mb-8 break-words">
          <span className="text-white dark:text-gray-900">About Me</span>
          <div className="mt-2 h-1 w-14 sm:w-16 bg-blue-500 dark:bg-blue-600 mx-auto rounded"></div>
        </h2>

        {/* Content Card */}
        <div className="bg-gray-800/60 dark:bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-5 sm:p-8 md:p-12 flex flex-col gap-6">

          {[
            "Hello! I’m a passionate web developer with a strong focus on creating modern, responsive, and user-friendly websites. I love transforming ideas into clean, functional, and visually appealing digital experiences.",
            "I graduated from Biliran Province State University, where I built a solid foundation in web technologies and gained hands-on experience developing projects that highlight usability, performance, and real-world solutions.",
            "Over time, I’ve honed my skills in front-end development, UI/UX design, and performance optimization. My goal is to craft web applications that combine great design with seamless user experiences.",
            "Outside of coding, I enjoy exploring new technologies, sharpening my design skills, and continuously learning how to make the web faster, smarter, and more engaging."
          ].map((text, i) => (
            <p
              key={i}
              className="text-gray-300 dark:text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed max-w-prose mx-auto break-words"
            >
              {text.split(" ").map((word, idx) =>
                word.includes("web developer") ||
                word.includes("Biliran") ||
                word.includes("front-end") ||
                word.includes("new technologies") ? (
                  <span
                    key={idx}
                    className="font-semibold text-blue-400 dark:text-blue-600"
                  >
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
