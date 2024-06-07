import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    return (
        <header className="flex justify-between py-4">
            <h1 className="font-bold">Godwin</h1>
            <ul className="hidden sm:block">
                <li className="gap-x-6 flex">
                    <Link href={"/"}>Home</Link>
                    <Link href={"about"}>About</Link>
                    <Link href={"contact"}>Contact</Link>
                </li>
            </ul>
            <GiHamburgerMenu className="sm:hidden" />
        </header>
    );
};

export default Header;
