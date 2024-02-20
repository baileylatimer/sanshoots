// src/components/ThreeCarousel.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCarousel = ({ images }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    // Renderer setup with transparent background
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Adding images as textures on 3D objects
    const planes = [];
    images.forEach((image, index) => {
      const texture = new THREE.TextureLoader().load(image);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const geometry = new THREE.PlaneGeometry(1, 1); // Adjust geometry size
      const plane = new THREE.Mesh(geometry, material);
      planes.push(plane);
      scene.add(plane);

      // Position the items in a circle
      const angle = index * (Math.PI * 2) / images.length;
      const distance = 2; // Adjust distance from center
      plane.position.set(Math.cos(angle) * distance, 0, Math.sin(angle) * distance);
      plane.lookAt(0, 0, 0); // Make the plane face the center
    });

    camera.position.z = 5; // Adjust camera position

    // Scroll-based rotation
    const onScroll = () => {
      const rotationAngle = window.scrollY * 0.001; // Adjust the multiplier as needed
      planes.forEach((plane) => {
        plane.rotation.y = rotationAngle;
      });
      renderer.render(scene, camera);
    };

    window.addEventListener('scroll', onScroll);

    // Initial render
    renderer.render(scene, camera);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [images]); // Ensure effect runs when images prop changes

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }}></div>;
};

export default ThreeCarousel;
