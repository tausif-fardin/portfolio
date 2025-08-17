"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Send,
    Github,
    Linkedin,
    Twitter,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import SectionTitle from "./section-title";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
                message: "Thanks for reaching out! I'll get back to you soon.",
            });

            setFormData({ name: "", email: "", message: "" });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitMessage({ type: "", message: "" });
            }, 5000);
        }, 1500);
    };

    const contactMethods = [
        {
            icon: <Mail className="h-5 w-5" />,
            label: "Email",
            value: "tausiffardin12@outlook.com",
            href: "mailto:tausiffardin12@outlook.com",
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            label: "Location",
            value: "Dhaka, Bangladesh",
            href: "https://maps.app.goo.gl/6JAT5kajQAzJ5pyo6",
        },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com/tausif-fardin",
            color: "hover:text-gray-900 dark:hover:text-white",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://www.linkedin.com/in/tausif-fardin/",
            color: "hover:text-blue-600",
        },
        {
            name: "Twitter",
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com/SinhaFardin",
            color: "hover:text-blue-400",
        },
    ];

    return (
        <section
            id="contact"
            className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Let's Work Together"
                    subtitle="Ready to bring your next project to life? I'd love to hear from you."
                />

                <div className="max-w-4xl mx-auto mt-16">
                    {/* Main Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-neutral-900 rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800 overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                            {/* Contact Form */}
                            <div className="lg:col-span-3 p-8 lg:p-12">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Send a Message
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Tell me about your project and
                                        let&apos;s discuss how we can work
                                        together.
                                    </p>
                                </div>

                                {submitMessage.type && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center gap-3 p-4 mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                                    >
                                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                                        <span className="text-green-800 dark:text-green-200 font-medium">
                                            {submitMessage.message}
                                        </span>
                                    </motion.div>
                                )}

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                            required
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900 p-8 lg:p-12">
                                <div className="h-full flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                            Get in Touch
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                            I&apos;m always excited to discuss
                                            new opportunities and interesting
                                            projects. Whether you have a
                                            question or just want to say hello,
                                            feel free to reach out!
                                        </p>

                                        {/* Contact Methods */}
                                        <div className="space-y-4 mb-8">
                                            {contactMethods.map(
                                                (method, index) => (
                                                    <motion.a
                                                        key={index}
                                                        href={method.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        initial={{
                                                            opacity: 0,
                                                            x: -20,
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        transition={{
                                                            delay: index * 0.1,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-neutral-700/50 transition-colors group"
                                                    >
                                                        <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                                            {method.icon}
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                {method.label}
                                                            </div>
                                                            <div className="font-semibold text-gray-900 dark:text-white">
                                                                {method.value}
                                                            </div>
                                                        </div>
                                                    </motion.a>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div>
                                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                                            Follow Me
                                        </h5>
                                        <div className="flex gap-3">
                                            {socialLinks.map(
                                                (social, index) => (
                                                    <motion.a
                                                        key={index}
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        initial={{
                                                            opacity: 0,
                                                            y: 20,
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            delay: index * 0.1,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        className={`p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-gray-600 dark:text-gray-400 ${social.color}`}
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.95,
                                                        }}
                                                    >
                                                        {social.icon}
                                                    </motion.a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Contact Options */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                    >
                        <motion.a
                            href="mailto:tausiffardin12@outlook.com"
                            className="group flex items-center justify-between p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-lg"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">
                                        Quick Email
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Drop me a line directly
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/tausif-fardin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <Linkedin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">
                                        LinkedIn
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Connect professionally
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
