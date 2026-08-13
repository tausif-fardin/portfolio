import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "var(--font-geist-sans)",
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
            fontSize: {
                // Named long-form sizes with paired line-heights, so body copy
                // stops relying on ad-hoc text-[15px] + leading-relaxed pairs.
                body: ["0.9375rem", { lineHeight: "1.7" }],
                lead: ["1.0625rem", { lineHeight: "1.6" }],
            },
            maxWidth: {
                content: "56rem",
                // ~70 characters at 15px Inter. Deliberately rem, not ch: `ch`
                // measures the digit zero, which is wider than Inter's average
                // lowercase glyph, so 68ch would render nearer 82 characters.
                measure: "34rem",
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
