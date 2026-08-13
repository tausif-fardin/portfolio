import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jakarta",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
    title: "Tausif Fardin | Backend Developer",
    description:
        "Portfolio of Tausif Fardin — Backend Developer specializing in Node.js, NestJS, and scalable API architecture.",
    keywords: ["backend developer", "Node.js", "NestJS", "API", "portfolio", "Tausif Fardin"],
    openGraph: {
        title: "Tausif Fardin | Backend Developer",
        description: "Building robust, scalable backend systems.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${inter.variable} ${jakarta.variable}`}
        >
            <body className={`${jakarta.className} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="min-h-screen flex flex-col bg-background text-foreground">
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
