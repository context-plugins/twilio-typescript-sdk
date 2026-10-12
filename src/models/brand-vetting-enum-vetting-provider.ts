import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The third-party provider that has conducted the vetting. One of “CampaignVerify” (Campaign Verify
 * tokens) or “AEGIS” (Secondary Vetting).
 */
export const BrandVettingEnumVettingProvider = {
  CampaignVerify: "campaign-verify",
  Aegis: "aegis",
} as const;
export type BrandVettingEnumVettingProvider =
  | (typeof BrandVettingEnumVettingProvider)[keyof typeof BrandVettingEnumVettingProvider]
  | (string & {});

export const brandVettingEnumVettingProviderSchema: EnumSchema<BrandVettingEnumVettingProvider> =
  s.enumOf<BrandVettingEnumVettingProvider>(BrandVettingEnumVettingProvider);
