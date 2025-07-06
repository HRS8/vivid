import React from "react";
import heroBg from "./hero.jpg";

function Hero() {
    return (
        <div className="inset-0 w-screen h-screen z-0">
            <img
                src={heroBg}
                alt="Hero"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
                <h1 className="text-3xl md:text-5xl font-bold text-amber-100 md:text-amber-100 text-center lg:text-left px-4 lg:ml-24">
                    <span className="excur lg:text-9xl">Interiors </span><span className="excur lg:text-7xl">that</span><br/><span className="excur lg:text-[180px]">Inspire</span>
                </h1>
            </div>
        </div>
    );
}

export default Hero;