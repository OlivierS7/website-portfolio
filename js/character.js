// // Canvas
// const canvas_character = document.getElementById('character')

// // Scene
// const scene_character = new THREE.Scene()

// const loader = new THREE.GLTFLoader();

// let character_mesh  = [];

// loader.load('./gltf/scene.gltf', function ( gltf ) {
//         let character = gltf.scene;
//         character.scale.set(2, 2, 2);
//         character.position.y = 0.2;
//         character.position.x = 0;
//         character_mesh.push(character);
// 	    scene_character.add(character);
//         animate();
//     }, 
//     // called while loading is progressing
//     function ( xhr ) {
//         console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
//     },
//     // called when loading has errors
//     function ( error ) {
//         console.log( 'An error happened' + error );
//     }
// );

// const directionalLight_character = new THREE.DirectionalLight('#ffffff', 1)
// directionalLight_character.position.set(5, 5, 0)
// scene_character.add(directionalLight_character)

// /**
//  * Camera
//  */
// // Group
// const cameraGroup_character = new THREE.Group()
// scene_character.add(cameraGroup_character)

// console.log(canvas_character);

// // Base camera
// const camera_character = new THREE.PerspectiveCamera(35, canvas_character.width / canvas_character.height, 0.1, 100)
// camera_character.position.z = 2
// cameraGroup_character.add(camera_character)

// const renderer_character = new THREE.WebGLRenderer({
//     canvas: canvas_character,
//     alpha: true
// })
// renderer_character.setSize(570, 307)
// renderer_character.setPixelRatio(Math.min(window.devicePixelRatio, 2))


// const animate = () =>
// {
//    let rotation = character_mesh[0].rotation.y % (2 * Math.PI)
//     if (rotation > Math.PI) {
//         character_mesh[0].rotation.y += 0.01;
//     } else {
//         character_mesh[0].rotation.y += 0.002;
//     }
    
//     // Render
//     renderer_character.render(scene_character, camera_character)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(animate)
// }

let typed = new Typed('.animated-text', {
    strings: ['Web Developer.', 'Ingénieur diplomé en 2023.'],
    typeSpeed: 60,
    backSpeed:60,
    loop: true,
    loopCount: Infinity,
    startDelay: 500,
});

let typedTwo = new Typed('.animated-text-2', {
    strings: ['Organisé.', 'Autonome.', 'Polyvalent.'],
    typeSpeed: 60,
    backSpeed:60,
    loop: true,
    loopCount: Infinity,
    startDelay: 0,
});