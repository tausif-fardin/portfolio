"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./section-title";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage({
                type: "success",
                message:
                    "Message sent successfully! I'll get back to you soon.",
            });

            setFormData({ name: "", email: "", subject: "", message: "" });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitMessage({ type: "", message: "" });
            }, 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <EnvelopeIcon className="h-6 w-6 text-primary" />,
            title: "Email",
            details: "tausif.fardin@outlook.com",
            link: "mailto:tausif.fardin@outlook.com",
        },
        {
            icon: <MapPinIcon className="h-6 w-6 text-primary" />,
            title: "Location",
            details: "Dhaka, Bangladesh",
            link: "https://maps.app.goo.gl/6JAT5kajQAzJ5pyo6",
        },
    ];

    return (
        <section
            id="contact"
            className="py-16 md:py-24 bg-white dark:bg-gray-900"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="I'm always open to discussing new projects, opportunities and partnerships."
                    centered
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                            Send Me a Message
                        </h3>

                        {submitMessage.type && (
                            <div
                                className={`p-4 mb-6 rounded-md ${
                                    submitMessage.type === "success"
                                        ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                        : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                }`}
                            >
                                {submitMessage.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 border border-transparent font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="space-y-8">
                            <div className="prose prose-lg dark:prose-invert">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    Let&apos;s Connect
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    I&apos;m currently available for freelance
                                    work and full-time positions. If you have a
                                    project that needs a backend developer or
                                    looking to hire, feel free to reach out
                                    using the contact form or through any of the
                                    channels below.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl space-y-6">
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target={
                                            item.title !== "Phone"
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel="noopener noreferrer"
                                        className="flex items-start space-x-4 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-md transition-colors duration-200"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {item.details}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                                    Find Me On
                                </h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/tausif-fardin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full transition-colors duration-200"
                                        aria-label="GitHub"
                                    >
                                        <svg
                                            className="h-6 w-6 text-gray-700 dark:text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/tausif-fardin/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full transition-colors duration-200"
                                        aria-label="LinkedIn"
                                    >
                                        <svg
                                            className="h-6 w-6 text-gray-700 dark:text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://twitter.com/SinhaFardin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full transition-colors duration-200"
                                        aria-label="Twitter"
                                    >
                                        <svg
                                            className="h-6 w-6 text-gray-700 dark:text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a
                                        href="mailto:tausif.fardin@outlook.com"
                                        className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full transition-colors duration-200"
                                        aria-label="Email"
                                    >
                                        <svg
                                            className="h-6 w-6 text-gray-700 dark:text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
