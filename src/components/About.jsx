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

        [
  `Hello! I’m a dedicated backend developer with a strong focus on building reliable, efficient, and scalable systems. I enjoy designing and optimizing databases and creating robust backend architectures that power real-world applications.

I graduated from Biliran Province State University, where I developed a solid foundation in programming and database technologies, gaining hands-on experience in building solutions that prioritize performance and data integrity.

Over time, I’ve sharpened my skills in SQL, MongoDB, API development, and system design. My goal is to create backend systems that are both powerful and easy to maintain, ensuring smooth and efficient application performance.

Outside of coding, I enjoy exploring new backend technologies, improving my database skills, and finding smarter ways to solve complex problems.`


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
