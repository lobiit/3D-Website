import React, {useState} from 'react';
import {downloadCanvasToImage, reader} from "../config/helpers.js";
import {motion, AnimatePresence} from "framer-motion";
import config from "../config/config.js";
import state from "../store/index.js";
import { download } from '../assets';
import { EditorTabs, FilterTabs, DecalTypes} from "../config/constants.js";
import {useSnapshot} from "valtio";
import {fadeAnimation, slideAnimation} from "../config/motion.js";
import {AIPicker, ColorPicker, CustomButton, FilePicker, Tab} from "../components/index.js";

const Customizer = () => {
    const snap = useSnapshot(state);

    const [file, setFile] = useState('');
    const [prompt, setPrompt] = useState('');
    const [generatingImg, setGeneratingImg] = useState(false);
    const [activeEditorTab, setActiveEditorTab] = useState("");
    const [activeFilterTab, setActiveFilterTab] = useState({
        roughness: true,
        Normal: false,
        Occlusion : false,
        Metalness :  false,
        OcclusionRoughnessMetalness: false,
        Albedo : false,
        AlbedoOcclusion : false,
        Glossiness : false,

    });
    // show tab content depending on the activeTab
    const generateTabContent = () => {
        switch (activeEditorTab) {
            case "colorpicker":
                return <ColorPicker />
            case "filepicker":
                return <FilePicker
                    file={file}
                    setFile={setFile}
                    readFile={readFile}
                />
            case "aipicker":
                return <AIPicker
                    prompt={prompt}
                    setPrompt={setPrompt}
                    generatingImg={generatingImg}
                    handleSubmit={handleSubmit}
                />
            default:
                return null;
        }
    }
    const handleSubmit = async (type) => {
        if(!prompt) return alert("Please enter a prompt");

        try {
            setGeneratingImg(true);

            const response = await fetch('https://threed-animation.onrender.com/api/v1/dalle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt,
                })
            })

            const data = await response.json();

            handleDecals(type, `data:image/png;base64,${data.photo}`)
        } catch (error) {
            alert(error)
        } finally {
            setGeneratingImg(false);
            setActiveEditorTab("");
        }
    }
    const handleDecals = (type, result) => {
        const decalType = DecalTypes[type];

        state[decalType.stateProperty] = result;

        if(!activeFilterTab[decalType.filterTab]) {
            handleActiveFilterTab(decalType.filterTab)
        }
    }

    const handleActiveFilterTab = (tabName) => {
        switch (tabName) {
            case "roughness":
                state.isLogoTexture = !activeFilterTab[tabName];
                break;
            case "Normal":
                state.isFullTexture = !activeFilterTab[tabName];
                break;
            case "Occlusion":
                state.isOcclusion = !activeFilterTab[tabName];
                break;
            case "Metalness":
                state.isMetalness = !activeFilterTab[tabName];
                break;
            case "OcclusionRoughnessMetalness":
                state.isOcclusionRoughnessMetalness = !activeFilterTab[tabName];
                break;
            case "Albedo":
                state.isAlbedo = !activeFilterTab[tabName];
                break;
            case "AlbedoOcclusion":
                state.isAlbedoOcclusion = !activeFilterTab[tabName];
                break;
            case "Glossiness":
                state.isGlossiness = !activeFilterTab[tabName];
                break;
            default:
                state.isLogoTexture = true;
                state.isFullTexture = false;
                break;
        }

        // after setting the state, activeFilterTab is updated

        setActiveFilterTab((prevState) => {
            return {
                ...prevState,
                [tabName]: !prevState[tabName]
            }
        })
    }

    const readFile = (type) => {
        reader(file)
            .then((result) => {
                handleDecals(type, result);
                setActiveEditorTab("");
            })
    }

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
                                        handleClick={()=> setActiveEditorTab(tab.name)}
                                    />
                                ))}
                                {generateTabContent()}
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
                                isActiveTab={activeFilterTab[tab.name]}
                                handleClick={()=> handleActiveFilterTab(tab.name)}
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
