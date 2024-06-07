export interface ButtonProps {
    name?: string;
    type?: "button" | "submit";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    width?: string;
    disabled?: boolean;
}

export interface URLarrTypes {
    name: string;
    link: string;
    icon: JSX.Element;
}
