# Planet Project 🌍

A 3D interactive planet scene built with **Three.js** and enhanced with animations and effects. This project features revolving planets, a starry background, and a typewriter effect for a welcoming message.

## Features
- **3D Revolving Planets**: Four textured spheres revolving around a central point.
- **Starry Background**: A realistic starry night sky using HDRI and texture mapping.
- **Typewriter Effect**: A dynamic welcome message with a typewriter animation.
- **Custom Font**: Styled with the **Gilroy SemiBold** font for a clean and modern look.

## Technologies Used
- [Three.js](https://threejs.org/) for 3D rendering.
- [GSAP](https://greensock.com/gsap/) for animations.
- [TailwindCSS](https://tailwindcss.com/) for styling.
- [EXRLoader](https://threejs.org/docs/#examples/en/loaders/EXRLoader) for HDRI environment mapping.

## Installation

1. Clone the repository:
   ```bash
   https://github.com/sagarjain03/3js-planet-project.git
   cd planet-project
   ```

How It Works
1. 3D Scene Setup
The main.js file initializes a Three.js scene with a perspective camera and WebGL renderer.
Four spheres are created with textures and revolve around a central point.
2. Starry Background
An HDRI environment map is loaded using EXRLoader for realistic lighting.
A starry texture is applied as the background.
3. Typewriter Effect
The index.html file includes a GSAP animation for the typewriter effect, displaying a welcome message dynamically.
4. Styling
The style.css file includes custom styles for the title and uses the Gilroy SemiBold font.
Customization
Change Textures
Replace the texture paths in main.js with your own textures:

const texturePaths = [
  '/path/to/texture1.jpg',
  '/path/to/texture2.jpg',
  '/path/to/texture3.jpg',
  '/path/to/texture4.jpg',
];

Acknowledgments
Polyhaven for free HDRI maps.
Three.js for the amazing 3D library.
GSAP for smooth animations.
Happy coding! 🚀 ```