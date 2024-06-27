import { SetStateAction } from "react";

export interface SideBarContextType {
    isOpen: Boolean;
    setIsOpen: (value: SetStateAction<boolean>) => void;
}
