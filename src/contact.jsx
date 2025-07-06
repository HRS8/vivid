import React from "react";
import hyd from "./hyderabad.jpg";
import vjw from "./vijayawada.jpg";

function Contact() {
    return (
        <section class="py-24">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="md:flex gap-x-24 clear-left md:mb-16 mb-10">
                    <div class=" md:mb-0 mb-4">
                        <h2 class="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">Get In Touch</h2>
                        <p class="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">Whether you have a concern or simply want to say hello, We are here to facilitate communication with you.</p>
                        <div class="flex md:items-center md:justify-start justify-center">
                        </div>
                    </div>
                    <div class="border-l-2 md:border-indigo-600 border-white px-10 py-6">
                        <div class="mb-8">
                            <h6 class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Email Address</h6>
                            <h3 class="text-black text-xl font-semibold leading-8 md:text-start text-center">vividconcepts9@gmail.com </h3>
                        </div>
                        <div>
                            <h6 class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Phone Number</h6>
                            <h3 class="text-black text-xl font-semibold leading-8 md:text-start text-center">+91 7019816343</h3>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
                    <div class="h-96 relative flex justify-center">
                        <div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                        <img src={hyd} alt="United Kingdom image" class="w-full h-full object-cover"/>
                            <div class="absolute bottom-0 mb-6 text-center px-6">
                                <h5 class="text-white text-lg font-semibold leading-7 mb-2">Hyderabad</h5>
                            <p class="text-white text-base font-medium leading-6">604, Sri Balaji Gulmohar Township,<br />Kausalya Colony, Bachupally<br />+91 8125345656</p>
                            </div>
                    </div>
                    <div class="h-96 relative flex justify-center">
                        <div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                        <img src={vjw} alt="Germany image" class="w-full h-full  object-cover"/>
                            <div class="absolute bottom-0 mb-6 text-center px-6">
                                <h5 class="text-white text-lg font-semibold leading-7 mb-2">Vijayawada</h5>
                            <p class="text-white text-base font-medium leading-6">403, DKR Green Fields-1 Apartment<br />Nidamanuru Road, Poranki<br />+91 7019816343</p>
                            </div>
                    </div>
                    
                </div>
            </div>
        </section>

    );
}

export default Contact;