export default function sunShineLogic(THREE,scene,sun,controls,renderer,camera) {
    const dynamicSunLight = new THREE.PointLight(0xffffff, 2, 1000); // (color, intensity, distance)
    dynamicSunLight.position.set(0, 0, 0); // Position at the sun
    scene.add(dynamicSunLight);

    // Optional: Add a helper to visualize the light
    const lightHelper = new THREE.PointLightHelper(dynamicSunLight, 20);
    scene.add(lightHelper);

    let time = 0;


    function sunLoop() {
        time += 0.05;
        const fluctuatingIntensity = 2 + Math.sin(time) * 0.5;

        // Update light intensity
        dynamicSunLight.intensity = fluctuatingIntensity;

        // Update sun emissive intensity
        sun.material.emissiveIntensity = fluctuatingIntensity;
        controls.update();

        renderer.render(scene, camera);
//        window.requestAnimationFrame(sunLoop);

        window.requestAnimationFrame(() => sunLoop());

    }

    sunLoop();
}