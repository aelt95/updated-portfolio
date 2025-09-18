"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from(".line-1", {
          y: 50,
          opacity: 0,
          duration: 0.8,
        })
        .from(".line-2", {
          scale: 0.4,
          opacity: 0,
          duration: 1,
        })
        .from(".line-3", {
          y: -50,
          opacity: 0,
          duration: 0.8,
        })
        .from(".cta-btn", {
          y: 30,
          opacity: 0,
          duration: 0.6,
        });
    }, containerRef);

    return () => gsapContext.revert();
  }, []);
  return (
    <section ref={containerRef} className="flex flex-col h-svh justify-center max-w-[1300px] mx-auto overflow-hidden">
      <h2 className="line-1 text-4xl pl-4">Let&apos;s build something</h2>
      <h1 className="line-2 text-[160px] w-fit leading-none bg-linear-to-r  from-[#fcce37] to-red-500/70 bg-clip-text text-transparent">
        BIG
      </h1>
      <h2 className="line-3 text-4xl pl-4">Together</h2>
    </section>
  );
};

export default Hero;
