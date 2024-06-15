"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const currentPath = usePathname();

    return (
        <header className="flex justify-between py-4 mb-10">
            <h1 className="font-bold text-2xl cursor-pointer">Godwin</h1>
            <ul className="hidden sm:block">
                <li className="gap-x-6 flex">
                    <Link
                        href={"/"}
                        className={` ${currentPath === "/" && "text-red-500"} `}
                    >
                        Home
                    </Link>
                    <Link
                        href={"about"}
                        className={` ${
                            currentPath === "/about" && "text-red-500"
                        } `}
                    >
                        About
                    </Link>
                    <Link
                        href={"contact"}
                        className={` ${
                            currentPath === "/contact" && "text-red-500"
                        } `}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <GiHamburgerMenu className="sm:hidden font-bold text-2xl cursor-pointer" />
        </header>
    );
};

export default Header;
