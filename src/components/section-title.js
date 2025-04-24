"use client";

import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, centered = false }) => {
    return (
        <motion.div
            className={`mb-12 ${centered ? "text-center" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {title}
            </h2>
            {subtitle && (
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                    {subtitle}
                </p>
            )}
            <div className="h-1 w-20 bg-primary mt-4"></div>
        </motion.div>
    );
};

export default SectionTitle;
