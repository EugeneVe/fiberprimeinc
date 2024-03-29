import React, { createContext, useState } from "react";

export const MenuOpenContext = createContext();

export const MenuOpenProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [linksList, setLinksList] = useState(false);

    const menuToggle = () => setOpen(!open);

    return <MenuOpenContext.Provider value={{ open, setOpen, menuToggle, linksList, setLinksList }}>{children}</MenuOpenContext.Provider>;
};
