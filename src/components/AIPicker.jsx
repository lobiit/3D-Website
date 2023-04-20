import React from 'react';
import {CustomButton} from "./index.js";

const AiPicker = ({prompt, setPrompt,generatingImg, handleSubmit }) => {
    return (
        <div className={"aipicker-container"}>

            <textarea
                rows={5}
                value={prompt}
                onChange={(e)=> setPrompt(e.target.value)}
                placeholder={"Ask Ai"}
                className={"aipicker-textarea"}
            />
            <div className={"flex flex-wrap gap-3"}>
                {generatingImg ? (
                    <CustomButton
                        type={"outline"}
                        title={"Asking AI..."}
                        customStyles={"text-xs"}
                    />
                ):(
                    <>

                        <CustomButton
                            type={"outline"}
                            title={"Äi Decor"}
                            handleClick={()=> handleSubmit('logo')}
                            customStyles={"text-xs"}
                        />
                        <CustomButton
                            type={"filled"}
                            title={"AI Full"}
                            handleClick={()=> handleSubmit('full')}
                            customStyles={"text-xs"}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default AiPicker;
