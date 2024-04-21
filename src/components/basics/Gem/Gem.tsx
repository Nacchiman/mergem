import { Debug, Triplet, useConvexPolyhedron } from "@react-three/cannon";
import { MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { BufferGeometry } from "three";
import { Geometry, RGBELoader } from "three-stdlib";
import { GemModelInfo } from "./Gem.function";

export type GemProps = {
  gemModel: GemModelInfo;
  position: [number, number, number];
  onCollision?: (object1: any, object2: any) => void;
};

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

const Gem = (props: GemProps) => {
  const { nodes } = useGLTF(props.gemModel.gltfPath);
  const meshNode = Object.values(nodes).find((node) => node.type === "Mesh");
  const geometry = meshNode?.geometry;

  // useMemo を使用して、ジオメトリとスケールに基づく頂点と面を計算
  const args = useMemo(
    () => toConvexProps(geometry, props.gemModel.size),
    [geometry, props.gemModel.size],
  );

  // useConvexPolyhedron に頂点と面のデータを設定
  const [ref] = useConvexPolyhedron(() => ({
    args,
    mass: 1,
    position: props.position,
  }));

  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr",
  );

  return (
    <>
      <Debug color="black" scale={1.1}>
        {meshNode && (
          <mesh
            ref={ref}
            geometry={geometry}
            scale={props.gemModel.size} // 視覚的なスケール
            position={props.position}
          >
            <MeshRefractionMaterial
              envMap={texture}
              toneMapped={false}
              color={props.gemModel.color}
            />
          </mesh>
        )}
      </Debug>
    </>
  );
};

export default Gem;
