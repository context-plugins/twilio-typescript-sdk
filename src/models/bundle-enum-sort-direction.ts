import { s, type EnumSchema } from "../core/index.js";

export const BundleEnumSortDirection = {
  Asc: "ASC",
  Desc: "DESC",
} as const;
export type BundleEnumSortDirection =
  | (typeof BundleEnumSortDirection)[keyof typeof BundleEnumSortDirection]
  | (string & {});

export const bundleEnumSortDirectionSchema: EnumSchema<BundleEnumSortDirection> =
  s.enumOf<BundleEnumSortDirection>(BundleEnumSortDirection);
