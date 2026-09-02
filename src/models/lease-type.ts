import { s, type EnumSchema } from "../core/index.js";

export const LeaseType = {
  Random: "RANDOM",
  Vanity: "VANITY",
  SelfLeased: "SELF_LEASED",
} as const;
export type LeaseType = (typeof LeaseType)[keyof typeof LeaseType] | (string & {});

export const leaseTypeSchema: EnumSchema<LeaseType> = s.enumOf<LeaseType>(LeaseType);
