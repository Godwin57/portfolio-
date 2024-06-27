import { URLarrTypes } from "@/types/component-types";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const URLarr: URLarrTypes[] = [
    {
        name: "Github",
        link: "https://github.com/Godwin57",
        icon: <FaGithub />,
    },
    {
        name: "Twitter",
        link: "https://x.com/godwindotJs",
        icon: <FaSquareXTwitter />,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/godwin-emeribe-899150251/",
        icon: <FaLinkedinIn />,
    },
];

export default URLarr;
