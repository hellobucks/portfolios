"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setStatusType("");

    const form = e.target;
    try {
      await emailjs.sendForm(
        "service_f9s2jth",
        "template_ja710k9",
        form,
        "UteHZhd09KhUJnhAu"
      );
      setStatus("✅ Message sent successfully!");
      setStatusType("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("❌ Failed to send message. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-100 transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-gray-900 mb-4 text-center">
          Contact Me
        </h2>
        <p className="text-gray-400 dark:text-gray-700 mb-10 text-center text-sm sm:text-base">
          I’d love to hear from you! Whether you have a project in mind or just
          want to say hello, feel free to reach out.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:gap-6 bg-gray-800 dark:bg-white p-6 sm:p-8 rounded-2xl shadow-lg transition-colors duration-500"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 sm:p-4 rounded-lg bg-gray-700 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-full"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 sm:p-4 rounded-lg bg-gray-700 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="p-3 sm:p-4 rounded-lg bg-gray-700 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-full"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 px-4 sm:px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              statusType === "success"
                ? "text-green-400 dark:text-green-600"
                : "text-red-400 dark:text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
