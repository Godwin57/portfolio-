import URLarr from "@/constants/urls";
import Link from "next/link";

const SideBar = () => {
    return (
        <aside
            aria-label="Useful Links"
            className="hidden sm:block bg-zinc-500"
        >
            <ul>
                {URLarr.map(({ name, icon, link }) => (
                    <li key={name}>
                        <Link href={`${link}`}>
                            <span className="text-4xl">{icon}</span>
                            <p>{name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
