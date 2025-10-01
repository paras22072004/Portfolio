import React from "react";
import { useGLTF } from "@react-three/drei";

const Model = ({ scale = 1 }) => {
  const { scene } = useGLTF("/models/laptop.glb"); // path sahi hona chahiye
  return <primitive object={scene} scale={scale} />;
};

export default Model;
