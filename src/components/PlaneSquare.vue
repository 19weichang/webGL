<template>
  <div></div>
</template>

  
<script lang="ts" setup>
  import * as THREE from 'three';
  
  // 場景
  let scene = new THREE.Scene()
  
  // 鏡頭
  let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.x = -30
  camera.position.y = 40
  camera.position.z = 30
  camera.lookAt(scene.position)
  
  // 渲染器
  let renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  
  // 設置渲染器陰影
  renderer.setClearColor(new THREE.Color(0xEEEEEE))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  
  // 坐標輔助
  let axes = new THREE.AxesHelper(20)
  scene.add(axes)
  
  // 平面
  let planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
  let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc })
  let plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.x = -0.5 * Math.PI
  plane.position.x = 15
  plane.position.y = 0
  plane.position.z = 0
  scene.add(plane)
  
  // 設定投影陰影
  plane.receiveShadow = true
  
  // 幾何體
  let geometry = new THREE.BoxGeometry(4, 4, 4)
  let material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
  let cube = new THREE.Mesh(geometry, material)
  cube.position.x = 0
  cube.position.y = 2
  cube.position.z = 0
  
  // 設定投影
  cube.castShadow = true
  scene.add(cube)
  
  
  // 光源
  let light = new THREE.DirectionalLight(0xffffff)
  light.position.set(-40, 60, -10)
  scene.add(light)
  
  renderer.render(scene, camera)
</script>