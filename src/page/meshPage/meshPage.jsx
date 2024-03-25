import { Canvas, useThree } from "@react-three/fiber";
import style from "./style.module.css";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { useStore } from "../../features/store";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from "three";
function TestComp({ positions, indices }) {

    const { scene, } = useThree()
    useEffect(() => {
        const geometry = new BufferGeometry();
        const vertices = [];

        for (let i = 0; i < positions.length; i++) {
            var x = positions[i];
            var y = positions[i + 1];
            var z = positions[i + 2];
            vertices.push(new Vector3(x, y, z));
        }
        geometry.setAttribute('position', new BufferAttribute(vertices, 3));
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(geometry)
        // var geometry = new BufferGeometry();
        // console.log(geometry);
        // Добавление вершин в Geometry
        // for (var i = 0; i < positions.length; i += 3) {
        //     var x = positions[i];
        //     var y = positions[i + 1];
        //     var z = positions[i + 2];
        //     geometry.vertices.push(new THREE.Vector3(x, y, z));
        // }

        // // Добавление индексов для граней
        // for (var i = 0; i < indices.length; i += 3) {
        //     var a = indices[i];
        //     var b = indices[i + 1];
        //     var c = indices[i + 2];
        //     geometry.faces.push(new THREE.Face3(a, b, c));
        // }
        // geometry.computeFaceNormals();
        // geometry.computeVertexNormals();
        // geometry.computeBoundingBox();
        // geometry.computeBoundingSphere();
        // scene.add(geometry)

    }, [])
    return (
        <></>
    )
}
export function MeshPage() {
    const { state } = useLocation()
    const { target } = useStore()

    const [first, setfirst] = useState(false)
    return (
        <main onClick={() => setfirst(!first)} className={style.application}>
            <section className={style.object}>
                <Canvas dpr={[1, 2]} camera={{ fov: 50, position: [0, 1, 3] }}>

                    <TestComp positions={state.positions} indices={state.indices} />
                    < gridHelper args={[10000, 10000]} />

                    < OrbitControls makeDefault manual />
                </Canvas>
            </section>
            <section className={style.materaial}>

            </section>
        </main>
    )
}