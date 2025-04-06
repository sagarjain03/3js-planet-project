import * as THREE from 'three';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'; // ✅ Import EXRLoader

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 15;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// ✅ Load HDRI using EXRLoader
const exrLoader = new EXRLoader();
exrLoader.load(
  'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/1k/dikhololo_night_1k.exr',
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
  },
  undefined,
  (error) => {
    console.error('Failed to load HDRI:', error);
  }
);

// 🌌 Add starry background
const textureLoader = new THREE.TextureLoader();
textureLoader.load('/stars.jpg', (texture) => {
  scene.background = texture;
  
});

// Handle Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 🌐 Revolving Spheres Setup
const radius = 7;
const angles = [0, 90, 180, 270]; // In degrees
const spheres = [];

// 🎨 Define texture paths for each sphere
const texturePaths = [
  '/csilla/color.png',
  '/earth/map.jpg',
  '/venus/map.jpg',
  '/volcanic/color.png',
];

angles.forEach((angle, i) => {
  const radian = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radian);
  const z = radius * Math.sin(radian);

  const geometry = new THREE.SphereGeometry(2.5, 32, 32); // Larger size
  const texture = textureLoader.load(texturePaths[i]);

  // ✅ Non-shiny material
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    metalness: 0,   // ← no reflectiveness
    roughness: 1,   // ← maximum matte
  });

  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(x, -2.3, z);
  scene.add(sphere);

  spheres.push({ mesh: sphere, angle: radian });
});

// Animate
function animate() {
  requestAnimationFrame(animate);

  // 🔄 Update sphere positions
  spheres.forEach((obj) => {
    obj.angle += 0.001;
    obj.mesh.position.x = radius * Math.cos(obj.angle);
    obj.mesh.position.z = radius * Math.sin(obj.angle);
  });

  renderer.render(scene, camera);
}

animate();
