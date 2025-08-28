"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/helper/ThemesProvider";

const About = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            id="about"
            className="w-full max-w-7xl mx-auto px-4 py-8"
        >
            {/* Heading */}
            <h1 className="text-center text-4xl sm:text-5xl text-outline font-bold border-b pb-4 border-[#66356E] uppercase tracking-widest mb-6">
                About Me
            </h1>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal Details */}
                <div className="flex flex-col justify-center p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Profile Image */}
                        <div className="flex-[0.8] max-w-[220px] sm:max-w-[250px] sm:mt-15 ">
                            <img
                                className="w-full h-auto border-4 border-[#66356E] rounded-2xl"
                                src="/images/thabith.jpeg"
                                alt="Mohamed Thabith - Profile"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex-[1.5] space-y-4">
                            <h2 className={`text-2xl font-bold mb-6  text-shadow-md text-gray-300  ${theme?"text-shadow-fuchsia-600":"text-shadow-fuchsia-800"}`}>
                                Personal Details
                            </h2>
                            <div className={`space-y-4 ${theme ? "text-gray-200" : "text-[#222]"}`}>
                                <p>
                                    <span className="font-semibold text-[#66356E]">Name:</span> Mohamed Thabith
                                </p>
                                <p>
                                    <span className="font-semibold text-[#66356E]">Email:</span> thabith20010909@gmail.com
                                </p>
                                <p>
                                    <span className="font-semibold text-[#66356E]">Phone:</span> +94 76 655 3936
                                </p>
                                <p>
                                    <span className="font-semibold text-[#66356E]">Location:</span> Colombo, Sri Lanka
                                </p>
                                <p>
                                    <span className="font-semibold text-[#66356E]">Degree:</span> BSc in Software Engineering
                                </p>
                                <p>
                                    <span className="font-semibold text-[#66356E]">Languages:</span> English, Sinhala, Tamil
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Introduction and Highlights */}
                <div className="flex flex-col justify-center p-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#66356E] mb-4">
                        Hi, I'm Thabith 👋
                    </h2>

                    {/* Intro Paragraphs */}
                    <div className={`space-y-4 text-lg leading-relaxed ${theme ? "text-gray-200" : "text-[#222]"}`}>
                        <p>
                            I’m a passionate <span className="font-semibold text-[#66356E]">Software Engineer</span> with
                            experience in <span className="font-semibold">Java, Spring Boot, SQL, React, and Agile development</span>.
                            I love building clean, scalable, and user-friendly applications that solve real-world problems.
                        </p>
                        <p>
                            Beyond coding, I enjoy learning about new technologies, contributing to open-source projects, and
                            exploring creative UI/UX design ideas.
                        </p>
                    </div>

                    {/* Quick Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 text-center">
                        <div>
                            <div className="text-3xl mb-2">🚀</div>
                            <h3 className={`text-lg font-semibold  text-shadow-md text-gray-300  ${theme?"text-shadow-fuchsia-600":"text-shadow-fuchsia-800"}`}>Experience</h3>
                            <p className={`${theme ? "text-gray-300" : "text-[#222]"} mt-1`}>
                                Fresh Graduate in <span className="font-medium">Software Engineering</span>
                            </p>
                        </div>

                        <div>
                            <div className="text-3xl mb-2">⚡</div>
                            <h3 className={`text-lg font-semibold  text-shadow-md text-gray-300  ${theme?"text-shadow-fuchsia-600":"text-shadow-fuchsia-800"}`}>Skills</h3>
                            <p className={`${theme ? "text-gray-300" : "text-[#222]"} mt-1`}>Java, Spring Boot, React, SQL</p>
                        </div>

                        <div>
                            <div className="text-3xl mb-2">🎯</div>
                            <h3 className={`text-lg font-semibold  text-shadow-md text-gray-300  ${theme?"text-shadow-fuchsia-600":"text-shadow-fuchsia-800"}`}>Goals</h3>
                            <p className={`${theme ? "text-gray-300" : "text-[#222]"} mt-1`}>
                                To grow as a <span className="font-medium">Full-Stack Developer</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
