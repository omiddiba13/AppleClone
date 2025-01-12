import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import utils from "../utils/index";

export const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");

  // تابع تنظیم ویدئو
  const handelVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(utils.videos.smallHeroVideo);
    } else {
      setVideoSrc(utils.videos.heroVideo);
    }
  };

  useEffect(() => {
    // مقدار اولیه
    handelVideoSrcSet();

    // اضافه کردن listener
    window.addEventListener("resize", handelVideoSrcSet);

    // حذف listener در هنگام unmount
    return () => {
      window.removeEventListener("resize", handelVideoSrcSet);
    };
  }, []);

  // انیمیشن با GSAP
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2.2,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 2.2,
      y: -50,
    });
  }, []);

  return (
    <section className="bg-black justify-center">
      <div className="h-5/6 w-full flex-center flex-col mt-8">
        <p id="hero" className="hero-title mt-10">
          iPhone 15 Pro
        </p>
        <div className="md:w-7/10 w-10/12">
          <video
            className="pointer-events-none mt-10"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc} // برای بازنشانی صحیح
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20">
          <a href="" className="btn">
            Buy
          </a>
          <p className="font-normal">From $199/month or 999$</p>
        </div>
      </div>
    </section>
  );
};
