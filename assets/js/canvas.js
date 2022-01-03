

function main() {
    const canvas = document.querySelector('#canvas-1');
    const renderer = new THREE.WebGLRenderer({canvas, alpha:true,});
    //will have to delete next line when resizing
    //renderer.setSize( window.innerWidth, window.innerHeight );
    //console.log(canvas);
    //camera setup below
    const fov = 75;
    const aspect = window.innerWidth/window.innerHeight;
    const near = 0.01;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.z = 5;
    
    const scene = new THREE.Scene();
    //scene.background = new THREE.Color(0xffffff);

    const directionalLight = new THREE.DirectionalLight(0xffffff,1);
    directionalLight.position.set(-1,2,4);
    scene.add(directionalLight);
    //console.log(directionalLight);
    const texture = new THREE.TextureLoader().load('assets/img/silver_logo.png');
    const geometry = new THREE.CylinderBufferGeometry(2,2,0.01,64);
    const material = new THREE.MeshPhysicalMaterial({color: 0xffffff, map: texture, overdraw: true});
    const cylinder = new THREE.Mesh(geometry, material);
    

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }

    cylinder.position.set(0,0,0);
    cylinder.rotation.x=0.5;
    cylinder.rotation.y=0.5;
    cylinder.rotation.z=0.5;
    scene.add(cylinder);
    //console.log(cylinder);
    function animate() {
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
      
        //cylinder.rotation.x+=0.01;
        cylinder.rotation.x+=0.008;
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
    }
    animate();
}
main();