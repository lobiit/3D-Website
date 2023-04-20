import {proxy} from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    isOcclusion : false,
    isMetalness : false,
    isOcclusionRoughnessMetalness : false,
    isAlbedo :  false,
    isAlbedoOcclusion : false,
    isGlossiness : false,
    logoDecal: '/Roughness.png',
    fullDecal: '/Normal.png',
    occlusionDecal : '/Occlusion.png',
    metalnessDecal : '/Metalness.png',
    occlusionRoughnessMetalnessDecal : '/OcclusionRoughnessMetalness.png',
    albedoDecal :  '/Albedo.png',
    albedoOcclusionDecal : '/AlbedoOcclusion.png',
    glossinessDecal : 'Glossiness.png',
});

export default state;
