import type { Metadata } from "next";
import SideBar from "@/components/SideBar";
import "./globals.css";
import Header from "@/components/Header";
import SideBarProvider from "@/context/SideBarProvider";
import MobileSideBar from "@/components/SideBar/MobileSideBar";
import pic from "../../public/images/animated-coding-pic3.gif";

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
            <body className="min-h-[100vh] text-white sm:grid Homepage-grid font-Poppins">
                <div className="relative">
                    <SideBar />
                </div>
                <main
                    className="relative"
                    style={{
                        backgroundImage: `url(${pic.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        zIndex: "1",
                    }}
                >
                    <div className="children-overlay"></div>
                    <SideBarProvider>
                        <>
                            <Header />
                            <MobileSideBar />
                        </>
                    </SideBarProvider>
                    <div className="mt-10">{children}</div>
                </main>
            </body>
        </html>
    );
}
