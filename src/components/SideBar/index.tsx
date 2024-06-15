import URLarr from "@/constants/urls";
import Link from "next/link";

const SideBar = () => {
    return (
        <aside
            aria-label="Useful Links"
            className="hidden sm:block bg-zinc-700 h-[100%] w-[60px]"
        >
            <ul className="mt-10 flex flex-col px-4 py-4 justify-center items-center gap-[30vh]">
                {URLarr.map(({ name, icon, link }) => (
                    <li key={name}>
                        <Link href={`${link}`}>
                            <span
                                className="text-3xl"
                                aria-label={`${name} icon`}
                            >
                                {icon}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
