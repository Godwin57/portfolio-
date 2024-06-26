"use client";
import CopyToClipboard from "@/components/CopyToClipboard";
import pic from "../../../public/Godwin-aiPic3.png";
import Image from "next/image";

const page = () => {
    return (
        <section className="min-h-[100vh] sm:bg-none sm:bg-transparent sm:min-h-fit">
            <div className="space-y-10 sm:space-y-5 animate-div">
                <h1 className="text-6xl tracking-tighter sm:tracking-normal text-red-500 font-Oswald italic">
                    Contact me
                </h1>
                <p className="text-xl">
                    Copy my email address and send me an email. I&apos;m
                    currently available for freelance, collaborations and gigs
                </p>
                <CopyToClipboard copyValue="godwinemeribe23@gmail.com" />
            </div>
        </section>
    );
};

export default page;
