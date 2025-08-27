"use client";
import React, { useContext, useRef, useState } from "react";
import Link from "next/link";
import { ThemeContext } from "@/helper/ThemesProvider";
import { Instagram, Facebook, Linkedin, Github, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const { theme } = useContext(ThemeContext);
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        emailjs
            .sendForm(
                "service_fff9uko",
                "template_it1djf8",
                form.current,
                "_k2UtkQEJ6bY-vpwc"
            )
            .then(() => {
                setStatus("success");
                form.current.reset();
            })
            .catch((error) => {
                console.error("Failed to send:", error);
                setStatus("error");
            })
            .finally(() => setLoading(false));
    };

    return (
        <section
            id="contact"
            className="grid sm:grid-cols-12 gap-6 m-4 w-full max-w-7xl mx-auto p-6 sm:p-8"
        >
            <h1 className="col-span-12 text-center text-4xl sm:text-5xl font-bold border-b pb-4 border-[#66356E] text-outline uppercase tracking-widest">
                Contact Me
            </h1>

            {/* Social Links */}
            <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                    href="https://www.instagram.com/thabith.24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600
            border border-pink-500 rounded-2xl p-6 flex items-center justify-center transition-transform hover:scale-105 active:scale-105"
                >
                    <h3 className="flex items-center justify-center text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                        <Instagram className="w-[32px] sm:w-[40px] h-auto mr-3" />
                        Instagram
                    </h3>
                </Link>

                <Link
                    href="https://web.facebook.com/thabith.thabith.75436/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff]
            border border-sky-400 rounded-2xl p-6 flex items-center justify-center transition-transform hover:scale-105 active:scale-105"
                >
                    <h3 className="flex items-center justify-center text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                        <Facebook className="w-[32px] sm:w-[40px] h-auto mr-3" />
                        Facebook
                    </h3>
                </Link>

                <Link
                    href="https://www.linkedin.com/in/thabithshahulhameed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-950 to-[#0072ff]
            border border-blue-500 rounded-2xl p-6 flex items-center justify-center transition-transform hover:scale-105 active:scale-105"
                >
                    <h3 className="flex items-center justify-center text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                        <Linkedin className="w-[32px] sm:w-[40px] h-auto mr-3" />
                        LinkedIn
                    </h3>
                </Link>

                <Link
                    href="https://github.com/Thabith2001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-950 to-stone-700
            border border-stone-400 rounded-2xl p-6 flex items-center justify-center transition-transform hover:scale-105 active:scale-105"
                >
                    <h3 className="flex items-center justify-center text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                        <Github className="w-[32px] sm:w-[40px] h-auto mr-3" />
                        Github
                    </h3>
                </Link>

                <Link
                    href="mailto:thabith20010909@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-red-800 via-red-600 to-yellow-400
            border border-red-400 rounded-2xl p-6 flex items-center justify-center transition-transform hover:scale-105 active:scale-105"
                >
                    <h3 className="flex items-center justify-center text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                        <Mail className="w-[32px] sm:w-[40px] h-auto mr-3" />
                        Gmail
                    </h3>
                </Link>

                <Link
                    href="https://wa.me/+94766553936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#25D366] via-green-500 to-green-700
            border border-green-300 rounded-2xl p-6 flex items-center justify-center transition-transform hover:scale-105 active:scale-105"
                >
                    <h3 className="flex items-center justify-center text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                        <FaWhatsapp className="w-[32px] sm:w-[40px] h-auto mr-3" />
                        Whatsapp
                    </h3>
                </Link>
            </div>

            <hr className="col-span-12 border-[#66356E] border-[0.5px] my-6" />

            <div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-6">

                <div className="flex justify-start items-center">
                    <div className="w-full space-y-6 p-6  h-full">
                        <div className="col-span-12 text-center mb-8">
                            <h1 className="text-3xl font-bold text-[#66356E] text-shadow-md">Get in Touch</h1>
                            <p className="text-sm sm:text-base text-gray-400 text-shadow-md mt-2 max-w-2xl mx-auto">
                                I’m always open to new opportunities, collaborations, or just a friendly hello.
                                Fill out the form and I’ll get back to you as soon as I can.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flex justify-end items-center">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="w-full space-y-6 p-6 border border-[#66356E] rounded-2xl shadow-md"
                    >
                        <div>
                            <label className="block text-xs font-semibold uppercase mb-1 text-[#66356E]">
                                Name (*)
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-[#66356E] bg-[#66356E]/20 px-4 py-3 rounded-md outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase mb-1 text-[#66356E]">
                                E-mail (*)
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border border-[#66356E] bg-[#66356E]/20 px-4 py-3 rounded-md outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase mb-1 text-[#66356E]">
                                Comment (*)
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                className="w-full border border-[#66356E] bg-[#66356E]/20 px-4 py-3 rounded-md outline-none"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full sm:w-auto flex items-center justify-center gap-2 
            bg-black text-white px-6 py-3 uppercase tracking-wide text-sm 
            hover:bg-gray-800 active:scale-95 active:opacity-90 transition 
            duration-150 ease-in-out rounded-md 
            ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {loading ? (
                                    <>
                                        <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></span>
                                        Sending…
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </div>

                        {/* Status messages */}
                        {status === "success" && (
                            <p className="text-green-500 text-sm sm:text-base">
                                ✅ Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-500 text-sm sm:text-base">
                                ❌ Something went wrong. Please try again later.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;