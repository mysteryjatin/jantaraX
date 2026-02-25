"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

const WavyTorus = () => {
  const ref = useRef<Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.002;
      ref.current.rotation.y += 0.001;
      ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });
  return (
    <Torus ref={ref} args={[3.5, 0.4, 16, 100]} rotation={[0.5, 0, 0]}>
      <meshStandardMaterial color="#E6DACE" roughness={0.5} />
    </Torus>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <WavyTorus key="wavy-torus" />
    </Canvas>
  );
};

export default Scene;
