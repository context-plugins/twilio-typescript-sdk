import { s, type EnumSchema } from "../core/index.js";

export const TollfreeVerificationEnumVettingProvider = {
  CampaignVerify: "CAMPAIGN_VERIFY",
} as const;
export type TollfreeVerificationEnumVettingProvider =
  | (typeof TollfreeVerificationEnumVettingProvider)[keyof typeof TollfreeVerificationEnumVettingProvider]
  | (string & {});

export const tollfreeVerificationEnumVettingProviderSchema: EnumSchema<TollfreeVerificationEnumVettingProvider> =
  s.enumOf<TollfreeVerificationEnumVettingProvider>(TollfreeVerificationEnumVettingProvider);
