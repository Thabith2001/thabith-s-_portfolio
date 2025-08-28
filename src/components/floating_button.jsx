"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/helper/ThemesProvider";
import {ArrowUp} from "lucide-react";

const FloatingButton = () => {
    const { theme } = useContext(ThemeContext);

    const scrollToHome = () => {
        const target = document.querySelector("#home");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition duration-300 border-2 border-[#9F36AF]
      ${theme ? "bg-[#66356E] text-white hover:bg-[#522b59]" : "bg-[#522b59] text-white hover:bg-[#66356E]"}`}
            onClick={scrollToHome}
            aria-label="Scroll to Home"
        >
            <ArrowUp className="w-6 h-6 stroke-2" />
        </button>
    );
};

export default FloatingButton;
