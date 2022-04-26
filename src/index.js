import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

const canvas = document.querySelector(".webgl")
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 1, 2); // 추가
scene.add(camera); // 추가

const renderer = new THREE.WebGLRenderer({ canvas : canvas });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)); // 추가
renderer.shadowMap.enabled = true; // 추가

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

function animate() {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
}

animate();