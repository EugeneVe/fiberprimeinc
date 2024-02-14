import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [themeSwith, setThemeSwith] = useState(() => localStorage.getItem("light-dark") === "true");

    useEffect(() => {
        localStorage.setItem("light-dark", themeSwith);
        if (themeSwith) {
            document.documentElement.classList.add("dark-theme");
        } else {
            document.documentElement.classList.remove("dark-theme");
        }
    }, [themeSwith]);

    return <ThemeContext.Provider value={[themeSwith, setThemeSwith]}>{props.children}</ThemeContext.Provider>;
};
