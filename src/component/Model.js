import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { images } from "../utils/index";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants/index";
import { animateWithGsapTimeline } from "../utils/animations";

export function Model() {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: images.yellowImg,
  });

  const views = useRef([
    { ref: useRef(new THREE.Group()), control: useRef(), rotation: 0 },
    { ref: useRef(new THREE.Group()), control: useRef(), rotation: 0 },
  ]);

  const tl = useRef(gsap.timeline());

  useEffect(() => {
    const current = size === "large" ? 0 : 1;
    const next = size === "large" ? 1 : 0;

    animateWithGsapTimeline(
      tl.current,
      views.current[current].ref,
      views.current[current].rotation,
      `#view${current + 1}`,
      `#view${next + 1}`,
      {
        transform: size === "large" ? "translateX(-100%)" : "translateX(0)",
        duration: 2,
      },
    );
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width bg-gray-300 rounded-2xl p-2 m-1">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            {views.current.map(({ ref, control }, i) => (
              <ModelView
                key={i}
                index={i + 1}
                groupRef={ref}
                gsapType={`view${i + 1}`}
                controlRef={control}
                setRotationState={(rotation) =>
                  (views.current[i].rotation = rotation)
                }
                item={model}
                size={size}
              />
            ))}
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}>
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}>
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
