import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'

export default function SceneBloom() {
  return (
    <EffectComposer disableNormalPass>
        <Bloom mipmapBlur luminanceThreshold={1} levels={4} intensity={0.3} />
        <ToneMapping />
    </EffectComposer>
  )
}