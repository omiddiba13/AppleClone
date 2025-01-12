import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import utils from "../utils/index";
import VideoCarousel from "./videoCarousel";

export const Highlights = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 1,
      },
    });

    timeline
      .to("#title", {
        opacity: 1,
        y: 0,
      })
      .to(
        ".Link",
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
        },
        "-=0.5",
      );
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full flex items-end justify-between">
          <h1 id="title" className="section-heading opacity-0 translate-y-5">
            Get the Highlights
          </h1>

          <div className="flex flex-wrap items-center gap-5">
            <div className="Link opacity-0 translate-y-5 flex items-center gap-2">
              <p>Watch the film</p>
              <img
                src={utils.images.watchImg}
                alt="Watch Film Icon"
                className="w-5 h-5"
              />
            </div>

            <div className="Link opacity-0 translate-y-5 flex items-center gap-2">
              <p>Watch the event</p>
              <img
                src={utils.images.rightImg}
                alt="Right Arrow Icon"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};
