import {proxy} from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: '/Roughness.png',
    fullDecal: '/Normal.png',
    isOcclusion : false,
    isMetalness : false,
    isOcclusionRoughnessMetalness : false,
    isAlbedo :  false,
    isAlbedoOcclusion : false,
    isGlossiness : false,
});

export default state;
