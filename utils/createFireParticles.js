export default function createFireParticles(THREE) {
    const fireParticleGeometry = new THREE.BufferGeometry();
    const fireParticleCount = 10000;
    const firePositions = new Float32Array(fireParticleCount * 3);

    for (let i = 0; i < fireParticleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 80 + Math.random() * 10; // Radius slightly larger than the sun
        firePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        firePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        firePositions[i * 3 + 2] = r * Math.cos(phi);
    }

    fireParticleGeometry.setAttribute('position', new THREE.BufferAttribute(firePositions, 3));

    const fireParticleMaterial = new THREE.PointsMaterial({
        color: '#fbae30', // Fiery orange
        size: 2, // Particle size
        transparent: false,
        opacity: 0.5,
        depthWrite: false, // Avoid depth issues
        blending: THREE.AdditiveBlending, // Glowing effect
    });


        function animateFireParticles() {
            const positions = fireParticleGeometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                const length = Math.sqrt(
                    positions[i] ** 2 + positions[i + 1] ** 2 + positions[i + 2] ** 2
                );
                const speed = Math.random() * 0.5; // Random speed for dynamic effect
                positions[i] += (positions[i] / length) * speed;
                positions[i + 1] += (positions[i + 1] / length) * speed;
                positions[i + 2] += (positions[i + 2] / length) * speed;
        
                if (length > 104) { // Reset particles when they move too far
                    positions[i] *= 0.5;
                    positions[i + 1] *= 0.5;
                    positions[i + 2] *= 0.5;
                }
            }
            fireParticleGeometry.attributes.position.needsUpdate = true;
            requestAnimationFrame(animateFireParticles);
        }
        animateFireParticles();

        return new THREE.Points(fireParticleGeometry, fireParticleMaterial);

}