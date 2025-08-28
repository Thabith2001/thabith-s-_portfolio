"use client";
import { useContext, useState, useEffect } from "react";
import { Moon, Sun, X, Menu } from "lucide-react";
import Image from "next/image";
import { ThemeContext } from "@/helper/ThemesProvider";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);
    const [activeSection, setActiveSection] = useState("home");

    // Section IDs
    const navItems = {
        Home: "#home",
        About: "#about",
        Skills: "#skill",
        Projects: "#projects",
        Achievements: "#achievements",
        Contact: "#contact",
    };

    // Scroll spy effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + window.innerHeight / 3;
            Object.values(navItems).forEach((hash) => {
                const section = document.querySelector(hash);
                if (
                    section &&
                    section.offsetTop <= scrollY &&
                    scrollY < section.offsetTop + section.offsetHeight
                ) {
                    setActiveSection(hash.replace("#", ""));
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="px-4 w-full bg-transparent border-b-2 border-transparent shadow-lg fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

                {/* Logo */}
                <h1 className="text-3xl font-bold text-outline text-shadow-gray-500 text-shadow-lg hover:cursor-pointer active:cursor-pointer" onClick={() => {
                    const target = document.querySelector("#home");
                    if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                    }
                }}>
                    Thabith.dev
                </h1>

                {/* Desktop Navigation */}
                <nav
                    className={`hidden sm:flex items-center space-x-6 border px-4 rounded-full p-2 font-bold shadow-md shadow-gray-600 ${
                        theme ? "border-[#e7b4f3] text-[#e7b4f3]" : "border-[#66356E] text-[#66356E]"
                    }`}
                >
                    {Object.entries(navItems).map(([label, hash]) => {
                        const isActive = activeSection === hash.replace("#", "");
                        return (
                            <button
                                key={label}
                                onClick={() => {
                                    const target = document.querySelector(hash);
                                    if (target) {
                                        target.scrollIntoView({ behavior: "smooth" });
                                    }
                                    setIsOpen(false);
                                }}
                                className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                                    isActive ? "underline underline-offset-4" : ""
                                }`}
                                style={{ color: isActive ? (theme ? "#e7b4f3" : "#66356E") : "inherit" }}
                            >
                                {label}
                            </button>
                        );
                    })}
                </nav>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    {/* Theme Toggle */}
                    <button aria-label="Toggle Theme"
                        className={`flex h-10 w-10 justify-center items-center bg-transparent transition border rounded-full shadow-md ${
                            theme ? "border-[#e7b4f3] shadow-[#e7b4f3]" : "border-[#66356E] shadow-[#66356E]"
                        }`}
                        onClick={() => setTheme(!theme)}
                    >
                        {theme ? (
                            <Moon className="w-6 h-6 text-[#e7b4f3]" strokeWidth={1} />
                        ) : (
                            <Sun className="w-6 h-6 text-[#66356E]" strokeWidth={1} />
                        )}
                    </button>

                    {/* Avatar */}
                    <div
                        className={`h-10 w-10 rounded-full p-1 border transition-colors duration-300 shadow-md ${
                            theme ? "border-[#e7b4f3] shadow-[#e7b4f3]" : "border-[#66356E] shadow-[#66356E]"
                        }`}
                    >
                        <Image
                            src="/images/ast.png"
                            alt="Ast"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button

                       aria-label="Toggle Mobile Menu"
                        className="sm:hidden p-2 rounded-md bg-transparent transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="text-[#66356E] w-8 h-8" />
                        ) : (
                            <Menu className="text-[#66356E] w-8 h-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav
                    className={`sm:hidden flex flex-col space-y-4 mt-4 border px-4 py-4 rounded-lg font-bold shadow-md ${
                        theme ? "border-[#e7b4f3] text-[#e7b4f3]" : "border-[#66356E] text-[#66356E]"
                    }`}
                >
                    {Object.entries(navItems).map(([label, hash]) => {
                        const isActive = activeSection === hash.replace("#", "");
                        return (
                            <button
                                aria-label={`Go to ${label}`}
                                key={label}
                                onClick={() => {
                                    const target = document.querySelector(hash);
                                    if (target) {
                                        target.scrollIntoView({ behavior: "smooth" });
                                    }
                                    setIsOpen(false);
                                }}
                                className={`text-lg font-medium text-left transition-colors duration-300 hover:opacity-70 ${
                                    isActive ? "underline underline-offset-4" : ""
                                }`}
                                style={{ color: isActive ? (theme ? "#e7b4f3" : "#66356E") : "inherit" }}
                            >
                                {label}
                            </button>
                        );
                    })}
                </nav>
            )}
        </header>
    );
}