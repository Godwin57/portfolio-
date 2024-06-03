import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
    return (
        <main className="px-6">
            <Header />
            <section aria-label="A little about me" className="mt-4">
                <div>
                    <h1 className="text-2xl font-bold ">
                        Hi. I am Godwin Emeribe
                    </h1>
                </div>
                {/* <Image></Image> */}
            </section>
        </main>
    );
}
