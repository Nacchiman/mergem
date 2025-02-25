/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Debug, Triplet, useConvexPolyhedron } from "@react-three/cannon";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { BufferGeometry } from "three";
import { Geometry } from "three-stdlib";

const toConvexProps = (
  bufferGeometry: BufferGeometry,
  scale: Triplet,
): [vertices: Triplet[], faces: Triplet[]] => {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  geo.mergeVertices();
  // 頂点座標にスケールを適用
  const vertices: Triplet[] = geo.vertices.map((v) => [
    v.x * scale[0],
    v.y * scale[1],
    v.z * scale[2],
  ]);
  const faces: Triplet[] = geo.faces.map((f) => [f.a, f.b, f.c]);
  return [vertices, faces];
};

export type JarProps = {
  size: Triplet;
};

const Jar = (props: JarProps) => {
  const { nodes, materials, animations } = useGLTF("/jar.glb");

  const args = useMemo(
    () => toConvexProps(nodes.Plane013.geometry, props.size),
    [nodes.Plane013.geometry],
  );

  const [ref] = useConvexPolyhedron(() => ({
    args,
    mass: 0,
    position: [0, 0, 0],
  }));

  const { actions } = useAnimations(animations, ref);

  return (
    <Debug color="black" scale={1.1}>
      <group ref={ref} dispose={null}>
        <group name="Scene">
          <group
            name="body"
            position={[0.021, 0.397, 0.001]}
            rotation={[Math.PI / 2, 0, -0.419]}
            scale={2.439}
          >
            <mesh
              name="Plane013"
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Plane013_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane013_1.geometry}
              material={materials.Cromo}
            />
          </group>
          <group name="lid001" position={[-0.282, 0.783, -0.005]}>
            <group
              name="lid"
              position={[-0.268, -0.157, 0.005]}
              rotation={[-Math.PI / 2, -0.235, 2.723]}
              scale={2.439}
            >
              <mesh
                name="Plane003"
                castShadow
                receiveShadow
                geometry={nodes.Plane003.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                name="Plane003_1"
                castShadow
                receiveShadow
                geometry={nodes.Plane003_1.geometry}
                material={materials.Plastico}
              />
              <mesh
                name="Plane003_2"
                castShadow
                receiveShadow
                geometry={nodes.Plane003_2.geometry}
                material={materials.Cromo}
              />
            </group>
          </group>
          <group
            name="lock001"
            position={[0.301, 0.732, 0.005]}
            rotation={[0, 0, -0.112]}
          >
            <mesh
              name="lock"
              castShadow
              receiveShadow
              geometry={nodes.lock.geometry}
              material={materials.Cromo}
              rotation={[-Math.PI / 2, -0.511, 2.723]}
              scale={2.439}
            />
          </group>
          <group
            name="pulltab001"
            position={[0.322, 0.811, 0.005]}
            rotation={[0, 0, -0.159]}
          >
            <mesh
              name="pulltab"
              castShadow
              receiveShadow
              geometry={nodes.pulltab.geometry}
              material={materials.Cromo}
              rotation={[Math.PI / 2, 0.174, -0.419]}
              scale={2.439}
            />
          </group>
        </group>
      </group>
    </Debug>
  );
};

useGLTF.preload("/jar.glb");

export default Jar;
