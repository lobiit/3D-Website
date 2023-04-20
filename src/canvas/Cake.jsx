import React, {useMemo, useRef, useState} from 'react'
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import state from '../store';
import * as THREE from 'three';
import {easing} from "maath";
import {useSnapshot} from "valtio";

const Cake = () => {
    const snap = useSnapshot(state);
    const { nodes } = useGLTF('/cake_baked.glb');
    const logoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);
    const   isOcclusion =useTexture(snap.isOcclusion);
    const  isMetalness = useTexture(snap.isMetalness);
    const  isOcclusionRoughnessMetalness = useTexture(snap.isOcclusionRoughnessMetalness);
    const  isAlbedo = useTexture(snap.isAlbedo);
    const  isAlbedoOcclusion = useTexture(snap.isAlbedoOcclusion)
    const isGlossiness = useTexture(snap.isGlossiness);

    // Create a new material instance with the snap color
    const material = useMemo(() => new THREE.MeshBasicMaterial({ color: snap.color }), [snap.color]);

    // This reference will give us direct access to the mesh
    const mesh = useRef();

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        // Update the material color with easing
        easing.dampC(material.color, snap.color, 0.25, delta);
        // Swing the mesh based on mouse position if hovered
        if (hovered) {
            mesh.current.rotation.z = state.mouse.x * 0.5;
        }
    });

    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>
            <mesh castShadow geometry={nodes.Frosted_Cake.geometry} material={material} dispose={null} scale={4.0}
                  ref={mesh}
                  onClick={(event) => setActive(!active)}
                  onPointerOver={(event) => setHover(true)}
                  onPointerOut={(event) => setHover(false)}
                // add the texture properties to the mesh
                  texture={snap.isLogoTexture ? logoTexture : snap.isFullTexture ? fullTexture : snap.isOcclusion ? isOcclusion : snap.isMetalness ? isMetalness : snap.isOcclusionRoughnessMetalness ? isOcclusionRoughnessMetalness : snap.isAlbedo ? isAlbedo : snap.isAlbedoOcclusion ? isAlbedoOcclusion : snap.isGlossiness ? isGlossiness : null}
                  texture-wrapS={THREE.RepeatWrapping}
                  texture-wrapT={THREE.RepeatWrapping}
                  texture-repeat={[1, 1]}
                  texture-rotation={0}
                  texture-center={[0.5, 0.5]}
                  texture-offset={[0, 0]}>
                {snap.isFullTexture && (
                    <Decal position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.8} map={fullTexture} />
                )}
                {snap.isLogoTexture && (
                    <Decal position={[0, 0.11, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.2} map={logoTexture} map-anisotropy={16} depthTest={false} depthWrite={true} />
                )}
                // add the other textures as decals
                {snap.isOcclusion && (
                    <Decal position={[0, 0.12, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.8} map={isOcclusion} />
                )}
                {snap.isMetalness && (
                    <Decal position={[0, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.8} map={isMetalness} />
                )}
                {snap.isOcclusionRoughnessMetalness && (
                    <Decal position={[0, 0.14, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.2} map={isOcclusionRoughnessMetalness} />
                )}
                {snap.isAlbedo && (
                    <Decal position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.2} map={isAlbedo} />
                )}
                {snap.isAlbedoOcclusion && (
                    <Decal position={[0, 0.16, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.2} map={isAlbedoOcclusion} />
                )}
                {snap.isGlossiness && (
                    <Decal position={[0, 0.17, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.2} map={isGlossiness} />
                )}
            </mesh>
        </group>
    )
};

export default Cake;
