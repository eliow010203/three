import * as THREE from 'https://cdn.skypack.dev/three@';

console.log(THREE)



// 장면
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222)

// 카메라
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.z = 80

// 캔버스
// const canvas = document.querySelector('#three')

const pointlight = new THREE.PointLight(0xffffff, 1)
pointlight.position.set(0, 0, 30);
scene.add(pointlight)
// 랜더
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

window.addEventListener('resize',function(){
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.asp
})

document.body.appendChild(renderer.domElement)

let mat01 = new THREE.MeshStandardMaterial({
  color:0xFFFFFF,
  metalness: 0.1,
  roughness:0.2
})


const geo01  = new THREE.BoxGeometry( 13, 13, 13 )
const geo02  = new THREE.TorusGeometry( 10, 3, 16, 100 )
const geo03  = new THREE.CapsuleGeometry( 7, 8, 15, 15 )
const geo04  = new THREE.ConeGeometry( 8, 20, 50 )
const geo05  = new THREE.CylinderGeometry( 9, 5, 15, 32 )
const geo06  = new THREE.DodecahedronGeometry(10, 0)
const geo07  = new THREE.IcosahedronGeometry(10, 0)
const geo08  = new THREE.OctahedronGeometry(10, 0)
const geo09  = new THREE.TorusKnotGeometry( 6, 1, 200, 16 , 4, 5);

const donut01 = new THREE.Mesh(geo01, mat01)
const donut02 = new THREE.Mesh(geo02, mat01)
const donut03 = new THREE.Mesh(geo03, mat01)
const donut04 = new THREE.Mesh(geo04, mat01)
const donut05 = new THREE.Mesh(geo05, mat01)
const donut06 = new THREE.Mesh(geo06, mat01)
const donut07 = new THREE.Mesh(geo07, mat01)
const donut08 = new THREE.Mesh(geo08, mat01)
const donut09 = new THREE.Mesh(geo09, mat01)

donut01.position.x = 30
donut02.position.x = 0
donut03.position.x = -30


donut04.position.x = 30
donut04.position.y = 30

donut05.position.x = 0
donut05.position.y = 30

donut06.position.x = -30
donut06.position.y = 30

donut07.position.x = 30
donut07.position.y = -30

donut08.position.x = 0
donut08.position.y = -30

donut09.position.x = -30
donut09.position.y = -30

scene.add(donut01)
scene.add(donut02)
scene.add(donut03)
scene.add(donut04)
scene.add(donut05)
scene.add(donut06)
scene.add(donut07)
scene.add(donut08)
scene.add(donut09)


let mousestatus = 0

let xorigin
let yorigin

let mx = 0
let my = 0

let mx2 = 0
let my2 = 0



window.addEventListener('mousedown',function(e){
  xorigin = e.clientX
  yorigin = e.clientY
  mousestatus = 1
})

window.addEventListener('mousemove',function(e){
  if(mousestatus==1){
    console.log(mx, my)

    mx = ((Math.PI/360)*((xorigin-e.clientX)/1))+mx2
    my = ((Math.PI/360)*((yorigin-e.clientY)/1))+my2
  }
})

window.addEventListener('mouseup',function(){
  mx2 = mx
  my2 = my
  mousestatus=0
})

let donutArray = [donut01, donut02, donut03, donut04, donut05, donut06, donut07, donut08, donut09]
function render(time) {
  console.log(time)
  time *= +0.0003

  pointlight.position.set(mx%Math.PI, my%Math.PI, 30);

  donutArray.forEach((e)=>
    e.rotation.x= -my+time
  )
  donutArray.forEach((e)=>
    e.rotation.y= -mx+time
  )
  donutArray.forEach((e)=>
    e.rotation.z= time
  )
  
  



  renderer.render(scene, camera)

  requestAnimationFrame(render)
}
requestAnimationFrame(render)