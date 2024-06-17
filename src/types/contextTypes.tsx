import { Dispatch, SetStateAction } from "react";

export interface SideBarContextType {
    isOpen: Boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
