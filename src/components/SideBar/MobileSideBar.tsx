"use client";
import Link from "next/link";
import { SideBarContext } from "@/context/SideBarProvider";
import { useContext, useEffect, useRef } from "react";
import { MdCancel } from "react-icons/md";
import { usePathname } from "next/navigation";
import URLarr from "@/constants/urls";

const MobileSideBar = () => {
    const { isOpen, setIsOpen } = useContext(SideBarContext);
    const currentPath = usePathname();
    const mobileSideBarRef = useRef(null);

    const handleWindowClick = (event: globalThis.MouseEvent) => {
        if (
            mobileSideBarRef?.current &&
            !mobileSideBarRef.current.contains(event.target)
        ) {
            setIsOpen(() => false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleWindowClick);
        } else {
            document.removeEventListener("mousedown", handleWindowClick);
        }

        return () =>
            document.removeEventListener("mousedown", handleWindowClick);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return (
        <aside className="font-Oswald">
            {isOpen && (
                <div
                    ref={mobileSideBarRef}
                    className="absolute right-0 top-0 p-5  min-h-[100vh] h-[100%] flex flex-col tracking-wide items-center gap-[10vh] Mobile-Sidebar"
                >
                    <MdCancel
                        className="sm:hidden font-bold text-2xl cursor-pointer"
                        onClick={() => {
                            setIsOpen(() => false);
                        }}
                    />
                    <ul className="flex flex-col gap-[10vh]">
                        <li>
                            <Link
                                href={"/"}
                                className={` ${
                                    currentPath === "/" && "text-red-500"
                                } `}
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
                    <ul className="flex flex-col gap-[10vh]">
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
                </div>
            )}
        </aside>
    );
};

export default MobileSideBar;
