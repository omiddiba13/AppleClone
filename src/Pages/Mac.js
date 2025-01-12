import React, { useEffect, useRef, useState, useCallback } from "react";
import { videos, images } from "../utils/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Mac = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);

  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  useGSAP(() => {
    // Video container scale animation
    gsap.to(videoContainerRef.current, {
      scale: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Text animations
    gsap.fromTo(
      ".left-text",
      { opacity: 0, xPercent: -10 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power3.out" },
    );

    gsap.fromTo(
      ".right-text",
      { opacity: 0, xPercent: 10 },
      { opacity: 1, xPercent: 0, duration: 1, delay: 0.5, ease: "power3.out" },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-zinc overflow-hidden">
      <div className="container mx-auto py-16 md:py-24 px-6 lg:px-8">
        {/* Text Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="left-text w-full md:w-1/2 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Mac</h2>
            <p className="text-lg md:text-xl opacity-80">
              Supercharged by M3 Pro and M3 Max.
            </p>
          </div>
          <div className="right-text w-full md:w-1/2 text-white md:text-right">
            <h3 className="text-3xl lg:text-4xl font-bold">
              If you can dream it, Mac can do it.
            </h3>
          </div>
        </div>

        {/* Video Container */}
        <div className="mt-12 md:mt-20">
          <div
            ref={videoContainerRef}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop>
              <source src={videos.MacVideo} type="video/mp4" />
            </video>
            <button
              onClick={handlePlayPause}
              className="absolute bottom-4 right-4 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 text-white transition-colors duration-300"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}>
              <img
                src={isPlaying ? images.pauseImg : images.playImg}
                alt={isPlaying ? "Pause" : "Play"}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 md:mt-24 text-center">
          <h3 className="text-white text-2xl font-semibold">
            Get to know Mac.
          </h3>
          {/* You can add more content here */}
        </div>
      </div>
    </section>
  );
};
