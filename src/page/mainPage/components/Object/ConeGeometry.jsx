export const Geometry = ({ color }) => {
    return (
        <>
            <coneGeometry attach="geometry" isBufferGeometry={false} />
            <meshNormalMaterial attacah="material" transparent />
        </>

    )

};