import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of business, valid values are PRIVATE_PROFIT, PUBLIC_PROFIT, NON_PROFIT,
 * SOLE_PROPRIETOR, GOVERNMENT. Required field., Type of Business.
 */
export const TollfreeVerificationEnumBusinessType = {
  PrivateProfit: "PRIVATE_PROFIT",
  PublicProfit: "PUBLIC_PROFIT",
  SoleProprietor: "SOLE_PROPRIETOR",
  NonProfit: "NON_PROFIT",
  Government: "GOVERNMENT",
} as const;
export type TollfreeVerificationEnumBusinessType =
  | (typeof TollfreeVerificationEnumBusinessType)[keyof typeof TollfreeVerificationEnumBusinessType]
  | (string & {});

export const tollfreeVerificationEnumBusinessTypeSchema: EnumSchema<TollfreeVerificationEnumBusinessType> =
  s.enumOf<TollfreeVerificationEnumBusinessType>(TollfreeVerificationEnumBusinessType);
