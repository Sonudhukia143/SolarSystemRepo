export default function createSun(Class,textureLoader) {
    const sphereGeometry = new Class.SphereGeometry(100, 36, 36);
    //sun
    const sunTexture = textureLoader.load('/textures/sun.jpg');
    const sunMaterial = new Class.MeshStandardMaterial({

        map: sunTexture, // Apply the sun's surface texture
        emissive: new Class.Color(0xffffff), // White light emitted
        emissiveMap: sunTexture, // Use the texture to define emissive areas
        emissiveIntensity: 1, // Adjust the glow intensity


    });
    return new Class.Mesh(sphereGeometry, sunMaterial);
    
}