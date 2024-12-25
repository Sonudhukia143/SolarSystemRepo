export default function data () {
    const arr = [
        {
            name: "Mercury",
            speed: 0.02, // Orbital speed
            texture: "textures/mercury.jpg", // Texture file path
            radius: 4, // Planet size
            distance: 115, // Distance from the Sun
            moons: [] // No moons
        },
        {
            name: "Venus",
            speed: 0.015,
            texture: "textures/venus.jpg",
            radius: 8,
            distance: 135,
            moons: []
        },
        {
            name: "Earth",
            speed: 0.01,
            texture: "textures/earth.jpg",
            radius: 14,
            distance: 170,
            moons: [
                {
                    name: "Moon",
                    speed: 0.03,
                    texture: "textures/moon.jpg",
                    radius: 3,
                    distance: 20, // Relative to Earth
                }
            ]
        },
        {
            name: "Mars",
            speed: 0.008,
            texture: "textures/mars.jpg",
            radius: 18,
            distance: 230,
            moons: [
                {
                    name: "Phobos",
                    speed: 0.04,
                    texture: "textures/phobos.jpg",
                    radius: 1.5,
                    distance: 25
                },
                {
                    name: "Deimos",
                    speed: 0.02,
                    texture: "textures/deimos.jpg",
                    radius: 1,
                    distance: 30
                }
            ]
        },
        {
            name: "Jupiter",
            speed: 0.005,
            texture: "textures/jupiter.jpg",
            radius: 25,
            distance: 300,
            moons: [
                { name: "Io", speed: 0.05, texture: "textures/io.jpg", radius: 2.6, distance: 31 },
                { name: "Europa", speed: 0.03, texture: "textures/europa.jpg", radius: 2.1, distance: 37 },
                { name: "Ganymede", speed: 0.02, texture: "textures/ganymede.jpg", radius: 1.3, distance: 42 },
                { name: "Callisto", speed: 0.01, texture: "textures/callisto.jpg", radius: 1.8, distance: 47 }
            ]
        },
        {
            name: "Saturn",
            speed: 0.003,
            texture: "textures/saturn.jpg",
            radius: 40,
            distance: 420,
            moons: [
                { name: "Titan", speed: 0.02, texture: "textures/titan.jpg", radius: 5.1, distance: 50 },
                { name: "Rhea", speed: 0.01, texture: "textures/rhea.jpg", radius: 2.3, distance: 60 }
            ]
        },
        {
            name: "Uranus",
            speed: 0.002,
            texture: "textures/uranus.jpg",
            radius: 35,
            distance: 540,
            moons: [
                { name: "Titania", speed: 0.015, texture: "textures/titania.jpg", radius: 2.4, distance: 50 },
                { name: "Oberon", speed: 0.01, texture: "textures/oberon.jpg", radius: 2.4, distance: 55 }
            ]
        },
        {
            name: "Neptune",
            speed: 0.001,
            texture: "textures/neptune.jpg",
            radius: 30,
            distance: 640,
            moons: [
                { name: "Triton", speed: 0.02, texture: "textures/triton.jpg", radius: 2.7, distance: 50 }
            ]
        }
    ];
    
    return arr;
}