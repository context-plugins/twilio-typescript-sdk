import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
