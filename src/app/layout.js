import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/nav-bar";
import { Source_Sans_3 } from "next/font/google";

const roboto = Source_Sans_3({
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tausif Fardin",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
