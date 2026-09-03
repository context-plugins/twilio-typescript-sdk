import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LeaseType = {
  Random: "RANDOM",
  Vanity: "VANITY",
  SelfLeased: "SELF_LEASED",
} as const;
export type LeaseType = (typeof LeaseType)[keyof typeof LeaseType] | (string & {});

export const leaseTypeSchema: EnumSchema<LeaseType> = s.enumOf<LeaseType>(LeaseType);
