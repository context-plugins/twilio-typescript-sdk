import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BundleEnumSortDirection = {
  Asc: "ASC",
  Desc: "DESC",
} as const;
export type BundleEnumSortDirection =
  | (typeof BundleEnumSortDirection)[keyof typeof BundleEnumSortDirection]
  | (string & {});

export const bundleEnumSortDirectionSchema: EnumSchema<BundleEnumSortDirection> =
  s.enumOf<BundleEnumSortDirection>(BundleEnumSortDirection);
