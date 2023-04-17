import React from 'react';
import {Canvas} from "@react-three/fiber";
import {Center, Environment} from "@react-three/drei";
import CameraRig from "./CameraRig.jsx";
import Backdrop from "./Backdrop.jsx";
import Cake from "./Cake.jsx";

const CanvasModel = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5}/>
            <Environment preset={"city"} />
            <CameraRig>
                {/*<Backdrop />*/}
                <Center>
                    <Cake/>
                </Center>
            </CameraRig>
        </Canvas>
    )
}

export default CanvasModel;
