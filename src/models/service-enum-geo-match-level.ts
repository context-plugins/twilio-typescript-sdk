import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where a proxy number must be located relative to the participant identifier. Can be: `country`,
 * `area-code`, or `extended-area-code`. The default value is `country` and more specific areas than
 * `country` are only available in North America.
 */
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
