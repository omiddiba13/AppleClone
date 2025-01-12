import { useEffect } from "react";
import gsap from "gsap";
import React from "react";

export const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-heading",
      { opacity: 0, y: -100, color: "#a0a0a0" },
      { opacity: 1, y: 0, color: "#ffffff", duration: 2, ease: "power3.out" },
    );

    gsap.fromTo(
      ".about-text",
      { opacity: 0, y: 100, color: "#a0a0a0" },
      { opacity: 1, y: 0, color: "#ffffff", duration: 2, ease: "power2.out" },
    );
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4">
      <div
        className="bg-zinc p-6 sm:p-8 md:p-10 rounded-lg border-2 border-white/10 shadow-lg
        w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5
        flex flex-col items-center justify-center">
        <h1 className="about-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
          About Us
        </h1>
        <p className="about-text text-lg sm:text-xl md:text-2xl text-center text-white/90 leading-relaxed">
          This is a mock-up website inspired by Apple, utilizing libraries such
          as GSAP, Tree, Tailwind, and React. The main goal of this project for
          me was to deepen my understanding of basic concepts and also to learn
          the fundamentals of animation. The idea for this project was inspired
          by a YouTube tutorial and implemented accordingly, but there are
          notable differences and similarities across various sections. Another
          key purpose of this project was to enhance my portfolio and improve my
          skillset.
        </p>
      </div>
    </section>
  );
};
