import { Debug, Physics } from "@react-three/cannon";
import Gem from "../basics/Gem/Gem";
import { defaultGemModels } from "../basics/Gem/Gem.function";
import Jar from "../basics/Jar";

export type GameScreenProps = {
  // ここにプロパティを定義
};

const GameScreen = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 3, 5]} intensity={10} />
      <directionalLight position={[5, 3, 0]} intensity={10} />
      <directionalLight position={[-5, 3, -5]} intensity={5} />
      <Physics>
        <Debug color="black" scale={1.1}>
          <Gem position={[0, 5, 0]} gemModel={defaultGemModels.get("gem3")!} />
          <Gem position={[0, 10, 0]} gemModel={defaultGemModels.get("gem2")!} />
          <Gem position={[0, 15, 0]} gemModel={defaultGemModels.get("gem1")!} />
          <Jar size={[1, 1, 1]} />
        </Debug>
      </Physics>
    </>
  );
};

export default GameScreen;
