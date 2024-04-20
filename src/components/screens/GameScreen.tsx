import { Debug, Physics } from "@react-three/cannon";
import Box from "../basics/Box";
import Gem from "../basics/Gem/Gem";
import { defaultGemModels } from "../basics/Gem/Gem.function";

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
          <Gem gemModel={defaultGemModels.get("gem3")!} />
          <Gem gemModel={defaultGemModels.get("gem3")!} />
          <Gem gemModel={defaultGemModels.get("gem3")!} />
          <Gem gemModel={defaultGemModels.get("gem3")!} />
          <Box />
        </Debug>
      </Physics>
    </>
  );
};

export default GameScreen;
