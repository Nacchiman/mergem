import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import styles from "./App.module.css";
import GameScreen from "./components/screens/GameScreen";

const App = () => {
  return (
    <div className={styles.canvas}>
      <Canvas>
        <OrthographicCamera makeDefault position={[5, 5, 5]} zoom={50} />
        <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
        <GameScreen />
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default App;
