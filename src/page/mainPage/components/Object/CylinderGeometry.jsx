export const Geometry = ({ color }) => {
    return (
        <>
            <cylinderGeometry attach="geometry" isBufferGeometry={false} />
            <meshNormalMaterial attacah="material" transparent />
        </>


    )

};