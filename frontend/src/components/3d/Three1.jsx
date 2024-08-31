import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
// import { useEffect } from "react";
import React from "react"
// import { gsap } from "gsap";
import * as THREE from "three";

function ThreeScene() {
  const tex = useTexture("/threed/models/Group1.png");
  tex.needsUpdate = true;

  // Reference for the mesh
  const meshRef = React.useRef();

  // Update the mesh rotation based on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const rotationValue = scrollPosition * 0.02; // Adjust the speed of rotation
  //     gsap.to(meshRef.current.rotation, {
  //       x: rotationValue,
  //       duration: 0.1,
  //       ease: "power2.out",
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight />
      <mesh ref={meshRef} rotation={[0, 0.4, 0.5]}>
        <cylinderGeometry args={[1.5, 1.5, 1.5, 50, 50, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

function Three1() {
  return (
    <div className="h-[120vh] w-full bg-yellow-600 grid grid-cols-2">
      <div className="h-full w-full flex justify-center items-center flex-col">
        <h1 className="text-[4em]">Our Mission</h1>
        <p className="text-[1.5em] p-5">
        We aim to revolutionize the way you plan and experience travel. By harnessing the power of technology, we strive to create a seamless, dynamic planning process that adapts to your needs and ensures your journey is as smooth and enjoyable as possible.
        </p>
      </div>
      <div className="h-full w-full">
        <Canvas>
          <ThreeScene />
        </Canvas>
      </div>
    </div>
  );
}

export default Three1;
