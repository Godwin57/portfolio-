"use client";
import Image from "next/image";
import pic from "../../public/images/animated-coding-pic4.gif";
import Button from "@/components/Button";
import { FaDownload } from "react-icons/fa";

export default function Home() {
    return (
        <section
            aria-label="Portfolio homepage"
            className="min-h-[100vh] sm:min-h-fit px-10 flex"
        >
            <div className="flex flex-col gap-10 sm:text-left sm:min-w-[60%] animate-div">
                <h1 className="text-red-500 text-4xl sm:text-6xl font-Oswald italic">
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
                    className="p-1 w-max border-4 border-red-500 hover:border-red-400 mx-auto sm:m-0"
                    icon={<FaDownload className="text-red-500" />}
                />
            </div>
            <Image
                src={pic}
                alt="An animated coding picture"
                height={300}
                width={300}
                className="hidden sm:block xl:hidden rounded-xl"
                unoptimized
            />
            <Image
                src={pic}
                alt="An animated coding picture"
                height={600}
                width={500}
                className="hidden xl:block rounded-xl"
                unoptimized
            />
        </section>
    );
}
