"use client";
import CopyToClipboard from "@/components/CopyToClipboard";
import pic from "../../../public/Godwin-aiPic3.png";
import Image from "next/image";

const page = () => {
    return (
        <section className="flex justify-around">
            <div className="space-y-5">
                <h1 className="text-6xl tracking-tighter sm:tracking-normal">
                    Contact me
                </h1>
                <p>
                    Copy my email address and send me an email, for freelance,
                    collaborations and gigs
                </p>
                <CopyToClipboard copyValue="godwinemeribe23@gmail.com" />
            </div>
            <Image
                src={pic}
                alt="An AI generated picture of Godwin Emeribe"
                height={300}
                width={400}
                className="hidden sm:block"
            ></Image>
        </section>
    );
};

export default page;
