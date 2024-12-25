export default function createMeteor(THREE) {
    const meteorGeometry = new THREE.SphereGeometry(10, 5, 5);
    const meteorMaterial = new THREE.MeshStandardMaterial({
        color: 'grey',
        emissive: new THREE.Color('grey'),
        emissiveIntensity: 1.5,
        roughness: 0.9, // To give it a burning rock texture
        metalness: 0.2
    });

    const meteor1 = new THREE.Mesh(meteorGeometry, meteorMaterial);
    const meteor2 = new THREE.Mesh(meteorGeometry, meteorMaterial);
    const meteor3 = new THREE.Mesh(meteorGeometry, meteorMaterial);
    const meteor4 = new THREE.Mesh(meteorGeometry, meteorMaterial);

    meteor1.position.y = 300;
    meteor1.position.z = 100;
    meteor1.position.x = 100;
    meteor1.scale.set(5,5,5);

    meteor2.position.y = 400;
    meteor2.position.x = 100
    meteor2.scale.set(2,2,2);


    meteor3.position.y = 800;
    meteor3.position.z = -100;
    meteor3.position.x = -300;
    meteor3.scale.set(3,3,3);

    meteor4.position.y = 0;
    meteor4.position.x = 0;

    return [meteor1,meteor2,meteor3,meteor4]
}

