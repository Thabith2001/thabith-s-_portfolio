"use client"
import React from "react";
import Home from "@/sections/home";
import Contact from "@/sections/contact";
import Skill from "@/sections/skills";
import About from "@/sections/about";
import Achievements from "@/sections/achievements";
import Projects from "@/sections/projects";


export default function Frame() {

    return (
        <main className="bg-transparent w-screen scroll-smooth">
            <Home/>
            <About/>
            <Skill/>
           <Projects/>
            <Achievements/>
            <Contact/>

        </main>

    );
};

