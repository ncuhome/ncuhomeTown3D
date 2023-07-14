import { Box, Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'

import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import { DevModel } from '../components/devGLB'

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
        <Perf position="top-left" />
      </Canvas>
    </div>
  )
}
