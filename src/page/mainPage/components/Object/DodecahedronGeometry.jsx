export const Geometry = ({ color }) => {
    return (
        <>
            <dodecahedronGeometry attach="geometry" />
            <meshNormalMaterial attacah="material" color={color} transparent />
        </>
    )

};