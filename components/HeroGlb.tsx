"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Scene = () => {
  const meshRef = useRef(null) as any;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001; // rota en Y
      meshRef.current.rotation.x += 0.0005; // opcional: rota también en X
    }
  });
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enablePan={false} enableZoom={false} />
      <directionalLight position={[-1, 0, 5]} intensity={2} color={"red"} />
      <mesh position={[0, 0, 0]} ref={meshRef} rotation={[Math.PI / 3, 0, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color={"yellow"} metalness={1} roughness={0.4} wireframe />
      </mesh>
    </>
  );
};

const HeroGlb = () => {
  return (
    <section className="h-svh fixed w-full -z-10">
      <Canvas camera={{ fov: 25 }}>
        <Scene />
      </Canvas>
    </section>
  );
};

export default HeroGlb;
