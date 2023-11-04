"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, PrimitiveProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Art = () => {
    const model = useGLTF("/lorenz_attractor.glb");
    const ref = useRef<PrimitiveProps>();

    useFrame((state, delta, xrFrame) => {
        if(ref.current){
            ref.current.rotation.y+=delta/50;
        }
    });
	return (<primitive ref={ref} object={model.scene} scale={.1} rotation-x={Math.PI/2} rotation-y={Math.PI/2}/>);
};

export default function LorenzAttractor(){
	return (
      <Canvas>
        <OrbitControls enableDamping/>
        <ambientLight intensity={0.1} />
        <Art />
      </Canvas>
	);
}