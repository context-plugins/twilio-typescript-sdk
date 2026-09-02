import { s, type EnumSchema } from "../core/index.js";

export const PortingPortabilityEnumNumberType = {
  Local: "LOCAL",
  Unknown: "UNKNOWN",
  Mobile: "MOBILE",
  TollFree: "TOLL-FREE",
} as const;
export type PortingPortabilityEnumNumberType =
  | (typeof PortingPortabilityEnumNumberType)[keyof typeof PortingPortabilityEnumNumberType]
  | (string & {});

export const portingPortabilityEnumNumberTypeSchema: EnumSchema<PortingPortabilityEnumNumberType> =
  s.enumOf<PortingPortabilityEnumNumberType>(PortingPortabilityEnumNumberType);
