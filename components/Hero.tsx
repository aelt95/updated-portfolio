import React from "react";

const Hero = () => {
  const color = "#fff";
  return (
    <section className="flex flex-col h-svh justify-center max-w-[1300px] mx-auto">
      <h2 className="text-4xl pl-4">Let's build something</h2>
      <h1 className="text-[160px] leading-none bg-linear-to-r from-[#fcad37] to-red-500/70 bg-clip-text text-transparent">
        BIG
      </h1>
      <h2 className="text-4xl pl-4">Together</h2>
    </section>
  );
};

export default Hero;
