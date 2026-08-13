"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail, MapPin, Send, Github, Linkedin,
    Twitter, CheckCircle2, Loader2, ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";

const CONTACT_INFO = [
    {
        icon:  Mail,
        label: "Email",
        value: "tausiffardin12@outlook.com",
        href:  "mailto:tausiffardin12@outlook.com",
        color: "blue",
    },
    {
        icon:  MapPin,
        label: "Location",
        value: "Dhaka, Bangladesh",
        href:  "https://maps.app.goo.gl/6JAT5kajQAzJ5pyo6",
        color: "emerald",
    },
];

const SOCIALS = [
    { name: "GitHub",   icon: Github,   href: "https://github.com/tausif-fardin",                      color: "hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900" },
    { name: "LinkedIn", icon: Linkedin,  href: "https://www.linkedin.com/in/tausif-fardin/",             color: "hover:bg-blue-600 hover:text-white" },
    { name: "Twitter",  icon: Twitter,   href: "https://x.com/TausifFardin",                             color: "hover:bg-sky-500 hover:text-white" },
];

const colorMap = {
    blue:    "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800/40",
    emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/40",
};

export default function ContactSection() {
    const [form, setForm]             = useState({ name: "", email: "", subject: "", message: "" });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess]       = useState(false);
    const [error, setError]           = useState("");

    const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        // Simulate send (replace with real API call as needed)
        await new Promise((r) => setTimeout(r, 1400));
        setSubmitting(false);
        setSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSuccess(false), 6000);
    };

    const inputBase = cn(
        "w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800/60 text-gray-900 dark:text-white",
        "border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-500",
        "text-sm transition-all duration-200"
    );

    return (
        <section
            id="contact"
            className="section-padding bg-white dark:bg-gray-950"
        >
            <div className="container-inner">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Have a project in mind or just want to chat? I'd love to hear from you."
                />

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                    {/* ── Left: info ── */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Let&apos;s build something great</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                I&apos;m currently open to new opportunities — full-time roles, freelance projects, or consulting. My inbox is always open.
                            </p>
                        </div>

                        {/* Contact cards */}
                        <div className="space-y-3">
                            {CONTACT_INFO.map(({ icon: Icon, label, value, href, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all group"
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorMap[color]}`}>
                                        <Icon className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{value}</p>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>

                        {/* Social links */}
                        <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Connect</p>
                            <div className="flex gap-3">
                                {SOCIALS.map(({ name, icon: Icon, href, color }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        className={cn(
                                            "w-10 h-10 rounded-xl flex items-center justify-center",
                                            "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400",
                                            "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
                                            color
                                        )}
                                    >
                                        <Icon className="w-4.5 h-4.5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: form ── */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="glass-card p-8 space-y-5"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Name *</label>
                                    <input
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className={inputBase}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Email *</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className={inputBase}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Subject</label>
                                <input
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Project inquiry / Collaboration / Just saying hi"
                                    className={inputBase}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Message *</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project or idea…"
                                    className={cn(inputBase, "resize-none")}
                                />
                            </div>

                            {/* Status messages */}
                            {success && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm"
                                >
                                    <CheckCircle2 className="w-4.5 h-4.5 flex-shrink-0" />
                                    Thanks! I&apos;ll get back to you within 24 hours.
                                </motion.div>
                            )}
                            {error && (
                                <p className="text-sm text-red-500">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className={cn(
                                    "w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white",
                                    "gradient-brand hover:opacity-90 active:scale-[0.98]",
                                    "shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40",
                                    "transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                                )}
                            >
                                {submitting ? (
                                    <><Loader2 className="w-4.5 h-4.5 animate-spin" /> Sending…</>
                                ) : (
                                    <><Send className="w-4.5 h-4.5" /> Send Message</>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
