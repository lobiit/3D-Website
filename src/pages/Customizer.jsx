import React from 'react';
import {downloadCanvasToImage} from "../config/helpers.js";

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
