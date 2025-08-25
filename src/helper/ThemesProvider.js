"use client";
import '@/app/themes.css';
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function DarkThemeProvider({ children }) {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode !== null) {
            setTheme(JSON.parse(savedMode));
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark", theme);
        document.body.classList.toggle("light", !theme);
        localStorage.setItem("darkMode", JSON.stringify(theme));
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
