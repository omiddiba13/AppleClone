import React, { useRef, useEffect } from "react";
import { videos, images } from "../utils/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Features = () => {
  const videoRef = useRef();

  useEffect(() => {
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#exploreVideo",
        start: "-10% bottom",
        end: "bottom top",
        // scrub: true, // کنترل پخش ویدیو با اسکرول - حذف شد
        onEnter: () => videoRef.current.play(),
        onEnterBack: () => videoRef.current.play(),
        onLeave: () => videoRef.current.pause(),
        onLeaveBack: () => videoRef.current.pause(),
        toggleActions: "play pause pause pause", // فقط یک بار پخش شود
      },
    });

    // انیمیشن عنوان
    gsap.fromTo(
      "#features_title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: "#features_title",
          start: "top 85%",
          end: "top 15%",
          toggleActions: "play pause pause pause", // فقط یک بار پخش شود
          once: true, // راه حل جایگزین برای یک بار اجرا شدن
        },
      },
    );

    // انیمیشن تصاویر
    gsap.utils.toArray(".g_grow").forEach((image) => {
      gsap.fromTo(
        image,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play pause pause pause", // فقط یک بار پخش شود
            once: true, // راه حل جایگزین برای یک بار اجرا شدن
          },
        },
      );
    });

    // انیمیشن متن
    gsap.utils.toArray(".g_text").forEach((text) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play pause pause pause", // فقط یک بار پخش شود
            once: true, // راه حل جایگزین برای یک بار اجرا شدن
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="h-full common-padding relative overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          {/* عنوان اصلی */}
          <h1
            id="features_title"
            className="section-heading opacity-0 translate-y-10">
            Explore the full story.
          </h1>

          {/* محتوا */}
          <div className="flex flex-col justify-center items-center overflow-hidden">
            {/* زیرتیتر */}
            <div className="mt-32 mb-24 pl-24">
              <h2 className="text-5xl lg:text-7xl font-semibold">iPhone</h2>
              <h2 className="text-5xl lg:text-7xl font-semibold">
                Forged in titanium
              </h2>
            </div>

            {/* ویدیو */}
            <div className="flex-center flex-col sm:px-10">
              <div className="relative h-[50vh] w-full flex items-center ">
                <video
                  ref={videoRef}
                  playsInline
                  id="exploreVideo"
                  className="w-full h-full object-cover object-center rounded-3xl"
                  preload="none"
                  muted>
                  <source src={videos.exploreVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-col w-full relative">
                {/* flex-col برای قرارگیری زیر هم */}
                <div className="feature-video-container">
                  <div className="overflow-hidden h-[50vh] mb-4 rounded-3xl">
                    <img
                      src={images.explore1Img}
                      alt="Explore Image 1"
                      className="feature-video g_grow"
                    />
                  </div>
                  <div className="overflow-hidden h-[50vh] mb-4 rounded-3xl">
                    <img
                      src={images.explore2Img}
                      alt="Explore Image 2"
                      className="feature-video g_grow"
                    />
                  </div>
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="g_text feature-text">
                    Introducing the <span>iPhone 15 Pro</span>, the most
                    advanced iPhone ever. Designed with cutting-edge technology,
                    it delivers unparalleled speed, precision, and elegance in
                    every detail. Experience a whole new level of performance,
                    crafted for those who demand the very best.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="g_text feature-text">
                    The first iPhone to feature a stunning titanium frame, the{" "}
                    <span>iPhone 15 Pro</span> combines strength and
                    sophistication like never before. Its revolutionary A17 Pro
                    chip unlocks incredible power, making everything from gaming
                    to multitasking smoother and faster. Explore innovation
                    redefined.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
