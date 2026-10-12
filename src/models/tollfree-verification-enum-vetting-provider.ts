import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The third-party political vetting provider. */
export const TollfreeVerificationEnumVettingProvider = {
  CampaignVerify: "CAMPAIGN_VERIFY",
} as const;
export type TollfreeVerificationEnumVettingProvider =
  | (typeof TollfreeVerificationEnumVettingProvider)[keyof typeof TollfreeVerificationEnumVettingProvider]
  | (string & {});

export const tollfreeVerificationEnumVettingProviderSchema: EnumSchema<TollfreeVerificationEnumVettingProvider> =
  s.enumOf<TollfreeVerificationEnumVettingProvider>(TollfreeVerificationEnumVettingProvider);
