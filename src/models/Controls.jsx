import { OrbitControls } from '@react-three/drei'

export default function Controls()
{
    return (
        <>
            <OrbitControls
                makeDefault
                minDistance={150}
                maxDistance={300}
                dampingFactor={0.05}
                target={[0, 50, 0]}
                minPolarAngle={Math.PI / 4}     
                maxPolarAngle={Math.PI / 2.1}   
                minAzimuthAngle={-Math.PI / 10}  
                maxAzimuthAngle={Math.PI / 1.75}      
            />
        </>
    )
}
