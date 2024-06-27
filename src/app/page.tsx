"use client";
import Image from "next/image";
import pic from "../../public/images/animated-coding-pic4.gif";
import Button from "@/components/Button";
import { FaDownload } from "react-icons/fa";

export default function Home() {
    return (
        <section
            aria-label="Portfolio homepage"
            className="flex justify-between min-h-[100vh] sm:min-h-fit"
        >
            <div className="flex flex-col gap-20 sm:text-left sm:w-[60%] animate-div">
                <h1 className="text-red-500 text-6xl tracking-tighter font-Oswald italic">
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
                alt="An animated coding picture"
                height={600}
                width={500}
                className="hidden sm:block rounded-xl"
                unoptimized
            />
        </section>
    );
}
