import { s, type EnumSchema } from "../core/index.js";

export const ServiceEnumGeoMatchLevel = {
  AreaCode: "area-code",
  Overlay: "overlay",
  Radius: "radius",
  Country: "country",
} as const;
export type ServiceEnumGeoMatchLevel =
  | (typeof ServiceEnumGeoMatchLevel)[keyof typeof ServiceEnumGeoMatchLevel]
  | (string & {});

export const serviceEnumGeoMatchLevelSchema: EnumSchema<ServiceEnumGeoMatchLevel> =
  s.enumOf<ServiceEnumGeoMatchLevel>(ServiceEnumGeoMatchLevel);
