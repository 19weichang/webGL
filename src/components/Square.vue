<template></template>

<script lang="ts" setup>
import * as THREE from 'three';

let scene = new THREE.Scene()
let renderer: THREE.WebGLRenderer // 渲染器
let camera: THREE.PerspectiveCamera // 鏡頭
let light : THREE.DirectionalLight // 光源
let geometry : THREE.BoxGeometry // 幾何體
let material : THREE.MeshBasicMaterial // 材質
let cube: THREE.Mesh // 網格物件


function init () {
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5 // 鏡頭位置 越大物體越小

  light = new THREE.DirectionalLight(0xffffff)
  light.position.set(-40, 60, -10)
  scene.add(light)

  geometry = new THREE.BoxGeometry(1, 1, 1)
  material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }) // MeshBasicMaterial 基本材質對光源無反應

  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
}

function animate() {
  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01
  // renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()
init()

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

</script>