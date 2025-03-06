import type { Metadata } from "next";
import "./globals.css"; // Ensure you have global styles
import Navbar from "./components/NavBar/navbar"
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}
