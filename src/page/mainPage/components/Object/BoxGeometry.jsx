export const Geometry = ({ color }) => {

    return (

        <>

            <boxGeometry attach="geometry" isBufferGeometry={false} args={[1,2,3]} />
            <meshNormalMaterial attacah="material" transparent />
        </>

    )

};