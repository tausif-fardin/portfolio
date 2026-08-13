"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionTitle({ title, subtitle, centered = false }) {
    return (
        <motion.div
            className={cn("space-y-3", centered && "text-center")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {title}
            </h2>
            {subtitle && (
                <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
            {/* Accent bar */}
            <div className={cn("flex gap-1 pt-1", centered && "justify-center")}>
                <div className="h-1 w-10 rounded-full gradient-brand" />
                <div className="h-1 w-4 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
        </motion.div>
    );
}
