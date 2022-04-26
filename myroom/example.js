import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
const geometry = new THREE.SphereGeometry(0.5, 20, 20 );
const material_1 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material_2 = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
const sphere_1 = new THREE.Mesh( geometry, material_1 );
const sphere_2 = new THREE.Mesh( geometry, material_2 );
sphere_1.position.x = 3;
sphere_1.position.y = 0.5;
sphere_2.position.x = -3;
sphere_2.position.y = 0.5;

export {sphere_1, sphere_2}
