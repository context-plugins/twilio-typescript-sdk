import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BrandVettingEnumVettingProvider = {
  CampaignVerify: "campaign-verify",
  Aegis: "aegis",
} as const;
export type BrandVettingEnumVettingProvider =
  | (typeof BrandVettingEnumVettingProvider)[keyof typeof BrandVettingEnumVettingProvider]
  | (string & {});

export const brandVettingEnumVettingProviderSchema: EnumSchema<BrandVettingEnumVettingProvider> =
  s.enumOf<BrandVettingEnumVettingProvider>(BrandVettingEnumVettingProvider);
