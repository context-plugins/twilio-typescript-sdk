import { s, type EnumSchema } from "../core/index.js";

export const BundleEnumSortBy = {
  ValidUntil: "valid-until",
  DateUpdated: "date-updated",
} as const;
export type BundleEnumSortBy = (typeof BundleEnumSortBy)[keyof typeof BundleEnumSortBy] | (string & {});

export const bundleEnumSortBySchema: EnumSchema<BundleEnumSortBy> =
  s.enumOf<BundleEnumSortBy>(BundleEnumSortBy);
