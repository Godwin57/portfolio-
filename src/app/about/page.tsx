import Image from "next/image";
import pic from "../../../public/Godwin-aiPic3.png";
import Link from "next/link";

const page = () => {
    return (
        <section className="sm:flex justify-center sm:gap-10 pb-10 sm:pb-0">
            <Image
                src={pic}
                alt="An AI generated picture of Godwin Emeribe"
                height={300}
                width={400}
                className="hidden sm:block border-4 border-red-500 border-circle"
            />
            <div className="sm:w-[50%] flex flex-col gap-10 animate-div">
                <div>
                    <h1 className="text-6xl sm:text-8xl tracking-tighter">
                        About me
                    </h1>
                    <p className="font-bold text-2xl sm:text-xl mt-3">
                        Hi. I&apos;m Godwin.{" "}
                        <span className="text-red-500">
                            A frontend developer, in love with crafting
                            accessible websites
                        </span>
                    </p>
                </div>
                <div className="text-xl sm:text-sm space-y-3">
                    <p>
                        Hi there! I&apos;m Godwin, a frontend web developer and
                        a music lover from Africa with about 2-3 years of
                        experience in writing softwares.
                    </p>
                    <p>
                        I enjoy writing code to develop and convert figma
                        designs &apos;pixel-perfectly&apos; into websites that
                        solves real world problems.
                    </p>
                    <p>
                        Apart from writing codes, I play guitar and chess in my
                        free time.
                    </p>
                </div>
                <Link
                    href="/contact"
                    className="text-xl sm:text-sm font-bold px-3 py-3 border-4 border-red-500 w-max m-auto sm:m-0 hover:border-red-400"
                >
                    Contact me
                </Link>
            </div>
        </section>
    );
};

export default page;
