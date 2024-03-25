import { OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useStore } from "../../../../features/store";



export function Scene({ ListGeometry }) {
    const { target, setTarget, mode } = useStore()


    return (
        <Canvas
            dpr={[1, 2]}
            camera={{ fov: 50, position: [0, 1, 3] }}
            onPointerMissed={() => setTarget(null)}>
            {
                ListGeometry.map((geometry, index) => (
                    <mesh visible key={index} onClick={(e) => {
                        e.altKey ? setTarget(e.object) : null
                        console.log(e.object);
                    }
                    }>
                        {geometry}

                    </mesh>
                ))
            }

            {target && <TransformControls object={target} mode={mode} />}
            < OrbitControls makeDefault manual />
            < gridHelper args={[10000, 10000]} />
        </Canvas >
    )
}