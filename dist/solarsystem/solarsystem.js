import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import {OrbitControls} from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 1;
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

// Solar
const solar_geometry = new THREE.SphereGeometry(1, 20, 20 );
const solar_material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const solar = new THREE.Mesh( solar_geometry, solar_material );
scene.add(solar);

// Earth
const earth_geometry = new THREE.SphereGeometry(0.2, 20, 20 );
const earth_material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const earth = new THREE.Mesh( earth_geometry, earth_material );
earth.position.x = 5;
scene.add(earth);

function animate() {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
}

animate();