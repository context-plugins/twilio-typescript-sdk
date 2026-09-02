import { s, type EnumSchema } from "../core/index.js";

export const RegulationEnumEndUserType = {
  Individual: "individual",
  Business: "business",
} as const;
export type RegulationEnumEndUserType =
  | (typeof RegulationEnumEndUserType)[keyof typeof RegulationEnumEndUserType]
  | (string & {});

export const regulationEnumEndUserTypeSchema: EnumSchema<RegulationEnumEndUserType> =
  s.enumOf<RegulationEnumEndUserType>(RegulationEnumEndUserType);
