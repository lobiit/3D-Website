import React from 'react';
import {downloadCanvasToImage, reader} from "../config/helpers.js";
import {motion, AnimatePresence} from "framer-motion";
import config from "../config/config.js";
import state from "../store/index.js";
import { download } from '../assets';
import { EditorTabs, FilterTabs, DecalTypes} from "../config/constants.js";

const Customizer = () => {
    return (
        <div>
            <button className='download-btn' onClick={downloadCanvasToImage}>
                <img
                    src={download}
                    alt='download_image'
                    className='w-3/5 h-3/5 object-contain'
                />
            </button>
        </div>
    );
};

export default Customizer;
