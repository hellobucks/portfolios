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

      let message = "❌ Failed to send message. Please try again.";

      if (err?.text?.includes("user ID")) {
        message = "❌ Invalid Public Key. Check your EmailJS settings.";
      } else if (err?.text?.includes("service ID")) {
        message = "❌ Service ID not found. Verify your EmailJS service.";
      } else if (err?.text?.includes("template ID")) {
        message = "❌ Template ID mismatch. Check your template variables.";
      } else if (err?.status === 429) {
        message = "⚠️ Rate limit reached. Try again later.";
      }

      setStatus(message);
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-100 transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-gray-900 text-center">
          Contact Me
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 dark:text-gray-700 text-center text-sm sm:text-base max-w-lg mx-auto">
          I’d love to hear from you! Whether you have a project in mind or just
          want to say hello, feel free to reach out.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:gap-5 bg-gray-800 dark:bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg transition-colors duration-500"
        >
          {["Your Name", "Your Email", "Your Message"].map((placeholder, i) => {
            if (placeholder === "Your Message") {
              return (
                <textarea
                  key={i}
                  name="message"
                  placeholder={placeholder}
                  rows={5}
                  required
                  className="p-4 rounded-lg bg-gray-700 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300"
                />
              );
            }
            return (
              <input
                key={i}
                type={placeholder === "Your Email" ? "email" : "text"}
                name={placeholder === "Your Email" ? "user_email" : "user_name"}
                placeholder={placeholder}
                required
                className="p-4 rounded-lg bg-gray-700 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300"
              />
            );
          })}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 px-4 sm:px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p
            className={`mt-4 text-center text-sm sm:text-base font-medium ${
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
