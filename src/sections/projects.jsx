import React, { useContext } from "react";
import { ThemeContext } from "@/helper/ThemesProvider";
import { projects_data } from "@/data/projects_data";

const Projects = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            id="projects"
            className={`py-12 bg-transparent ${
                theme ? "text-sub-outline-dark" : "text-sub-outline-light"
            }`}
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <h1 className="text-center text-4xl sm:text-5xl font-bold border-b pb-4 text-outline border-[#66356E] uppercase tracking-widest mb-10">
                    My Projects
                </h1>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects_data.map((project) => (
                        <div
                            key={project.id}
                            className={`rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col ${
                                theme ? "bg-[#66356E]/20" : "bg-gray-400/20"
                            }`}
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-sm mb-4 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-[#66356E] text-white text-xs rounded-full"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                {/* Buttons - Stick to bottom */}
                                <div className="flex justify-between gap-4 mt-auto">
                                    {project.deployLink ? (
                                        <a
                                            href={project.deployLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-4 py-2 rounded-lg border border-[#66356E] transition ${
                                                theme
                                                    ? "text-sub-outline-dark hover:bg-[#66356E] hover:text-white"
                                                    : "text-sub-outline-light hover:bg-[#66356E] hover:text-white"
                                            }`}
                                        >
                                            Live Demo
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="px-4 py-2 rounded-lg border border-gray-400 text-gray-400 cursor-not-allowed"
                                        >
                                            No Demo
                                        </button>
                                    )}
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-4 py-2 rounded-lg border border-[#66356E] transition ${
                                            theme
                                                ? "text-sub-outline-dark hover:bg-[#66356E] hover:text-white"
                                                : "text-sub-outline-light hover:bg-[#66356E] hover:text-white"
                                        }`}
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;