export type GemModelInfo = {
  gltfPath: string;
  size: [number, number, number];
  color: string;
};

export const defaultGemModels = new Map<string, GemModelInfo>([
  ["gem1", { gltfPath: "/gems/gem1.glb", size: [1, 1, 1], color: "red" }],
  ["gem2", { gltfPath: "/gems/gem2.glb", size: [1, 1, 1], color: "blue" }],
  [
    "gem3",
    { gltfPath: "/gems/gem3.glb", size: [1.0, 1.0, 1.0], color: "green" },
  ],
]);
