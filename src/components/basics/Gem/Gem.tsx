import { Debug, useSphere } from "@react-three/cannon";
import { MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";
import { GemModelInfo } from "./Gem.function";

export type GemProps = {
  gemModel: GemModelInfo;
  onCollision?: (object1: any, object2: any) => void;
};

const Gem = (props: GemProps) => {
  const [ref, api] = useSphere(() => ({ mass: 1 }));
  const { nodes } = useGLTF(props.gemModel.gltfPath);
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr",
  );
  const meshNode = Object.values(nodes).find((node) => node.type === "Mesh");
  return (
    <>
      <Debug color="black" scale={1.1}>
        {meshNode && (
          <mesh
            ref={ref}
            geometry={meshNode.geometry}
            scale={props.gemModel.size}
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
