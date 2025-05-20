import React, { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Loading from "./Loading";

interface Props {
  hackerRoomUrl: string;
}

const HackerRoom: React.FC<Props> = ({ hackerRoomUrl }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  let hackerRoom: THREE.Object3D | null = null;

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1f1f22);
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      2000,
    );
    camera.position.set(0, 40, 70);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0);
    controls.enableDamping = true;

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(-5, 10, -5);
    scene.add(dirLight);

    const loader = new GLTFLoader();
    const mixers: THREE.AnimationMixer[] = [];
    const clock = new THREE.Clock();

    function loadModel(url: string, scale: number, position: THREE.Vector3, rotationY = 0) {
      loader.load(
        url,
        (gltf) => {
          const model = gltf.scene;
          hackerRoom = gltf.scene;
          model.scale.set(scale, scale, scale);
          model.position.copy(position);
          model.rotation.y = rotationY;
          scene.add(model);

          if (gltf.animations?.length) {
            const mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip) => mixer.clipAction(clip).play());
            mixers.push(mixer);
          }
        },
        undefined,
        (err) => console.error("Error loading", url, err),
      );
    }

    loadModel(hackerRoomUrl, 0.34, new THREE.Vector3(0, -10, 0.5), Math.PI);

    const floorGeo = new THREE.PlaneGeometry(20, 20);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x202023 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.01;

    const animate = () => {
      const delta = clock.getDelta();
      mixers.forEach((mixer) => mixer.update(delta));
      controls.update();
      if (hackerRoom) {
        hackerRoom.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      mixers.forEach((mixer) => mixer.stopAllAction());
    };
  }, [hackerRoomUrl]);

  return <div ref={mountRef} style={{ width: "100%", height: "30vh" }} />;
};

export default HackerRoom;
