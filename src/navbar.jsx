import React, { useState } from "react";

const NAV_LINKS = [
    { name: "Home", page: "home", subtitle: "~living room" },
    { name: "About", page: "about", subtitle: "~story time" },
    { name: "Gallery", page: "gallery", subtitle: "~wardrobe" },
    { name: "Contact", page: "contact", subtitle: "~let's chat" },
];

export default function Navbar({ setPage }) {
    // const [show, setShow] = useState(true);
    // const [lastScroll, setLastScroll] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);

    // // Show on scroll up, hide on scroll down after hero is out of view
    // useEffect(() => {
    //   let ticking = false;
    //   let appearedAfterHero = false;
    //   const handleScroll = () => {
    //     if (!ticking) {
    //       window.requestAnimationFrame(() => {
    //         const currentScroll = window.scrollY;
    //         const hero = document.getElementById("hero-section");
    //         const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    //         if (heroBottom <= 0) {
    //           if (!appearedAfterHero) {
    //             setShow(true);
    //             appearedAfterHero = true;
    //           } else if (currentScroll < lastScroll) {
    //             setShow(false);
    //           } else if (currentScroll > lastScroll) {
    //             setShow(true);
    //           }
    //         } else {
    //           setShow(false);
    //           appearedAfterHero = false;
    //         }
    //         setLastScroll(currentScroll);
    //         ticking = false;
    //       });
    //       ticking = true;
    //     }
    //   };
    //   window.addEventListener("scroll", handleScroll, { passive: true });
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, [lastScroll]);

    // Close mobile nav on link click
    const handleNavClick = (pageName) => {
        setPage(pageName);
        setMobileOpen(false);
    };

    // Always show navbar
    const show = true;

    return (
        <>
            {/* Floating pill navbar */}
            <nav
                className={`
          fixed left-1/2 z-50 transition-all duration-500
          ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          ${mobileOpen ? "top-4" : "top-8"}
          -translate-x-1/2
          w-[83vw] max-w-4xl
        `}
                style={{
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                    borderRadius: "50px",
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(16px)",
                }}
            >
                <div className="flex items-center justify-between px-7 py-3">
                    {/* Logo and company name */}
                    <div className="flex items-center gap-2">
                        <img
                            src="https://placehold.co/40x40"
                            alt="Logo"
                            className="rounded-full w-10 h-10"
                        />
                        <span className="font-bold text-lg text-gray-800">Vivid</span>
                    </div>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex gap-8">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.page)}
                                className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile down arrow - now on the right */}
                    <button
                        className="md:hidden transition-transform rounded-full p-2"
                        style={{ background: "rgba(255,255,255,0)" }}
                        aria-label="Open navigation"
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <svg
                            className={`w-6 h-6 transition-transform duration-300 ${mobileOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                {/* Mobile nav links */}
                <div
                    className={`
            md:hidden overflow-hidden transition-all duration-400
            ${mobileOpen ? "max-h-90 py-1" : "max-h-0 py-0"}
          `}
                    style={{
                        borderBottomLeftRadius: "50px",
                        borderBottomRightRadius: "50px",
                    }}
                >
                    <div className="flex flex-col gap-1 px-4 pb-2">
                        {NAV_LINKS.map((link) => (
                            <div key={link.name} className="flex justify-between items-center py-1">
                                <button
                                    onClick={() => handleNavClick(link.page)}
                                    className="text-gray-700 font-medium hover:text-blue-600 transition-colors cursor-pointer bg-transparent text-left"
                                >
                                    {link.name}
                                </button>
                                <span className="text-gray-500 text-sm font-light italic">
                                    {link.subtitle}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}