import { Box, Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'

import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import { DevModel } from '../components'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'

export default function DevGroup() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <Canvas flat>
        <color args={['#4E6E69']} attach="background" />
        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Center>
            <DevModel />
          </Center>
        </Suspense>
        <EffectComposer>
          <Bloom
            intensity={0.1} // The bloom intensity.
            blurPass={undefined} // A blur pass.
            kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur={false} // Enables or disables mipmap blur.
            resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
            resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
          />
        </EffectComposer>
        <Perf position="top-left" />
      </Canvas>
    </div>
  )
}
