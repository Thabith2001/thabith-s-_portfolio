"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Download, ChevronDown } from "lucide-react";
import { ThemeContext } from "@/helper/ThemesProvider";

const Home = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            id="home"
            className={`relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen w-full overflow-hidden px-6 ${
                theme
                    ? "bg-gradient-to-b from-black via-[#1a001f] to-black"
                    : "bg-gradient-to-b from-white via-[#f5e6f9] to-white"
            }`}
        >
            {/* Text Content */}
            <div className="relative z-20 text-center md:text-left max-w-2xl md:w-1/2">
                {/* Branding */}
                <h1
                    className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide drop-shadow-xl ${
                        theme ? "text-white" : "text-gray-900"
                    }`}
                >
                    Mohamed{" "}
                    <span className="bg-gradient-to-r from-[#9F36AF] to-purple-400 bg-clip-text text-transparent">
            Thabith
          </span>
                    <span className="text-[#9F36AF]">.dev</span>
                </h1>

                {/* Tagline */}
                <p
                    className={`mt-4 text-lg sm:text-xl md:text-2xl font-medium tracking-wide ${
                        theme ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    🚀 Full-Stack Developer | Software Engineer
                </p>

                {/* Download CV Button */}
                <div className="mt-10 flex justify-center md:justify-start">
                    <a
                        href="/resume/mohamed_thabith_software_engineering.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="MohamedThabith-CV.pdf"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9F36AF] to-purple-500 text-white font-bold shadow-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(159,54,175,0.9)] transition-all duration-300"
                    >
                        Download CV
                        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>

            {/* Astronaut - visible on all screens */}
            <div className="flex justify-center md:justify-end w-full md:w-1/2 mb-10 md:mb-0">
                <Image
                    src="/images/ast.png"
                    alt="Astronaut floating"
                    width={500}
                    height={500}
                    priority
                    className="max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] animate-float object-contain drop-shadow-[0_0_30px_rgba(159,54,175,0.8)]"
                />
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <ChevronDown className="w-8 h-8 text-[#9F36AF] animate-bounce" />
            </div>
        </section>
    );
};

export default Home;