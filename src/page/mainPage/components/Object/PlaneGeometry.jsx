export const Geometry = ({ color }) => {
    return (
        <mesh visible >
            <planeGeometry attach="geometry" />
            <meshStandardMaterial attacah="material" color={color} transparent />
        </mesh>
    )

};