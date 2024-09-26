<template>
  <div></div>
</template>
  
<script lang="ts" setup>
  import * as THREE from 'three';
  
  // 場景
  let scene = new THREE.Scene()
  
  // 鏡頭
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5 // 鏡頭位置 越大物體越小

  // 渲染器
  let renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  // 幾何體
  let geometry = new THREE.BoxGeometry(1, 1, 1)
  // let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }) // 基本材質對光源無反應
  let material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
  let cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  
  
  // 光源
  let light = new THREE.DirectionalLight(0xffffff)
  light.position.set(-40, 60, -10)
  scene.add(light)
    
  // 動畫
  function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  
  animate()

  </script>