import URLarr from "@/constants/urls";
import Link from "next/link";

const SideBar = () => {
    return (
        <aside
            aria-label="Useful Links"
            className="hidden sm:block h-[100vh] w-[60px] sideBar-bg fixed top-0 left-0"
        >
            <ul className="mt-10 flex flex-col px-4 py-4 justify-center items-center gap-[30vh]">
                {URLarr.map(({ name, icon, link }) => (
                    <a
                        href={`${link}`}
                        className="text-3xl"
                        aria-label={`${name} icon`}
                        key={name}
                    >
                        {icon}
                    </a>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
