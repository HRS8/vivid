import React from "react";

function Footer() {
    return (
        <footer className="w-full bg-[#fdf6ee] text-amber-900 py-6 shadow-inner bg-white rounded-lg shadow-sm dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                {/* Company Name (left, unchanged) */}
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025 <a href="" className="hover:underline">VIVID™</a>. All Rights Reserved.
                </span>
                {/* Right side columns */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto">
                    {/* Quick Links Column */}
                    <div>
                        <h3 className="font-bold mb-2">Links</h3>
                        <ul className="flex flex-col gap-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <li>
                                <a href="#" onClick={() => window.location.reload()} className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'about' }))} className="hover:underline">About</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))} className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* Hyderabad Column */}
                    <div>
                        <h3 className="font-bold ml-0 md:ml-6 mb-2">Hyderabad</h3>
                        <ul className="flex flex-col gap-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <li className="flex items-center gap-2">
                                {/* Location Icon */}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1116 0c0 4.627-3.582 10-8 10z" />
                                    <circle cx="12" cy="11" r="3" />
                                </svg>
                                604, Sri Balaji Gulmohar Township,<br />
                                Kausalya Colony, Bachupally<br />
                                Hyderabad, Telangana 500090<br />
                                India
                            </li>
                            <li className="flex items-center gap-2">
                                {/* Call Icon */}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm14-14a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5a2 2 0 012-2h2zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z" />
                                </svg>
                                +91 9959833456
                            </li>
                        </ul>
                    </div>
                    {/* Vijayawada Column */}
                    <div>
                        <h3 className="font-bold ml-0 md:ml-6 mb-2">Vijayawada</h3>
                        <ul className="flex flex-col gap-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <li className="flex items-center gap-2">
                                {/* Location Icon */}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1116 0c0 4.627-3.582 10-8 10z" />
                                    <circle cx="12" cy="11" r="3" />
                                </svg>
                                403, DKR Green Fields-1 Apartment<br />
                                Nidamanuru Road, Poranki<br />
                                Vijayawada, Andhra Pradesh 521137<br />
                                India
                            </li>
                            <li className="flex items-center gap-2">
                                {/* Call Icon */}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm14-14a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5a2 2 0 012-2h2zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z" />
                                </svg>
                                +91 7019816343
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;