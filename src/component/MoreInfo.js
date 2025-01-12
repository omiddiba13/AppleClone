import React, { useRef, useEffect } from "react";
import utils from "../utils/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MoreInfo = () => {
  const videoRef = useRef();

  useEffect(() => {
    // انیمیشن برای متن‌های gaming_text
    gsap.utils.toArray(".gaming_text").forEach((text) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });

    // انیمیشن برای تصویر Chip
    gsap.from("#Chip", {
      scrollTrigger: {
        trigger: "#Chip",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      scale: 1.2,
      duration: 2,
      ease: "power1.inOut",
    });

    // کنترل ویدیو هنگام اسکرول
    if (videoRef.current) {
      const video = videoRef.current;
      ScrollTrigger.create({
        trigger: video,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play pause play pause",
        onEnter: () => video.play(),
        onLeave: () => video.pause(),
        onEnterBack: () => video.play(),
        onLeaveBack: () => video.pause(),
      });
    }

    // Cleanup برای انیمیشن‌ها
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="Chip" className="flex-center mb-3">
          <img
            src={utils.images.chipImg}
            srcSet={`${utils.images.chipImg_480} 480w, ${utils.images.chipImg} 768w`}
            sizes="(max-width: 480px) 480px, 768px"
            alt="chip"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title text-2xl md:text-4xl">
            A17 Pro Chip. <br /> A best Phone for gaming
          </h2>
          <p className="hiw-subtitle text-base md:text-lg">
            The best chip in Apple's history
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={utils.images.frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                ref={videoRef}
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                style={{ objectFit: "cover", objectPosition: "center" }}
                width="100%"
                height="100%">
                <source src={utils.videos.frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-center font-medium text-gray-500 text-sm md:text-base">
            Honkai: Star Rail
          </p>
          <div className="feature-text-container">
            <div className="flex-1 flex-center">
              <p className="gaming_text feature-text text-base md:text-lg">
                With the groundbreaking <span>A17 Pro chip</span>, the{" "}
                <span>iPhone 15 Pro</span> redefines performance for mobile
                gaming. This next-gen processor delivers exceptional speed and
                efficiency, enabling seamless gameplay even for the most
                demanding titles. Feel the power of console-level graphics in
                the palm of your hand.
              </p>
            </div>
            <div className="flex-1 flex-center">
              <p className="gaming_text feature-text text-base md:text-lg">
                Featuring advanced GPU architecture, the <span>A17 Pro</span>{" "}
                supports ultra-high frame rates and real-time ray tracing,
                bringing your games to life with stunning realism and detail.
                Whether you're battling opponents or exploring vast open worlds,
                experience fluid, lag-free gaming like never before.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
