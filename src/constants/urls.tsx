import { URLarrTypes } from "@/types/component-types";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const URLarr: URLarrTypes[] = [
    {
        name: "Github",
        link: "https://github.com",
        icon: <FaGithub />,
    },
    {
        name: "Twitter",
        link: "https://x.com",
        icon: <FaSquareXTwitter />,
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com",
        icon: <FaLinkedinIn />,
    },
];

export default URLarr;
