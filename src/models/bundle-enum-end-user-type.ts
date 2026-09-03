import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BundleEnumEndUserType = {
  Individual: "individual",
  Business: "business",
} as const;
export type BundleEnumEndUserType =
  | (typeof BundleEnumEndUserType)[keyof typeof BundleEnumEndUserType]
  | (string & {});

export const bundleEnumEndUserTypeSchema: EnumSchema<BundleEnumEndUserType> =
  s.enumOf<BundleEnumEndUserType>(BundleEnumEndUserType);
