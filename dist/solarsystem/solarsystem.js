import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import {OrbitControls} from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";

// RENDERER
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.divicePixelRatio);
document.body.appendChild( renderer.domElement );

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 10;
camera.position.x = 10;
camera.position.z = 20;

// CONTROLS
const controls = new OrbitControls( camera, renderer.domElement );

// LIGHT
const color = 0xffffff;
const intensity = 2;
const light = new THREE.PointLight(color, intensity);
light.position.set(0,0,0);
const color2 = 0x555555;
const light2 = new THREE.AmbientLight(color2);
scene.add(light)
scene.add(light2)

// LOADER 
const textureLoader = new THREE.TextureLoader();

// BACKGROUND
const backgroundGeometry = new THREE.SphereGeometry(500, 100, 100);
const backgroundMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load("./texture/space.jpg"),
  side: THREE.DoubleSide,
});
const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial)
scene.add(background);

// MODELS : X AXIS
const x_points = [];
x_points.push( new THREE.Vector3(0, 0, 0) );
x_points.push( new THREE.Vector3(15, 0, 0) );
const x_geometry = new THREE.BufferGeometry().setFromPoints(x_points);
const x_material = new THREE.LineBasicMaterial({color : 0xff0000 });
const x_line = new THREE.Line(x_geometry, x_material);
scene.add(x_line);

// MODELS : Y AXIS
const y_points = [];
y_points.push( new THREE.Vector3(0, 0, 0) );
y_points.push( new THREE.Vector3(0, 15, 0) );
const y_geometry = new THREE.BufferGeometry().setFromPoints(y_points);
const y_material = new THREE.LineBasicMaterial({color : 0x00ff00 });
const y_line = new THREE.Line(y_geometry, y_material);
scene.add(y_line);

// MODELS : Z AXIS
const z_points = [];
z_points.push( new THREE.Vector3(0, 0, 0) );
z_points.push( new THREE.Vector3(0, 0, 15) );
const z_geometry = new THREE.BufferGeometry().setFromPoints(z_points);
const z_material = new THREE.LineBasicMaterial({color : 0x0000ff });
const z_line = new THREE.Line(z_geometry, z_material);
scene.add(z_line);

// MODELS : SOLAR SYSTEM
const solarSystem = new THREE.Object3D();
scene.add(solarSystem);

// MODELS : SHPERE-INFO
const radius = 1;
const widthSegments = 20;
const heightSegments = 20;

// MODELS : SUN
const sun_geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const sun_texture = textureLoader.load("./texture/sun.jpg");
const sun_material = new THREE.MeshStandardMaterial({color : 0xffff00, emissive : 0x555500, emissiveMap:sun_texture, emissiveIntensity:2});
const sun = new THREE.Mesh( sun_geometry, sun_material );
sun.scale.set(3, 3, 3);
solarSystem.add(sun);

// MODELS : EARTH ORBIT
const earthOrbit = new THREE.Object3D();
solarSystem.add(earthOrbit);
earthOrbit.position.x = 10;
earthOrbit.rotation.z = -(23.5) * Math.PI / 180;

// MODELS : EARTH 
const earth_geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const earth_texture = textureLoader.load("./texture/earth.jpg");
const earth_material = new THREE.MeshPhongMaterial({map : earth_texture});
const earth = new THREE.Mesh(earth_geometry, earth_material);
earthOrbit.add(earth);

// MODELS : EARTH AXIS
const earth_axis_points = [];
earth_axis_points.push(new THREE.Vector3(0, -3, 0));
earth_axis_points.push(new THREE.Vector3(0, 3, 0));
const earth_axis_geometry = new THREE.BufferGeometry().setFromPoints(earth_axis_points);
const earth_axis_material = new THREE.LineBasicMaterial({color : 0x00ff00 });
const earth_axis = new THREE.Line(earth_axis_geometry, earth_axis_material);
earthOrbit.add(earth_axis);

// MODELS : MOON ORBIT
const moonOrbit = new THREE.Object3D();
earthOrbit.add(moonOrbit);
moonOrbit.position.x = 2;

// MODELS : MOON
const moon_geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const moon_texture = textureLoader.load("./texture/moon.jpg")
const moon_material = new THREE.MeshPhongMaterial({map: moon_texture});
const moon = new THREE.Mesh(moon_geometry, moon_material);
moon.scale.set(0.5, 0.5, 0.5);
moonOrbit.add(moon);

function animate() {
  requestAnimationFrame( animate );
  sun.rotation.y += 0.001
  solarSystem.rotation.y += 0.002
  earthOrbit.rotation.y += 0.004
  moonOrbit.rotation.y += 0.008
  renderer.render(scene, camera);
}

animate();