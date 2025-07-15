// import React, { useEffect } from "react";
// import "../Banner.css";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // correct path
// import model3d from "../assets/models/train.glb";

// const Container3d = () => {
//   useEffect(() => {
//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(
//       10, // better FOV
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 10;

//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     const container = document.getElementById("container3d");
//     container.appendChild(renderer.domElement);

//     // Add lights
//     const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
//     scene.add(light);

//     const loader = new GLTFLoader();
//     let trainModel;

//     loader.load(
//       model3d,
//       (gltf) => {
//         trainModel = gltf.scene;
//         scene.add(trainModel);
//       },
//       undefined,
//       (error) => {
//         console.error("Error loading model:", error);
//       }
//     );

//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (trainModel) {
//         trainModel.rotation.y += 0.005; // slow rotation
//       }
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup on unmount
//     return () => {
//       renderer.dispose();
//       container.innerHTML = "";
//     };
//   }, []);

//   return <div id="container3d" className="w-full h-screen" />;
// };

// export default Container3d;
