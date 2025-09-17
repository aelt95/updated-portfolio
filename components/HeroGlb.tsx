"use client";
import { OrbitControls, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const HeroGlb = () => {
  return (
    <section className="h-svh fixed w-full -z-10">
      <Canvas camera={{ fov: 25 }}>
        <ambientLight intensity={1} />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <directionalLight position={[1, 0, 5]} color={"red"} />
        <mesh scale={1}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color={"purple"} wireframe />
        </mesh>
      </Canvas>
    </section>
  );
};

export default HeroGlb;
