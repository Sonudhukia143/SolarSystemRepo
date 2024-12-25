export default function renderloop (newPlanetArray,planets,meteor1,meteor2,meteor3,meteor4,controls,renderer,scene,camera,window) {
    newPlanetArray.forEach((planet, index) => {
        planet.rotation.y += planets[index].speed;

        planet.position.x = Math.cos(planet.rotation.y / 5) * planets[index].distance;
        planet.position.z = Math.sin(planet.rotation.y / 5) * planets[index].distance;


        if (planet.children.length > 1) {
            planet.children.forEach((child, ind) => {
                child.rotation.y += planets[index].moons[ind].speed;
                child.position.x = Math.cos(child.rotation.y / 5) * planets[index].moons[ind].distance;
                child.position.z = Math.sin(child.rotation.y / 5) * planets[index].moons[ind].distance;

            })
        }
    })

    meteor1.rotation.y += 0.02;
    meteor2.rotation.y += 0.01;
    meteor3.rotation.y += 0.01;
    meteor4.rotation.y += 0.01;

    meteor1.position.z += Math.sin(meteor1.rotation.y * 1) * 50;
    meteor1.position.x += Math.cos(meteor1.rotation.y * 1) * 60;

    meteor2.position.x += Math.sin(meteor2.rotation.y * 1) * 20;
    meteor2.position.z += Math.cos(meteor2.rotation.y * 1) * 22;

    meteor3.position.x += Math.sin(meteor3.rotation.y * 1) * 30;
    meteor3.position.z += Math.cos(meteor3.rotation.y * 1) * 32;

    meteor4.position.x += Math.sin(meteor4.rotation.y * 1) * 10;
    meteor4.position.z += Math.cos(meteor4.rotation.y * 1) * 12;


    controls.update();
    renderer.render(scene, camera);

    window.requestAnimationFrame(() => renderloop(newPlanetArray, planets, meteor1, meteor2, meteor3, meteor4, controls, renderer, scene, camera, window));

}
