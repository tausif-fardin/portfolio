import "./globals.css";

import Navbar from "@/components/nav-bar";
//👇 Import Open Sans font
import { Open_Sans } from "next/font/google";

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tausif Fardin",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
