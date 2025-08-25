"use client"
import React, {useContext} from 'react';
import {ThemeContext} from "@/helper/ThemesProvider";

const Footer = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    console.log(theme);
    return (
        <footer
            className="sm:col-span-9 col-span-12 border-t-2 border-transparent w-full h-16 flex items-center justify-center gap-4"
            style={{ boxShadow: "0 -4px 6px rgba(0,0,0,0.1)" }}
        >
            <p className={`${theme?"text-[#e7b4f3]":"text-[#66356E]"} text-shadow-gray-500 text-shadow-md`}>© 2025 thabith.dev. All rights reserved.</p>
        </footer>

    );
};

export default Footer;
