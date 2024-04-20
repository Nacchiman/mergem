import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import styles from "./App.module.css";
import GameScreen from "./components/screens/GameScreen";

const App = () => {
  return (
    <div className={styles.canvas}>
      <Canvas>
        <OrbitControls />
        <OrthographicCamera makeDefault position={[0, 100, 20]} zoom={5} />
        <GameScreen />
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default App;
