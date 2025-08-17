import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';

// Modern sans-serif for body text
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: '--font-inter',
});

// Elegant serif for headings
const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: '--font-playfair',
});

export const metadata = {
    title: "Tausif Fardin | Backend Developer",
    description:
        "Portfolio of Tausif Fardin, Backend Developer specializing in Node.js, NestJS, and database technologies",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900">
                        <Navbar />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
