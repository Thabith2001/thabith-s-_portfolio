"use client";
import React from "react";
import Image from "next/image";

const Skill = () => {
    const skills = {
        java: { alt: "Java Logo", src: "/tech_icons/Java_i.png" },
        javascript: { alt: "JavaScript Logo", src: "/tech_icons/JavaScript_i.png" },
        html: { alt: "HTML Logo", src: "/tech_icons/Html5_i.png" },
        css: { alt: "CSS Logo", src: "/tech_icons/Css3_i.png" },
        react: { alt: "React Logo", src: "/tech_icons/React_i.png" },
        nextjs: { alt: "Next.js Logo", src: "/tech_icons/Nextjs_i.png" },
        tailwind: { alt: "Tailwind CSS Logo", src: "/tech_icons/Tailwind_i.png" },
        bootstrap: { alt: "Bootstrap Logo", src: "/tech_icons/Bootstrap_i.png" },
        mongodb: { alt: "MongoDB Logo", src: "/tech_icons/MongoDB_i.png" },
        mysql: { alt: "MySQL Logo", src: "/tech_icons/MYSQL_i.png" },
        spring_boot: { alt: "Spring Boot Logo", src: "/tech_icons/Spring_i.png" },
        hibernate: { alt: "Hibernate Logo", src: "/tech_icons/Hibernate_i.png" },
        php: { alt: "PHP Logo", src: "/tech_icons/Php_i.png" },
    };

    const idea = {
        intellij: { alt: "IntelliJ Logo", src: "/tech_icons/Intellijidea_i.png" },
        vscode: { alt: "Visual Studio Code Logo", src: "/tech_icons/vscode_i.png" },
        git: { alt: "Git Logo", src: "/tech_icons/git_i.png" },
        netbeans: { alt: "NetBeans Logo", src: "/tech_icons/netBeans_i.png" },
        eclipse: { alt: "Eclipse Logo", src: "/tech_icons/Eclipse_i.png" },
        android_studio: { alt: "Android Studio Logo", src: "/tech_icons/AndroidStudio_i.png" },
        web_storm: { alt: "WebStorm Logo", src: "/tech_icons/Webstorm_i.png" },
        phpstorm: { alt: "PhpStorm Logo", src: "/tech_icons/Phpstorm_i.png" },
        dbeaver:{alt:"Dbeaver Logo",src:"/tech_icons/Dbeaver_i.png"},
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
                        className="flex flex-col items-center justify-center rounded-2xl p-4   transition-transform hover:scale-150  active:scale-150"
                    >
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                            <Image
                                alt={skills[key].alt}
                                src={skills[key].src}
                                fill
                                sizes="96px"

                                style={{ objectFit: "contain" }}
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
                        className="flex flex-col items-center justify-center  rounded-2xl p-4  transition-transform hover:scale-150  active:scale-150"
                    >
                        {idea[key].src ? (
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                                <Image
                                    alt={idea[key].alt}
                                    src={idea[key].src}
                                    fill
                                    sizes="96px"
                                    style={{ objectFit: "contain" }}
                                />
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
