"use client";
import React from "react";
import Image from "next/image";

const Skill = () => {
    const skills = {
        java: { alt: "Java Logo", src: "https://img.icons8.com/color/96/java-coffee-cup-logo.png" },
        javascript: { alt: "JavaScript Logo", src: "https://img.icons8.com/color/100/javascript--v1.png" },
        html: { alt: "HTML Logo", src: "https://img.icons8.com/color/100/html-5--v1.png" },
        css: { alt: "CSS Logo", src: "https://img.icons8.com/color/100/css3.png" },
        react: { alt: "React Logo", src: "https://img.icons8.com/color/100/react-native.png" },
        nextjs: { alt: "Next.js Logo", src: "https://img.icons8.com/fluency-systems-regular/48/nextjs.png" },
        tailwind: { alt: "Tailwind CSS Logo", src: "https://img.icons8.com/color/96/tailwindcss.png" },
        bootstrap: { alt: "Bootstrap Logo", src: "https://img.icons8.com/color/100/bootstrap.png" },
        mongodb: { alt: "MongoDB Logo", src: "https://img.icons8.com/color/100/mongodb.png" },
        mysql: { alt: "MySQL Logo", src: "https://img.icons8.com/color/100/mysql-logo.png" },
        spring_boot: { alt: "Spring Boot Logo", src: "https://img.icons8.com/color/96/spring-logo.png" },
        php: { alt: "PHP Logo", src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-hypertext-preprocessor-a-widely-used-open-source-general-purpose-scripting-language-logo-color-tal-revivo.png" },
    };

    const idea = {
        intellij: { alt: "IntelliJ Logo", src: "https://img.icons8.com/color/96/intellij-idea.png" },
        vscode: { alt: "Visual Studio Code Logo", src: "https://img.icons8.com/color/96/visual-studio-code-2019.png" },
        git: { alt: "Git Logo", src: "https://img.icons8.com/color/96/git.png" },
        netbeans: { alt: "NetBeans Logo", src: "https://img.icons8.com/color/96/apache-netbeans.png" },
        eclipse: { alt: "Eclipse Logo", src: "https://img.icons8.com/officel/96/java-eclipse.png" },
        android_studio: { alt: "Android Studio Logo", src: "https://img.icons8.com/color/96/android-studio.png" },
        web_storm: { alt: "WebStorm Logo", src: "https://img.icons8.com/color/96/webstorm.png" },
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
                        className="flex flex-col items-center justify-center border border-[#66356E] bg-[#66356E]/20 rounded-2xl p-4 shadow-md transition-transform hover:scale-105  active:scale-105"
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
                        className="flex flex-col items-center justify-center border border-[#66356E] bg-[#66356E]/20 rounded-2xl p-4 shadow-md transition-transform hover:scale-105 active:scale-105"
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