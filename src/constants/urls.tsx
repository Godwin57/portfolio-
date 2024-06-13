import { URLarrTypes } from "@/types/component-types";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const URLarr: URLarrTypes[] = [
    {
        name: "Github",
        link: "github.com",
        icon: <FaGithub />,
    },
    {
        name: "Twitter",
        link: "x.com",
        icon: <FaSquareXTwitter />,
    },
    {
        name: "LinkedIn",
        link: "linkedin.com",
        icon: <FaLinkedinIn />,
    },
];

export default URLarr;