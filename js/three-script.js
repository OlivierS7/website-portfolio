// Canvas
const canvas = document.getElementById('webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
let objectsDistance = 4

// Material
const material1 = new THREE.MeshToonMaterial({ color: '#ccb3ff' })

const material2 = new THREE.MeshToonMaterial({ color: '#eef4f3' })

const material3 = new THREE.MeshToonMaterial({ color: '#c1f8ab' })

const material4 = new THREE.MeshToonMaterial({ color: '#ffdbb0' })


// const loader = new THREE.TextureLoader();

/* const material = new THREE.MeshBasicMaterial({
    map: loader.load("./img/textures.png"),
});

const material2 = new THREE.MeshBasicMaterial({
    map: loader.load("./img/textures-2.png"),
});

const material3 = new THREE.MeshBasicMaterial({
    map: loader.load("./img/textures-3.png"),
}); */

let MESHES_NUMBER;
let client_offset;

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

if(sizes.width < 750) {
    MESHES_NUMBER = 9
    client_offset = 5
} else {
    MESHES_NUMBER = 18
    client_offset = 5.5
}

if(sizes.height < 650) {
    objectsDistance = 8;
    client_offset = 3
} else if(sizes.height < 750) {
    objectsDistance = 6;
}

// Texture Initialisation
let textures_array = []
for(i = 0; i < MESHES_NUMBER; i++) {
    const mesh_number = Math.random() * 4;
    if(mesh_number < 1) {
        textures_array.push(material1)
    } else if (mesh_number < 2) {
        textures_array.push(material2)
    } else if (mesh_number < 3) {
        textures_array.push(material3)
    } else {
        textures_array.push(material4)
    }
}



// Meshes creator
let meshes_array = [];

for(i = 0; i < MESHES_NUMBER; i++) {
    const mesh_number = i % 4;
    switch(mesh_number) {
        case 0:
            const torus = new THREE.Mesh(
                new THREE.TorusGeometry(0.5, 0.2, 16, 60),
                textures_array[i]
            )
            meshes_array.push(torus);
        break;
        case 1:
            const cone = new THREE.Mesh(
                new THREE.ConeGeometry(0.5, 1.2, 32),
                textures_array[i]
            )
            meshes_array.push(cone)
        break;
        case 2:
            const torus_knot = new THREE.Mesh(
                new THREE.TorusKnotGeometry(0.4, 0.18, 100, 16),
                textures_array[i]
            )
            meshes_array.push(torus_knot)
        break;
        case 3:
            const torus_knot_two = new THREE.Mesh(
                new THREE.TorusKnotGeometry(0.7, 0.18, 100, 16, 1, 4),
                textures_array[i]
            )
            meshes_array.push(torus_knot_two)
        break;
        default:
            const default_mesh = new THREE.Mesh(
                new THREE.TorusGeometry(1, 0.4, 16, 60),
                textures_array[i]
            )
            meshes_array.push(default_mesh)
    }
}


for(i = 0; i < MESHES_NUMBER; i++);

meshes_array.forEach(mesh => {
    random = Math.random() < 0.5 ? -1 : 1
    random_y = Math.random() * sizes.height / 60 - client_offset;
    random_x = Math.random() * sizes.width / 50
    mesh.position.y = - objectsDistance * random_y
    mesh.position.x = random_x * random
    scene.add(mesh)
});

/**
 * Particles
 */
// Geometry
const particlesCount = 200
const positions = new Float32Array(particlesCount * 3)

for(let i = 0; i < particlesCount; i++)
{
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * meshes_array.length
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: '#ffeded',
    sizeAttenuation: true,
    size: 0.03
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Scroll
 */
let scrollY = window.scrollY
let currentSection = 0

window.addEventListener('scroll', () =>
{
    scrollY = window.scrollY
    const newSection = Math.round(scrollY / sizes.height)
    console.log(newSection != currentSection);
    if(newSection != currentSection)
    {
        currentSection = newSection
        gsap.to(
            meshes_array[currentSection].rotation,
            {
                duration: 1.5,
                ease: 'power2.inOut',
                x: '+=6',
                y: '+=3'
            }
        )
    }
})

/**
 * three_Cursor
 */
const three_cursor = {}
three_cursor.x = 0
three_cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    three_cursor.x = event.clientX / sizes.width - 0.5
    three_cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Camera
 */
// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 70
cameraGroup.add(camera)

console.log(sizes);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0
let meshesRotationDirection = [];

for(const mesh of meshes_array){
    meshesRotationDirection.push(Math.random() < 0.5 ? false : true)
}

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime


    // Animate meshes
    for(i = 0; i < MESHES_NUMBER; i++) {
        random = Math.random() * 0.7
        if(meshesRotationDirection[i]) {
            meshes_array[i].rotation.x += deltaTime * (0.1 + random)
            meshes_array[i].rotation.y += deltaTime * (0.16 + random)
        } else {
            meshes_array[i].rotation.x -= deltaTime * (0.1 + random)
            meshes_array[i].rotation.y -= deltaTime * (0.16 + random)
        }
    }

    // Animate camera
    camera.position.y = - scrollY / sizes.height * objectsDistance

    const parallaxX = three_cursor.x * 0.5
    const parallaxY = - three_cursor.y * 0.5
    
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()