import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AITrain — AI Automation | Automate ops, leads, and support",
  description:
    "AITrain builds custom AI agents, automations, and integrations to drive revenue and efficiency. Fast delivery, measurable ROI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-white antialiased h-full w-full")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
