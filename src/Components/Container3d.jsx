import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { gsap } from "https://cdn.skypack.dev/gsap";
import Bike from "../assets/models/bike2.glb";

const Container3d = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Hide 3D container on mobile
    if (isMobile) {
      const container = document.getElementById("container3D");
      if (container) container.style.display = "none";
      return;
    }

    // Camera
    const camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 13;

    // Scene & Renderer
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const container = document.getElementById("container3D");
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 3.5);
    const topLight = new THREE.DirectionalLight(0xffffff, 8);
    topLight.position.set(500, 500, 500);
    scene.add(ambientLight, topLight);

    // Load model
    const loader = new GLTFLoader();
    let bee;
    let mixer;

    const arrPositionModel = [
      {
        id: "banner",
        position: { x: 0, y: -1, z: 0 },
        rotation: { x: 0, y: 1.5, z: 0 },
      },
      {
        id: "intro",
        position: { x: 1, y: -1, z: -5 },
        rotation: { x: 0.5, y: -0.5, z: 0 },
      },
      {
        id: "description",
        position: { x: -1, y: -1, z: -5 },
        rotation: { x: 0, y: 0.5, z: 0 },
      },
      {
        id: "contact",
        position: { x: 0.8, y: -1, z: 0 },
        rotation: { x: 0.3, y: -0.5, z: 0 },
      },
    ];

    const modelMove = () => {
      const sections = document.querySelectorAll(".section");
      let currentSection;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      const activeIndex = arrPositionModel.findIndex(
        (val) => val.id === currentSection
      );
      if (activeIndex >= 0 && bee) {
        const coords = arrPositionModel[activeIndex];
        gsap.to(bee.position, {
          ...coords.position,
          duration: 3,
          ease: "power1.out",
        });
        gsap.to(bee.rotation, {
          ...coords.rotation,
          duration: 3,
          ease: "power1.out",
        });
      }
    };

    loader.load(
      Bike,
      function (gltf) {
        bee = gltf.scene;
        bee.scale.set(1, 1, 1);
        scene.add(bee);

        mixer = new THREE.AnimationMixer(bee);
        if (gltf.animations.length > 0) {
          mixer.clipAction(gltf.animations[0]).play();
        }

        modelMove(); // Position on load
      },
      undefined,
      function (error) {
        console.error("Error loading GLB model:", error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(0.02);
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("scroll", modelMove);

    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    return () => {
      window.removeEventListener("scroll", modelMove);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div id="container3D" style={{ width: "100vw", height: "100vh" }}></div>
  );
};

export default Container3d;
