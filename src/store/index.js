import {proxy} from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: '/Roughness.png',
    fullDecal: '/Normal.png',
    isOcclusion : '/Occlusion.png',
    isMetalness : '/Metalness.png',
    isOcclusionRoughnessMetalness : '/OcclusionRoughnessMetalness.png',
    isAlbedo :  '/Albedo.png',
    isAlbedoOcclusion : '/AlbedoOcclusion.png',
    isGlossiness : 'Glossiness.png',
});

export default state;
