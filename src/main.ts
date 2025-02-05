// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js' // 控制相機
import Stats from 'three/addons/libs/stats.module.js' // 顯示畫面FPS等數據
import { GUI } from 'dat.gui' // 控制畫面參數

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 1.5

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

new OrbitControls(camera, renderer.domElement) // 控制相機 可以使用滑鼠控制畫面轉動
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({ wireframe: true })

// cube
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// stats
const stats = new Stats()
// stats.showPanel(1) // 0: fps, 1: ms, 2: mb, 3+: custom 可以選擇預設顯示的數據
document.body.appendChild(stats.dom)


const gui = new GUI()
const cubeFolder = gui.addFolder('Cube') // 控制方塊的旋轉
cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2)
cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2)
cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2)
cubeFolder.open() // 預設cubeFolder展開

const cameraFolder = gui.addFolder('Camera') // 控制相機的位置, 預設位置參考 camera.position.z
cameraFolder.add(camera.position, 'z', 0, 10) 
cameraFolder.open() // 預設cameraFolder展開

function animate() {
  requestAnimationFrame(animate)

  // cube.rotation.x += 0.01 // 自動選轉
  // cube.rotation.y += 0.01

  // stats.begin() // 開始計算自動旋轉
  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01
  // stats.end() // 結束計算

  renderer.render(scene, camera)
  stats.update() // 左上角 Stats FPS等 數據更新
}

animate()