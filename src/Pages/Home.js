import React from "react";
import { Hero } from "../component/hero";
import { Highlights } from "../component/highlights";
import { Model } from "../component/Model";
import { Features } from "../component/Features";
import { MoreInfo } from "../component/MoreInfo";

export const Home = () => {
  return (
    <section>
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <MoreInfo />
    </section>
  );
};
