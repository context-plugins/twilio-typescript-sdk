import { s, type EnumSchema } from "../core/index.js";

export const BundleEnumEndUserType = {
  Individual: "individual",
  Business: "business",
} as const;
export type BundleEnumEndUserType =
  | (typeof BundleEnumEndUserType)[keyof typeof BundleEnumEndUserType]
  | (string & {});

export const bundleEnumEndUserTypeSchema: EnumSchema<BundleEnumEndUserType> =
  s.enumOf<BundleEnumEndUserType>(BundleEnumEndUserType);
