"use client"
import React from 'react';
import Images from "next/image";



const Home = () => {
    return (
        <section className="bg-transparent overflow-hidden w-full min-h-screen relative" id="home" >
            {/* Astronaut Image */}
            <div className="absolute inset-0 flex justify-center sm:justify-start items-center mt-10">
                <Images
                    className="w-3/4 sm:w-auto max-w-[800px] sm:max-w-none sm:h-screen animate-float object-contain drop-shadow-[0_0_20px_rgba(159,54,175,0.8)]"
                    alt="Astronaut floating in space with stars around"
                    src="/images/ast.png"
                    width={400}
                    height={400}
                    style={{ animationDelay: "0.2s" }}
                    priority
                />
            </div>

            {/* Text Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-5xl sm:text-8xl font-bold text-outline text-shadow-md animate-bounce">
                Thabith.dev
            </span>
            </div>
        </section>
    );
};

export default Home;
