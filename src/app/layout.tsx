import type { Metadata } from "next";
import "./globals.css";

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
            <body className="text-white">{children}</body>
        </html>
    );
}
