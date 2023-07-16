/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/game_interior.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.050"]}
        scale={2.111}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow.geometry}
        material={materials["pillow material"]}
        position={[0.229, -1.803, 0.096]}
        rotation={[0, 1.164, 0]}
        scale={0.371}
      />
      <group
        position={[-0.048, -1.431, -1.027]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Grass_Block_TEX}
          position={[-1.335, 0.361, -0.395]}
          scale={0.786}
        />
      </group>
      <group
        position={[0.068, 0.566, -1.698]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.098}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004.geometry}
          material={materials.pacman}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_1.geometry}
          material={materials.pacman_eye}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_2.geometry}
          material={materials["Material.016"]}
        />
      </group>
      <group
        position={[-1.328, 0.701, -0.794]}
        rotation={[0.093, 0.81, -0.07]}
        scale={0.329}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Normal.geometry}
          material={materials.Normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Normal_1.geometry}
          material={materials.Base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Normal_2.geometry}
          material={materials.yellow_light}
        />
      </group>
      <group
        position={[-0.713, -1.396, -1.467]}
        rotation={[Math.PI, 0, -2.02]}
        scale={[0.46, 0.093, 0.34]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_3.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_4.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_5.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_6.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_7.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_8.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_9.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_10.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group
        position={[-0.11, -1.575, 1.266]}
        rotation={[-0.794, 0.186, 0.236]}
        scale={[0.088, 0.029, 0.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_3.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_4.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_5.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_6.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_7.geometry}
          material={materials["Material.022"]}
        />
      </group>
      <group position={[-1.558, -0.821, -0.63]} scale={[0.27, 1.017, 0.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials["Material.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials.Kelvar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_2.geometry}
          material={materials["Grey dark.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.游戏海报.geometry}
        material={materials["Sprite-000sas45"]}
        position={[-1.715, 0.522, 0.687]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.全息投影.geometry}
        material={materials.metal}
        position={[-1.116, -1.765, 0.666]}
        scale={[0.335, 0.048, 0.335]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043.geometry}
          material={materials["Grey dark.003"]}
          position={[0, 1.223, 0]}
          scale={[0.608, 0.12, 0.608]}
        />
      </mesh>
      <group
        position={[0, 1.167, -1.737]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.323, 0.009, 0.323]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={materials["Material.035"]}
        />
      </group>
      <group
        position={[-0.987, 0.645, -1.737]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.375, 0.011, 0.375]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["Material.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials["Material.037"]}
        />
      </group>
      <group
        position={[-0.086, -0.207, -1.737]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.735, 0.009, 0.323]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials["Material.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_1.geometry}
          material={materials["Material.039"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.045"]}
        position={[-1.351, -0.794, -1.586]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.045"]}
        position={[-1.614, -0.97, -1.345]}
        scale={0.033}
      />
      <group position={[1.424, -1.157, -1.227]} scale={0.835}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials.游戏机屏幕}
        />
        <group position={[-0.391, 0.218, 0.361]} scale={1.992}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_1.geometry}
            material={materials["游戏机柄-球"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_2.geometry}
            material={materials["游戏机柄-柄"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.048"]}
          position={[0, -0.409, 0.007]}
          scale={[0.706, 0.387, 0.7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["游戏机柄-柄"]}
          position={[-0.029, 0.222, 0.131]}
          scale={0.473}
        />
        <group position={[0.349, 0.223, 0.37]} scale={0.173}>
          <group position={[0, 0, -0.858]} scale={19.349}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_1.geometry}
              material={materials["游戏机按钮.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_2.geometry}
              material={materials["游戏机按钮.001"]}
            />
          </group>
          <group position={[-1.134, 0, 0]} scale={19.349}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_1.geometry}
              material={materials["游戏机柄-球"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002_2.geometry}
              material={materials.游戏机按钮}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/game_interior.gltf");
