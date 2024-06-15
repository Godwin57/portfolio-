import type { Metadata } from "next";
import SideBar from "@/components/SideBar";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "Godwin's Portfolio",
    description:
        "Created by Godwin Emeribe. A front end web developer with a passion for developing responsive and accessible web applications",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-zinc-800 min-h-[100vh] text-white sm:grid Homepage-grid">
                <SideBar />
                <main className="px-10">
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    );
}
