import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ChatAgent from "./components/ChatAgent";

export const metadata: Metadata = {
  title: "Amoor Consulting Group | Sales & Leadership Organization",
  description: "Amoor Consulting Group develops ambitious individuals into confident sales professionals and future leaders through mentorship, real income, and community impact.",
  keywords: "sales jobs OKC, leadership development, sales careers Oklahoma, Amoor Consulting, sales training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <ChatAgent />
      </body>
    </html>
  );
}