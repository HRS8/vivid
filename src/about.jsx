import React from "react";
import aboutimg from "./about.jpg"; // Ensure you have an image at this path

function About() {
    return (
        <section class=" w-full flex justify-center">
            <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div class="max-w-lg">
                        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                        <p class="mt-4 text-gray-600 text-lg">we believe in creating experiences that are anything but dull.
                            Our passion is to bring color, creativity, and life to every project we touch.
                            With a team of dedicated professionals, we strive to deliver unique and vibrant solutions tailored to your needs.</p>
                        <p class="mt-4 text-gray-600 text-lg">Whether you’re looking for innovative design, seamless functionality, or a fresh perspective,
                        Vivid is your partner in making ideas come alive. Let’s make something extraordinary together!</p>
                    </div>
                    <div class="mt-12 md:mt-0">
                        <img src={aboutimg} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;