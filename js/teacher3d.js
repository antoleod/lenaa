import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';
export function createTeacher3D(){
 const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(300,410);renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
 const canvas=renderer.domElement;Object.assign(canvas.style,{position:'absolute',pointerEvents:'none',width:'300px',height:'410px',transform:'translate(-50%,-65%)',zIndex:'3'});
 document.querySelector('#game').appendChild(canvas);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(32,300/410,.1,100);camera.position.set(0,1.45,8.6);camera.lookAt(0,1.15,0);
 scene.add(new THREE.HemisphereLight(0xffffff,0x95617b,2.6));const key=new THREE.DirectionalLight(0xffffff,3);key.position.set(-3,7,6);scene.add(key);
 const mat=(color,roughness=.76)=>new THREE.MeshStandardMaterial({color,roughness});
 const skin=mat(0xf5bc99),hair=mat(0x654332),dress=mat(0xc966a5),dark=mat(0x302a33),white=mat(0xfffaf5),iris=mat(0x6a4533),glass=new THREE.MeshStandardMaterial({color:0x7a4c54,metalness:.35,roughness:.3});
 const root=new THREE.Group();scene.add(root);
 function ell(parent,m,x,y,z,sx,sy,sz){const o=new THREE.Mesh(new THREE.SphereGeometry(1,28,20),m);o.position.set(x,y,z);o.scale.set(sx,sy,sz);parent.add(o);return o}
 ell(root,dress,0,.2,0,.82,1.12,.48);ell(root,skin,0,1.15,.02,.25,.38,.25);
 const head=new THREE.Group();head.position.y=2.03;root.add(head);
 ell(head,hair,0,.02,-.08,.77,.93,.58);ell(head,skin,0,0,.29,.65,.77,.54);
 for(const side of [-1,1]){ell(head,hair,side*.56,.04,.25,.24,.74,.39);ell(head,white,side*.26,.08,.75,.19,.145,.075);ell(head,iris,side*.26,.08,.82,.085,.1,.038);ell(head,dark,side*.26,.08,.85,.042,.062,.023);ell(head,white,side*.24,.12,.87,.02,.025,.01);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(.255,.026,9,40),glass);ring.position.set(side*.28,.075,.85);head.add(ring);}
 ell(head,skin,0,-.18,.82,.12,.16,.15);ell(head,mat(0xaf5364),0,-.39,.79,.22,.052,.045);
 const bridge=new THREE.Mesh(new THREE.CylinderGeometry(.023,.023,.14,8),glass);bridge.rotation.z=Math.PI/2;bridge.position.set(0,.075,.86);head.add(bridge);
 const arms=[];for(const side of [-1,1]){const arm=new THREE.Group();arm.position.set(side*.73,.63,0);root.add(arm);ell(arm,dress,side*.18,-.34,.02,.25,.48,.25);ell(arm,skin,side*.29,-.77,.07,.16,.36,.16);ell(arm,skin,side*.29,-1.07,.1,.18,.19,.14);arms.push(arm);}
 let blink=0;return {canvas,render(x,y,state,time){canvas.style.left=x+'px';canvas.style.top=y+'px';root.rotation.y=Math.sin(time*.8)*.12;head.rotation.z=Math.sin(time*.9)*.055;head.rotation.x=state==='think'?.12:Math.sin(time*.7)*.04;arms[1].rotation.z=state==='point'?-1.2:state==='celebrate'?-2.1:-.2;arms[0].rotation.z=state==='celebrate'?2.1:.2;root.position.y=Math.sin(time*1.7)*.035;renderer.render(scene,camera)},dispose(){renderer.dispose();canvas.remove()}}}
