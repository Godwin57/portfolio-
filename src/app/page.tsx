"use client";
import Image from "next/image";
import pic from "../../public/Godwin-aiPic3.png";
import AnimatedCustomizedText from "@/components/custom/AnimatedCustomizedText";
import Button from "@/components/Button";
import { FaDownload } from "react-icons/fa";

export default function Home() {
    return (
        <section
            aria-label="A little about me"
            className="flex justify-between"
        >
            <div className="flex flex-col gap-20 sm:text-left sm:w-[60%]">
                {/* <AnimatedCustomizedText /> */}
                <h1 className={`text-red-500 text-6xl tracking-tighter`}>
                    Hi there. I&apos;m Godwin Emeribe
                </h1>

                <p className="text-lg w-[100%]">
                    A passionate frontend developer with love for creating
                    highly performant, responsive and accessible websites using
                    latest technologies and whatever is needed to get the job
                    done.
                </p>

                <Button
                    name="Download CV"
                    className="p-1 w-max border-4 border-red-500 hover:border-red-400 m-auto sm:m-0"
                    icon={<FaDownload className="text-red-500" />}
                />
            </div>
            <Image
                src={pic}
                alt="An AI generated picture of Godwin Emeribe"
                height={300}
                width={400}
                className="hidden sm:block"
            />
        </section>
    );
}
