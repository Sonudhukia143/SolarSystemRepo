import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import data from './utils/data';
import createPlanets from './utils/createPlanet';
import createMeteor from './utils/createMeteor';
import createFireParticles from './utils/createFireParticles';
import sunShineLogic from './utils/sunShineLogic';
import renderloop from './utils/renderLoop';
import createSun from './utils/createSun';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

//camera controls
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
camera.position.z = 600;
camera.position.x = 0;
camera.position.y = 1000;
camera.lookAt(0, 0, 0);

const light = new THREE.AmbientLight('white', 0.3);
scene.add(light);

const pointLight = new THREE.PointLight('white', 2)
pointLight.position.set(0, 0, 0);
pointLight.castShadow = true;
pointLight.shadow.bias = -0.01;
pointLight.intensity = 1000000;
//pointLight.shadow.mapSize.set(2048, 2048);
pointLight.shadow.color = new THREE.Color(0x222222); // Darker shadow color
scene.add(pointLight);

//find a way to use it on every resize
//try using document.body.appendChild inside resize funtion
//let screenSize = () => window.innerWidth/window.innerHeight;

const textureLoader = new THREE.TextureLoader();
//background galaxy
const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
    '/textures/map/px.png', // Right
    '/textures/map/nx.png', // Left
    '/textures/map/nz.png', // Top
    '/textures/map/pz.png', // Bottom
    '/textures/map/py.png', // Front
    '/textures/map/ny.png'  // Back
]);
// Set the cube map as the scene background
scene.background = texture;

// Optionally, use the same HDRi for lighting (ambient light, reflections, etc.)
//scene.environment = texture;

//created planets
const planets = data();
const newPlanetArray = createPlanets(planets,textureLoader,THREE,scene);

//created sun
const sun = createSun(THREE,textureLoader);
scene.add(sun);

//created meteor
const [meteor1,meteor2,meteor3,meteor4] = createMeteor(THREE);
scene.add(meteor1,meteor2,meteor3,meteor4);

// Step 4: Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Optional: Smooth damping effect
controls.dampingFactor = 0.05; // Optional: Damping factor for smoother controls

//resizes the window according to screensize changes
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

renderloop(newPlanetArray,planets,meteor1,meteor2,meteor3,meteor4,controls,renderer,scene,camera,window);

///sun shining logic will be altered later
sunShineLogic(THREE,scene,sun,controls,renderer,camera);

const fireParticles = createFireParticles(THREE);
scene.add(fireParticles);
