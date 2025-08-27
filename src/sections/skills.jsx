"use client";
import React from "react";
import Image from "next/image";

const Skill = () => {
    const skills = {
        java: {alt: "Java Logo", src: "/tech_icons/java_i.png"},
        javascript: {alt: "JavaScript Logo", src: "/tech_icons/javaScript_i.png"},
        html: {alt: "HTML Logo", src: "/tech_icons/html5_i.png"},
        css: {alt: "CSS Logo", src: "/tech_icons/css3_i.png"},
        react: {alt: "React Logo", src: "/tech_icons/react_i.png"},
        nextjs: {alt: "Next.js Logo", src: "/tech_icons/nextjs_i.png"},
        tailwind: {alt: "Tailwind CSS Logo", src: "/tech_icons/tailwind_i.png"},
        bootstrap: {alt: "Bootstrap Logo", src: "/tech_icons/bootstrap_i.png"},
        mongodb: {alt: "MongoDB Logo", src: "/tech_icons/mongodb_i.png"},
        mysql: {alt: "MySQL Logo", src: "/tech_icons/mysql_i.png"},
        spring_boot: {alt: "Spring Boot Logo", src: "/tech_icons/spring_i.png"},
        hibernate: {alt: "Hibernate Logo", src: "/tech_icons/hibernate_i.png"},
        php: {alt: "PHP Logo", src: "/tech_icons/php_i.png"},
    };

    const idea = {
        intellij: {alt: "IntelliJ Logo", src: "/tech_icons/intellijidea_i.png"},
        vscode: {alt: "Visual Studio Code Logo", src: "/tech_icons/vscode_i.png"},
        git: {alt: "Git Logo", src: "/tech_icons/git_i.png"},
        netbeans: {alt: "NetBeans Logo", src: "/tech_icons/netbeans_i.png"},
        eclipse: {alt: "Eclipse Logo", src: "/tech_icons/eclipse_i.png"},
        android_studio: {alt: "Android Studio Logo", src: "/tech_icons/androidStudio_i.png"},
        web_storm: {alt: "WebStorm Logo", src: "/tech_icons/webstorm_i.png"},
        phpstorm: {alt: "PhpStorm Logo", src: "/tech_icons/phpstorm_i.png"},
        dbeaver: {alt: "Dbeaver Logo", src: "/tech_icons/dbeaver_i.png"},
    };

    return (
        <section id="skill" className="w-full max-w-7xl mx-auto px-4 py-8">
            {/* Skills */}
            <h1 className="text-center text-4xl sm:text-5xl font-bold border-b pb-4 border-[#66356E] text-outline uppercase tracking-widest mb-6">
                SKILLS
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
                {Object.keys(skills).map((key, index) => (
                    <div
                        key={index}
                    >
                        <div className="relative w-20 h-20 mt-10 sm:w-24 sm:h-24 transition-transform hover:scale-150 active:scale-150">
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
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-transform hover:scale-150 active:scale-150">
                                <Image alt={idea[key].alt} src={idea[key].src} layout="fill" objectFit="contain"/>
                            </div>
                        ) : (
                            <div
                                className="w-20 h-20 mt-10 sm:w-24 sm:h-24 flex items-center justify-center text-xs text-gray-500">
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