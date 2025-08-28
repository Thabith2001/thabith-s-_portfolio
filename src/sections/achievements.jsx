"use client";
import React, {useContext} from "react";
import {ThemeContext} from "@/helper/ThemesProvider";
import {education} from "@/data/achievements_data";

const Journey = () => {


    const{theme,setTheme}=useContext(ThemeContext);
    if(theme){}
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16" id="achievements">
            {/* Heading */}
            <h1 className="col-span-12 text-center text-4xl sm:text-5xl font-bold border-b pb-4 border-[#66356E] text-outline uppercase tracking-widest sm:mb-10">
               Achievements
            </h1>

            {/* Two Columns on Large Screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                {education.map((item, index) => (
                    <div
                        key={index}
                        className={`relative border-l-4 border-[#66356E] pl-6  text-shadow-md ${theme? "text-gray-100 bg-[#66356E]/20": "text-[#66356E] bg-gray-600/20"} rounded-lg shadow-md 
                        p-4 flex items-start gap-4 transition-transform hover:scale-105 active:scale-105`}
                    >
                        <span className="absolute -left-3 top-6 w-6 h-6 bg-[#9F36AF] rounded-full border-4 border-[#66356E]"></span>
                        {/* Logo */}
                        <img
                            src={item.logo}
                            alt={item.title}
                            className={`w-12 h-12 object-contain rounded-md bg-white p-1`}
                        />
                        {/* Content */}
                        <div>
                            <p className="text-sm">{item.year}</p>
                            <h3 className={`text-lg font-semibold ${theme?"text-sub-outline-dark":"text-sub-outline-light"}`}>
                                {item.title} - {item.place}
                            </h3>
                            <p className=" mt-2">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Journey;
