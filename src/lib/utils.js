import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);

    if (element) {
        // Close mobile nav if it's open
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu && mobileMenu.classList.contains("block")) {
            mobileMenu.classList.replace("block", "hidden");
        }

        // Calculate offset with respect to navbar height
        const navbarHeight = 64; // Approx height of navbar in pixels
        const offsetPosition =
            element.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
}
