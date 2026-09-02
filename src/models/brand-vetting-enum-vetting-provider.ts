import { s, type EnumSchema } from "../core/index.js";

export const BrandVettingEnumVettingProvider = {
  CampaignVerify: "campaign-verify",
  Aegis: "aegis",
} as const;
export type BrandVettingEnumVettingProvider =
  | (typeof BrandVettingEnumVettingProvider)[keyof typeof BrandVettingEnumVettingProvider]
  | (string & {});

export const brandVettingEnumVettingProviderSchema: EnumSchema<BrandVettingEnumVettingProvider> =
  s.enumOf<BrandVettingEnumVettingProvider>(BrandVettingEnumVettingProvider);
