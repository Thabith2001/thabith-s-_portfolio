"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/helper/ThemesProvider";
import { skills_data, ideas_data } from "@/data/skills_data";

const Skill = () => {
    const { theme } = useContext(ThemeContext);

    // Convert object to array of [key, value]
    const skillsArray = Object.entries(skills_data[0]);
    const ideasArray = Object.entries(ideas_data[0]);

    return (
        <section id="skill" className="w-full max-w-7xl mx-auto px-4 py-8">
            {/* Skills */}
            <h1 className="text-center text-4xl sm:text-5xl font-bold border-b pb-4 border-[#66356E] text-outline uppercase tracking-widest mb-6">
                SKILLS
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                {skillsArray.map(([name, skill], index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="relative w-20 h-20 mt-10 sm:w-24 sm:h-24 flex justify-center items-center transition-transform hover:scale-150 active:scale-150">
                            <img alt={skill.alt} src={skill.src} />
                        </div>
                        <p
                            className={`text-sm sm:text-base mt-3 text-center capitalize ${
                                theme ? "text-gray-200" : "text-gray-500"
                            }`}
                        >
                            {name.replace("_", " ")}
                        </p>
                    </div>
                ))}
            </div>

            {/* IDEs */}
            <h1 className="text-center text-4xl sm:text-5xl font-bold border-b pb-4 border-[#66356E] text-outline uppercase tracking-widest mb-6 mt-20">
                IDE<span className="lowercase">'s</span>
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                {ideasArray.map(([name, idea], index) => (
                    <div key={index} className="flex flex-col items-center">
                        {idea.src ? (
                            <div className="relative w-20 h-20 mt-10 sm:w-24 sm:h-24 flex justify-center items-center transition-transform hover:scale-150 active:scale-150">
                                <img alt={idea.alt} src={idea.src} />
                            </div>
                        ) : (
                            <div className="w-20 h-20 mt-10 sm:w-24 sm:h-24 flex items-center justify-center text-xs text-gray-500 border border-dashed border-gray-300">
                                No Image
                            </div>
                        )}
                        <p
                            className={`text-sm sm:text-base mt-3 text-center capitalize ${
                                theme ? "text-gray-200" : "text-gray-500"
                            }`}
                        >
                            {name.replace("_", " ")}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;