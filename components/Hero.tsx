import LogoMain from "icons/logo";
import React from "react";

import HeroFeatures from "./HeroFeatures";

const Hero = () => {
  return (
    <div className="relative pb-10 flex flex-col items-center justify-center  md:px-8 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center mt-10">
        <LogoMain className="h-20 w-10 mb-4 text-zinc-500" />
        <h1 className="text-4xl md:text-7xl font-bold mb-14 relative text-center text-zinc-700">
          AI Automations that{" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">
            Make Sense.
          </span>
        </h1>
        <h2 className="relative font-regular text-base text-zinc-500 tracking-wide mb-20 text-center max-w-3xl mx-auto antialiased">
          We design and deploy AI agents, automations, and data integrations
          that reduce costs and grow revenue. From lead capture to customer
          support, we build reliable systems tailored to your stack.
        </h2>
      </div>
      <HeroFeatures />
      <div className="relative z-10 group mb-20">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <a
          className="relative z-10 px-6 py-3 bg-white text-zinc-700 font-bold rounded-lg block"
          href="#recent-work"
        >
          Explore Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
