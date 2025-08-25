"use client"
import React, {useState} from "react";
import Home from "@/sections/home";
import Contact from "@/sections/contact";


export default function Frame() {

    return (
        <main className="bg-transparent w-screen scroll-smooth">
            <Home/>
            <Contact/>
        </main>

    );
};

