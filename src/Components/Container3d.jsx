import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { gsap } from "https://cdn.skypack.dev/gsap";
import Bike from "../assets/models/bike2.glb";

const Container3d = () => {
  useEffect(() => {
    // Determine if device is mobile
    let isMobile = window.innerWidth < 768;

    // Camera setup based on screen size
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 20 : 10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 18 : 13;

    // Scene & Renderer
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Mount canvas to DOM
    const container = document.getElementById("container3D");
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    const topLight = new THREE.DirectionalLight(0xffffff, 5);
    topLight.position.set(500, 500, 500);
    scene.add(ambientLight, topLight);

    // Load model
    const loader = new GLTFLoader();
    let bee;
    let mixer;

    // Model positions per section
    const getArrPositionModel = () => {
      return isMobile
        ? [
            {
              id: "banner",
              position: { x: 0, y: -1.5, z: 0 },
              rotation: { x: 0, y: 1.5, z: 0 },
            },
            {
              id: "intro",
              position: { x: 0.5, y: -1.5, z: -5 },
              rotation: { x: 0.4, y: -0.4, z: 0 },
            },
            {
              id: "description",
              position: { x: -0.5, y: -1.5, z: -5 },
              rotation: { x: 0, y: 0.5, z: 0 },
            },
            {
              id: "contact",
              position: { x: 0.8, y: -1.5, z: 0 },
              rotation: { x: 0.3, y: -0.5, z: 0 },
            },
          ]
        : [
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
    };

    let arrPositionModel = getArrPositionModel();

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
      if (activeIndex >= 0) {
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

    // Load the 3D model
    loader.load(
      Bike,
      function (gltf) {
        bee = gltf.scene;

        // Set responsive scale
        bee.scale.set(
          isMobile ? 0.7 : 1,
          isMobile ? 0.7 : 1,
          isMobile ? 0.7 : 1
        );

        scene.add(bee);
        mixer = new THREE.AnimationMixer(bee);

        if (gltf.animations.length > 0) {
          mixer.clipAction(gltf.animations[0]).play();
        }

        modelMove(); // Position model on load
      },
      undefined,
      function (error) {
        console.error("Error loading GLB model:", error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(0.02);
      renderer.render(scene, camera);
    };
    animate();

    // Scroll moves model
    const handleScroll = () => {
      if (bee) modelMove();
    };

    // Resize responsiveness
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      isMobile = width < 768;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.fov = isMobile ? 20 : 10;
      camera.position.z = isMobile ? 18 : 13;
      camera.updateProjectionMatrix();

      // Update scale dynamically
      if (bee) {
        bee.scale.set(
          isMobile ? 0.7 : 3,
          isMobile ? 0.7 : 3,
          isMobile ? 0.7 : 3
        );
      }

      // Update position mapping for mobile
      arrPositionModel = getArrPositionModel();
      modelMove();
    };

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div id="container3D" style={{ width: "100vw", height: "100vh" }}></div>
  );
};

export default Container3d;
