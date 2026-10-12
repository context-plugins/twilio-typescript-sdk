import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of End User the regulation requires - can be `individual` or `business`. */
export const RegulationEnumEndUserType = {
  Individual: "individual",
  Business: "business",
} as const;
export type RegulationEnumEndUserType =
  | (typeof RegulationEnumEndUserType)[keyof typeof RegulationEnumEndUserType]
  | (string & {});

export const regulationEnumEndUserTypeSchema: EnumSchema<RegulationEnumEndUserType> =
  s.enumOf<RegulationEnumEndUserType>(RegulationEnumEndUserType);
