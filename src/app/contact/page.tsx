"use client";
import CopyToClipboard from "@/components/CopyToClipboard";

const page = () => {
    return (
        <section className="min-h-[100vh] sm:bg-none sm:bg-transparent sm:min-h-fit px-7">
            <div className="space-y-10 sm:space-y-5 animate-div">
                <h1 className="text-6xl tracking-tighter sm:tracking-normal text-red-500 font-Oswald italic">
                    Contact me
                </h1>
                <p className="text-xl">
                    Copy my email address and send me an email. I&apos;m
                    currently available for freelance, collaborations and gigs
                </p>
                <div className="flex items-center justify-center sm:block">
                    <CopyToClipboard
                        copyValue="godwinemeribe23@gmail.com"
                        className=""
                    />
                </div>
            </div>
        </section>
    );
};

export default page;
