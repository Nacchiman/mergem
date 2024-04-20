import { usePlane } from "@react-three/cannon";
import { Plane } from "@react-three/drei";

export type BoxProps = {
  size?: [number, number, number]; // 箱のサイズ（幅、高さ、奥行き）
  position?: [number, number, number]; // 箱の位置
};

const Box = (props: BoxProps) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  return (
    <>
      <Plane
        ref={ref}
        args={[100, 100]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
      >
        <meshStandardMaterial attach="material" color="black" />
      </Plane>
    </>
  );
};

export default Box;
