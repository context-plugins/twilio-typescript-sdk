import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
