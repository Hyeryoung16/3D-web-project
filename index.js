import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* BOX */
const cube_geometry = new THREE.BoxGeometry(); // 뼈대
const cube_material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // 재질
const cube = new THREE.Mesh( cube_geometry, cube_material ); // 뼈대 + 재질 -> 메쉬 오브젝트
scene.add( cube );

/* Plane */
const textureLoader = new THREE.TextureLoader();
const baseColor = textureLoader.load('./brick_diffuse.jpg');
const plane_geometry = new THREE.PlaneGeometry(3, 3);
const plane_material = new THREE.MeshBasicMaterial(  {
  side: THREE.DoubleSide,
  map : baseColor
} ); 
const plane = new THREE.Mesh(plane_geometry, plane_material); 
plane.rotation.x = -0.5*Math.PI; // 90도 회전
scene.add(plane);

camera.position.y = 1;
camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  
  renderer.render(scene, camera);
}

animate();