import { useRef } from "react";
import * as THREE from "three";
import Gem from "../basics/Gem/Gem";
import { defaultGemModels } from "../basics/Gem/Gem.function";

export type GameScreenProps = {
  // ここにプロパティを定義
};

const GameScreen = () => {
  const light = useRef<THREE.DirectionalLight>(null!);
  const light2 = useRef<THREE.DirectionalLight>(null!);
  const light3 = useRef<THREE.DirectionalLight>(null!);
  // useHelper(light as any, THREE.DirectionalLightHelper, 1, "red");
  // useHelper(light2 as any, THREE.DirectionalLightHelper, 1, "red");
  // useHelper(light3 as any, THREE.DirectionalLightHelper, 1, "red");
  return (
    <>
      {/* <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      /> */}
      <ambientLight intensity={0.2} />
      <directionalLight ref={light} position={[0, 3, 5]} intensity={10} />
      <directionalLight ref={light2} position={[5, 3, 0]} intensity={10} />
      <directionalLight ref={light3} position={[-5, 3, -5]} intensity={5} />
      <Gem gemModel={defaultGemModels.get("gem1")!} />
    </>
  );
};

export default GameScreen;
