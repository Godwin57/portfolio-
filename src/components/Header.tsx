"use client";
import { SideBarContext } from "@/context/SideBarProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const currentPath = usePathname();
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    return (
        <header className="flex justify-between py-4 font-Merriweather italic">
            <h1 className="font-bold text-2xl cursor-pointer">Godwin</h1>
            <ul className="hidden sm:flex gap-x-6">
                <li>
                    <Link
                        href={"/"}
                        className={` ${currentPath === "/" && "text-red-500"} `}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href={"about"}
                        className={` ${
                            currentPath === "/about" && "text-red-500"
                        } `}
                    >
                        About
                    </Link>
                </li>
                <li>
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
            {!isOpen && (
                <GiHamburgerMenu
                    className="sm:hidden font-bold text-2xl cursor-pointer"
                    onClick={() => {
                        setIsOpen(() => true);
                    }}
                />
            )}
        </header>
    );
};

export default Header;
