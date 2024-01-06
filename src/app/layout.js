import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/nav-bar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tausif Fardin",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
