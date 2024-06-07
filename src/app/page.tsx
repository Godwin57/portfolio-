import Header from "@/components/Header";
import Image from "next/image";
import pic from "../../public/Godwin-aiPic3.png";

export default function Home() {
    return (
        <main className="px-10">
            <Header />
            <section
                aria-label="A little about me"
                className="mt-10 flex justify-between"
            >
                <div>
                    <h1 className="text-6xl font-bold ">
                        Hi. I am Godwin Emeribe
                    </h1>
                    <p>
                        A passionate frontend developer with love for creating
                        beautiful, responsive and accessible websites
                    </p>
                </div>
                <Image
                    src={pic}
                    alt="An AI generated picture of Godwin Emeribe"
                    height={500}
                    width={700}
                ></Image>
            </section>
        </main>
    );
}
