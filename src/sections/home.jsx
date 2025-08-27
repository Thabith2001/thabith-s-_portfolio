"use client";
import React, {useContext} from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import {ThemeContext} from "@/helper/ThemesProvider";
import Link from "next/link";

const Home = () => {
    const{theme,setTheme}=useContext(ThemeContext);
    return (
        <section
            id="home"
            className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-transparent"
        >
            {/* Astronaut Floating - BACKGROUND */}
            <div className="absolute inset-0 hidden sm:flex justify-center sm:justify-start items-center mt-10">
                <Image
                    src="/images/ast.png"
                    alt="Astronaut floating in space"
                    width={500}
                    height={500}
                    priority
                    className="w-3/4 sm:w-auto max-w-[650px] sm:max-w-none animate-float object-contain drop-shadow-[0_0_25px_rgba(159,54,175,0.7)]"
                />
            </div>

            {/* Text + Button - FOREGROUND */}
            <div className="relative z-20 text-center px-4">
                {/* Branding */}
                <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold  drop-shadow-lg tracking-wide${theme?" text-white":" text-[#222]"}`}>
                    Thabith<span className="text-[#9F36AF]">.dev</span>
                </h1>

                {/* Tagline */}
                <p className={`mt-4 text-lg sm:text-xl md:text-2xl tracking-wide ${theme?" text-white":" text-[#222]"}`}>
                    Full-Stack Developer | Java | React | Next.js
                </p>

                {/* Download CV Button */}
                <div className="mt-10">
                    <Link
                        href="/resume/MohamedThabith(software%20engineering).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="MohamedThabith-CV.pdf"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9F36AF] text-white font-semibold shadow-lg hover:bg-[#7f2a8a] transition-all duration-300"
                    >
                        Download CV
                        <Download className="w-5 h-5 animate-bounce" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;