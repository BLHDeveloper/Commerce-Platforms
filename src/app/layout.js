"use client";
import "./globals.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-app="true" data-new-gr-c-s-check-loaded="8.929.0" data-gr-ext-installed="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
