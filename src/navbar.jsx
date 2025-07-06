import React, { useState, useEffect } from "react";

function NAV({ setPage }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = window.innerHeight * 0.15;
            setScrolled(scrollY > threshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 shadow transition-colors duration-500 ${scrolled ? "bg-white bg-opacity-100" : "bg-white bg-opacity-0"
                }`}
            style={{
                backdropFilter: !scrolled ? "none" : "saturate(180%) blur(10px)",
            }}
        >
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#" onClick={() => setPage("home")} className="text-black no-underline hover:text-black  focus:text-black bg-white">
                        VIVID CONCEPTS
                        {/*<img
                            className="w-auto h-6 sm:h-7"
                            src="https://merakiui.com/images/full-logo.svg"
                            alt="Logo"
                        />*/}
                    </a>
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-black !bg-white hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu"
                        >
                            {/* Hamburger icon */}
                            <svg className="w-6 h-6 text-black !bg-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen
                            ? "translate-x-0 opacity-100"
                            : "opacity-0 -translate-x-full pointer-events-none md:pointer-events-auto"
                        }`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <button
                            className="my-2 text-black !bg-white transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0 border-none"
                            onClick={() => {setPage("home"); setIsOpen(false);}}
                        >
                            Home
                        </button>
                        <button
                            className="my-2 text-black !bg-white transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0 border-none"
                            onClick={() => {setPage("gallery"); setIsOpen(false);}}
                        >
                            Gallery
                        </button>
                        <button
                            className="my-2 text-black !bg-white transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0 border-none"
                            onClick={() => {setPage("about"); setIsOpen(false);}}
                        >
                            About
                        </button>
                        <button
                            className="my-2 text-black !bg-white transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0 border-none"
                            onClick={() => {setPage("contact") ; setIsOpen(false);}}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NAV;