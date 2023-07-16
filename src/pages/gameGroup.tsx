import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { GameModel } from "../components";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";

export default function GameGroup() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Canvas flat>
        <OrbitControls makeDefault />
        <directionalLight position={[0, 20, 0]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        
        <Suspense fallback={null}>
          <GameModel />
        </Suspense>
        <EffectComposer>
          <Bloom
            intensity={0.3} // The bloom intensity.
            blurPass={undefined} // A blur pass.
            kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur={false} // Enables or disables mipmap blur.
            resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
            resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
          />
        </EffectComposer>
        <Perf position="top-left" />
      </Canvas>
    </div>
  );
}
