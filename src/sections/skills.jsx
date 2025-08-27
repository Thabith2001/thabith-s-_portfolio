"use client";
import React from "react";
import Image from "next/image";

const Skill = () => {
    const skills = {
    };

    const idea = {
    };

    return (
        <section id="skill" className="w-full max-w-7xl mx-auto px-4 py-8">
            {/* Skills */}
            <h1 className="text-center text-4xl sm:text-5xl font-bold border-b pb-4 border-[#66356E] text-outline uppercase tracking-widest mb-6">
                SKILLS
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Object.keys(skills).map((key, index) => (
                    <div
                        key={index}
                    >
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                            <Image
                                alt={skills[key].alt}
                                src={skills[key].src}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className="text-sm sm:text-base mt-3 capitalize">{key.replace("_", " ")}</p>
                    </div>
                ))}
            </div>

            {/* IDEs */}
            <h1 className="text-center text-4xl sm:text-5xl font-bold border-b pb-4 border-[#66356E] text-outline uppercase tracking-widest mb-6 mt-20">
                IDEAs
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Object.keys(idea).map((key, index) => (
                    <div
                        key={index}
                    >
                        {idea[key].src ? (
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                                <Image alt={idea[key].alt} src={idea[key].src} layout="fill" objectFit="contain" />
                            </div>
                        ) : (
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-xs text-gray-500">
                                No Image
                            </div>
                        )}
                        <p className="text-sm sm:text-base mt-3 capitalize">{key.replace("_", " ")}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;