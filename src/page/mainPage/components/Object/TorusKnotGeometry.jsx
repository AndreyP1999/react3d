export const Geometry = ({ color }) => {
    return (
        <mesh visible >
            <torusKnotGeometry attach="geometry" />
            <meshStandardMaterial attacah="material" color={color} transparent />
        </mesh>
    )

};