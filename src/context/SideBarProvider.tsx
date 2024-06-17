"use client";
import { createContext, useState } from "react";
import { SideBarContextType } from "@/types/contextTypes";

export const SideBarContext = createContext<SideBarContextType>({});
// export const SideBarContext = createContext<SideBarContextType>({
//     isOpen: false,
//     setIsOpen:(prevState: boolean) => void
// });

const SideBarProvider = ({ children }: { children: JSX.Element }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </SideBarContext.Provider>
    );
};

export default SideBarProvider;
