import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "var(--font-sans)",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "Segoe UI",
                    "sans-serif",
                ],
                mono: [
                    "var(--font-mono)",
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "monospace",
                ],
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                surface: "hsl(var(--surface))",
                muted: "hsl(var(--muted))",
                border: "hsl(var(--border))",
                accent: "hsl(var(--accent))",
            },
            maxWidth: {
                content: "56rem",
            },
            keyframes: {
                "fade-up": {
                    from: { opacity: "0", transform: "translateY(0.75rem)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
            },
        },
    },
    plugins: [],
};

export default config;
