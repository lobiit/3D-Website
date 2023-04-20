import { swatch, fileIcon, ai, Normal, Roughness, stylistCake, Metalness, OcclusionRoughnessMetalness, Occlusion, Albedo, AlbedoOcclusion, Glossiness} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  // {
  //   name: "stylishCake",
  //   icon: stylistCake,
  // },
  {
    name: "Normal",
    icon: Normal,
  },
  {
    name: "Roughness",
    icon: Roughness,
  },
  {
    name: "Occlusion",
    icon: Occlusion,
  },
  {
    name: "Metalness",
    icon: Metalness,
  },
  {
    name: "OcclusionRoughnessMetalness",
    icon: OcclusionRoughnessMetalness,
  },
  {
    name: "Albedo",
    icon: Albedo,
  },
  {
    name: "AlbedoOcclusion",
    icon: AlbedoOcclusion,
  },
  {
    name: "Glossiness",
    icon: Glossiness,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "roughness",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "Normal",
  },
  Albedo: {
    stateProperty: "albedoDecal",
    filterTab: "Albedo",
  },
  Occlusion: {
    stateProperty: "occlusionDecal",
    filterTab: "Occlusion",
  },
  Metalness: {
    stateProperty: "metalnessDecal",
    filterTab: "Metalness",
  },
  OcclusionRoughnessMetalness: {
    stateProperty: "occlusionRoughnessMetalnessDecal",
    filterTab: "OcclusionRoughnessMetalness",
  },
  AlbedoOcclusion: {
    stateProperty: "albedoOcclusionDecal",
    filterTab: "AlbedoOcclusion",
  },
  Glossiness: {
    stateProperty: "glossinessDecal",
    filterTab: "Glossiness",
  },
};
