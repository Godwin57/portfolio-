"use client";
import Header from "@/components/Header";
import Image from "next/image";
import pic from "../../public/Godwin-aiPic3.png";
import SideBar from "@/components/SideBar";
import AnimatedCustomizedText from "@/components/custom/AnimatedCustomizedText";

export default function Home() {
    return (
        <main className="bg-zinc-800 sm:grid Homepage-grid">
            <SideBar />
            <div className="px-10">
                <Header />
                <section
                    aria-label="A little about me"
                    className="mt-10 flex justify-between"
                >
                    <div className="sm:max-w-[70%]">
                        <div className="sm:w-[95%]">
                            <AnimatedCustomizedText />
                        </div>
                        {/* <h1 className="text-6xl font-bold ">
                            Hi. I am Godwin Emeribe
                        </h1> */}

                        <p className="">
                            A passionate frontend developer with love for
                            creating beautiful, responsive and accessible
                            websites
                        </p>
                    </div>
                    <Image
                        src={pic}
                        alt="An AI generated picture of Godwin Emeribe"
                        height={300}
                        width={400}
                        className="bg-red-900 hidden sm:block"
                    ></Image>
                </section>
            </div>
        </main>
    );
}
