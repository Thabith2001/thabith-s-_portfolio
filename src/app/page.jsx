"use client"
import React, {useState} from "react";
import Home from "@/sections/home";
import Contact from "@/sections/contact";
import Skill from "@/sections/skills";
import About from "@/sections/about";


export default function Frame() {

    return (
        <main className="bg-transparent w-screen scroll-smooth">
            <Home/>
            <About/>
            <Skill/>
            <Contact/>

        </main>

    );
};

