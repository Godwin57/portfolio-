import { ChangeEvent, LegacyRef } from "react";

export interface ButtonProps {
    name?: string;
    type?: "button" | "submit";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    icon?: JSX.Element;
}

export interface URLarrTypes {
    name: string;
    link: string;
    icon: JSX.Element;
}

export interface InputProps {
    error?: string;
    name?: string;
    value?: string;
    refHolder?: LegacyRef<HTMLInputElement> | undefined;
    // refHolder?: React.MutableRefObject<undefined>;
    type?: string;
    placeholder?: string;
    valueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    label?: string;
    withLabel?: boolean;
    width?: string;
    labelStyles?: string;
}
