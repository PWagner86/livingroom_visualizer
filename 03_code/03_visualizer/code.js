import GLTF from './GLTFLoader.js';
import Controls from './OrbitControls.js';
import {
    container,
    path,
    gamingBtn,
    gamingCtr,
    gamingControlles,
    gamingRight,
    gamingFront,
    gamingRotate,
    gamingLeft,
    gamingBack,
    sciFyBtn,
    sciFyCtr,
    sciFyControlles,
    sciFyRight,
    sciFyFront,
    sciFyRotate,
    sciFyLeft,
    sciFyBack,
    loungeBtn,
    loungeCtr,
    loungeControlles,
    loungeRight,
    loungeFront,
    loungeRotate,
    loungeLeft,
    loungeBack,
    btnShowHide,
    getCtr,
    toRight,
    toFront,
    rotate,
    toLeft,
    toBack,

} from './variables&functions.js';

// Variables
const scene = new THREE.Scene();
const loader = new THREE.GLTFLoader();
let gamingStuhl;
let scify;
let lounge;
let bar;
let modelScene;



// Funktion was alles geladen werden soll
function init(){

    // Raum erstellen

    let ground = getPlane(15, 8, 'rgb(124, 119, 119)');
    ground.rotation.x = Math.PI/2;

    let sideWall = getPlane(8, 2, 'rgb(124, 119, 119)');
    sideWall.position.y = ground.geometry.parameters.height/8;
    sideWall.rotation.y = Math.PI/2;
    sideWall.position.x = -ground.geometry.parameters.width/2;

    let backWall = getPlane(15, 2, 'rgb(124, 119, 119)');
    backWall.position.z = -ground.geometry.parameters.height/2;
    backWall.position.y = ground.geometry.parameters.height/8;

    let pointLight = getPointLight(1);
    pointLight.position.y = 3;
    pointLight.intensity = 1.5;

    scene.add(ground);
    scene.add(sideWall);
    scene.add(backWall);
    scene.add(pointLight);

    // Gaming Stuhl ----------------------------------------------------------------->
    gamingBtn.addEventListener("click", () => {
        loader.load(`${path}/gaming_stuhl/scene.gltf`, (gltf) => {
            scene.add(gltf.scene);
            gamingStuhl = gltf.scene;
            gamingStuhl.castShadow = true;
            gamingStuhl.receiveShadow = true;
            gamingStuhl.scale.x = 0.15;
            gamingStuhl.scale.y = 0.15;
            gamingStuhl.scale.z = 0.15;
            gamingStuhl.position.x = -6;
            gamingStuhl.position.z = 0;
            gamingStuhl.rotation.y = -Math.PI/2;
        })

        btnShowHide(gamingBtn, gamingCtr);
    });

    gamingCtr.addEventListener("click", () => getCtr(gamingControlles));
    gamingRight.addEventListener("click", () => toRight(gamingStuhl));
    gamingFront.addEventListener("click", () => toFront(gamingStuhl));
    gamingRotate.addEventListener("click", () => rotate(gamingStuhl));
    gamingLeft.addEventListener("click", () => toLeft(gamingStuhl));
    gamingBack.addEventListener("click", () => toBack(gamingStuhl));


    // Sci-Fy -------------------------------------------------------------------------->
    sciFyBtn.addEventListener("click", () => {
        loader.load(`${path}/sci-fy_einrichtung/scene.gltf`, (gltf) => {
            scene.add(gltf.scene);
            scify = gltf.scene;
            scify.castShadow = true;
            scify.receiveShadow = true;
            scify.scale.x = 0.008;
            scify.scale.y = 0.008;
            scify.scale.z = 0.008;
            scify.position.x = -2;
            scify.position.z = 2;
            scify.rotation.y = -Math.PI/0.5;
        })

        btnShowHide(sciFyBtn, sciFyCtr);
    });

    sciFyCtr.addEventListener("click", () => getCtr(sciFyControlles));
    sciFyRight.addEventListener("click", () => toRight(scify));
    sciFyFront.addEventListener("click", () => toFront(scify));
    sciFyRotate.addEventListener("click", () => rotate(scify));
    sciFyLeft.addEventListener("click", () => toLeft(scify));
    sciFyBack.addEventListener("click", () => toBack(scify));


    // Lounge -------------------------------------------------------------------------->
    loungeBtn.addEventListener("click", () => {
        loader.load(`${path}/lounge/scene.gltf`, (gltf) => {
            scene.add(gltf.scene);
            lounge = gltf.scene;
            lounge.castShadow = true;
            lounge.receiveShadow = true;
            lounge.scale.x = 0.1;
            lounge.scale.y = 0.1;
            lounge.scale.z = 0.1;
            lounge.position.x = 3;
            lounge.position.z = 2;
            lounge.rotation.y = -Math.PI/0.5;
        })

        btnShowHide(loungeBtn, loungeCtr);
    });

    loungeCtr.addEventListener("click", () => getCtr(loungeControlles));
    loungeRight.addEventListener("click", () => toRight(lounge));
    loungeFront.addEventListener("click", () => toFront(lounge));
    loungeRotate.addEventListener("click", () => rotate(lounge));
    loungeLeft.addEventListener("click", () => toLeft(lounge));
    loungeBack.addEventListener("click", () => toBack(lounge));
    
    // Kamera
    let camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        1,
        1000
    );
    camera.position.x = 5;
    camera.position.y = 10;
    camera.position.z = 16;

    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    update(renderer, scene, camera, controls);

    return scene;
}

init();

// Funktionen

function update(renderer, scene, camera, controls){
    renderer.render(
        scene, 
        camera
    );
    requestAnimationFrame(function(){
        update(renderer, scene, camera, controls);
    });
}

// Funktionen für Wände
function getPlane(w, h, c){
    var geometry = new THREE.PlaneGeometry(w, h);
    var material = new THREE.MeshPhongMaterial({
        color: c,
        side: THREE.DoubleSide
    });
    geometry.receiveShadow = true;
    var mesh = new THREE.Mesh(
        geometry, 
        material
    );
    return mesh;
}

function getPointLight(intensity){
    var light = new THREE.PointLight(0xffffff, intensity);

    return light;
}

