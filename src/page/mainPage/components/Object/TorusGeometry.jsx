export const Geometry = ({ color }) => {
    return (
        <mesh visible >
            <torusGeometry attach="geometry" />
            <meshStandardMaterial attacah="material" color={color} transparent />
        </mesh>
    )

};