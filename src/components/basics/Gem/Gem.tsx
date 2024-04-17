import { Caustics, MeshRefractionMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";
import { GemModelInfo } from "./Gem.function";

export type GemProps = {
  gemModel: GemModelInfo;
  onCollision?: (object1: any, object2: any) => void;
};

import { useGLTF } from "@react-three/drei";

const Gem = (props: GemProps) => {
  const { nodes } = useGLTF(props.gemModel.gltfPath);
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr",
  );

  return (
    <>
      <Caustics
        backfaces
        color={"white"}
        position={[0, -0.5, 0]}
        lightSource={[5, 5, -10]}
        worldRadius={0.1}
        ior={1.8}
        backfaceIor={1.1}
        intensity={0.1}
      >
        <mesh geometry={nodes.Cube.geometry} scale={props.gemModel.size}>
          <MeshRefractionMaterial envMap={texture} toneMapped={false} />
        </mesh>
      </Caustics>
    </>
  );
};

export default Gem;
