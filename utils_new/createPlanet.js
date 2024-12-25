export default function createPlanets (planets,textureLoader,THREE,scene) {
    const arr = planets.map(planet => {
        const planetTexture = textureLoader.load(planet.texture);
    
        const planetGeometry = new THREE.SphereGeometry(planet.radius, 36, 36);
        const planetMaterial = new THREE.MeshStandardMaterial({
            map: planetTexture,
            metalness: 0.9,
            emissiveMap: planetTexture, // Use the texture to define emissive areas
            emissiveIntensity: 0.2, // Adjust the glow intensity
        });
    
        const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
        planetMesh.position.set(planet.distance, 0, 0);
    
        planetMesh.castShadow = true;
        planetMesh.receiveShadow = true;
    
        const planetGroup = new THREE.Group();
        planetGroup.add(planetMesh);
    
        const atmosphereGeometry = new THREE.SphereGeometry(planet.radius + 1, 36, 36);
        const atmosphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x87CEEB,
            transparent: true,
            opacity: 0.3,
        });
        const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        planetGroup.add(atmosphereMesh);
    
    
        planet.moons.forEach(moon => {
            const moonTexture = textureLoader.load(moon.texture);
            const moonGeometry = new THREE.SphereGeometry(moon.radius, 36, 36);
            const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
            const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
            moonMesh.position.set(moon.distance, 0, 0);
            moonMesh.receiveShadow = true;
            moonMesh.castShadow = true;
    
            planetMesh.add(moonMesh);
        })
    
        scene.add(planetGroup);
    
        return planetMesh;
    });

    return arr;
}