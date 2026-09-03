import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
