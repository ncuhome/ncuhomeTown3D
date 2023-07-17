import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import { ProductModel } from '../components/productGLB'

export default function ProductGroup() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <Canvas>
        <OrbitControls makeDefault />
        <directionalLight position={[0, 20, 0]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <ProductModel />
        </Suspense>
        <Perf position="top-left" />
      </Canvas>
    </div>
  )
}
