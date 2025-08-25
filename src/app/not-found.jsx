"use client"
import React, {useContext} from 'react';
import Images from 'next/image';
import Link from "next/link";
import {ThemeContext} from "@/helper/ThemesProvider";

const NotFound = () => {
    const {theme,setTheme}=useContext(ThemeContext);
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-screen bg-transparent text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 flex justify-center items-center z-0 ">
                <Images
                    className="w-full h-auto  animate-float  object-cover sm:w-auto sm:h-screen opacity-20 drop-shadow-[0_0_20px_rgba(159,54,175,0.8)]"
                    alt="Astronaut floating in space with stars around"
                    src="/images/ast.png"
                    width={400}
                    height={400}
                    style={{ animationDelay: "0.2s" }}
                    priority
                />
            </div>

            {/* Content */}

            <h1 className={`text-6xl sm:text-8xl font-bold z-10 ${theme?"text-purple-100":"text-stone-800"}`}>404</h1>
            <h2 className={`text-xl sm:text-2xl mt-4 z-10 ${theme?"text-purple-100":"text-stone-800"}`}>Oops! Page not found.</h2>
            <p className={`text-lg sm:text-xl mt-2 z-10 ${theme?"text-purple-100":"text-stone-800"}`}>The page you are looking for does not exist.</p>
            {/* Optional Button */}
            <Link
                href="/"
                className={`mt-6 px-6 py-3 bg-[#9F36AF]/60 border  text-white rounded-lg shadow-lg hover:opacity-90 transition z-10
                 ${theme? "border-[#e7b4f3]":"border-[#66356E]"}`}
            >
                Go Home
            </Link>
        </div>

    );
};

export default NotFound;
