"use client";
import { createContext, SetStateAction, useState } from "react";
import { SideBarContextType } from "@/types/contextTypes";

export const SideBarContext = createContext<SideBarContextType>({
    isOpen: false,
    setIsOpen: function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
});

const SideBarProvider = ({ children }: { children: JSX.Element }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </SideBarContext.Provider>
    );
};

export default SideBarProvider;
