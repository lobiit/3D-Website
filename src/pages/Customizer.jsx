import React from 'react';
import {downloadCanvasToImage, reader} from "../config/helpers.js";
import {motion, AnimatePresence} from "framer-motion";
import config from "../config/config.js";
import state from "../store/index.js";
import { download } from '../assets';
import { EditorTabs, FilterTabs, DecalTypes} from "../config/constants.js";
import {useSnapshot} from "valtio";
import {fadeAnimation, slideAnimation} from "../config/motion.js";
import {CustomButton, Tab} from "../components/index.js";

const Customizer = () => {
    const snap = useSnapshot(state)
    return (
        <AnimatePresence>
            { !snap.intro && (
                <>
                    <motion.div
                        key={"custom"}
                        className={"absolute top-0 left-0 z-10"}
                        {...slideAnimation('left')}
                    >
                        <div className={"flex items-center min-h-screen"}>
                            <div className={"editortabs-container tabs"}>
                                {EditorTabs.map((tab) => (
                                    <Tab
                                        key={tab.name}
                                        tab={tab}
                                        handleClick={()=> {}}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={"absolute z-10 top-5 right-5"}
                                {...fadeAnimation}
                    >
                        <CustomButton
                            type={"filled"}
                            title={"Go Back"}
                            handleClick={()=> state.intro=true}
                            customStyles={"w-fit px-4 py-2.5 font-bold text-sm"}
                        />
                    </motion.div>
                    <motion.div className={"filtertabs-container "} {...slideAnimation()}>
                        {FilterTabs.map((tab) => (
                            <Tab
                                key={tab.name}
                                tab={tab}
                                isFilterTab
                                isActiveTab={""}
                                handleClick={()=> {}}
                            />
                            ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
        // <div>
        //     <button className='download-btn' onClick={downloadCanvasToImage}>
        //         <img
        //             src={download}
        //             alt='download_image'
        //             className='w-3/5 h-3/5 object-contain'
        //         />
        //     </button>
        // </div>
    );
};

export default Customizer;