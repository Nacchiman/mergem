export type GemModelInfo = {
  gltfPath: string;
  size: [number, number, number];
};

export const defaultGemModels = new Map<string, GemModelInfo>([
  ["gem1", { gltfPath: "/gems/gem1.glb", size: [1, 1, 1] }],
  ["gem2", { gltfPath: "/gems/gem2.glb", size: [1.5, 1.5, 1.5] }],
  ["gem3", { gltfPath: "/gems/gem3.glb", size: [2.0, 2.0, 2.0] }],
]);
