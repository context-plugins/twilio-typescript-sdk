import { s, type EnumSchema } from "../core/index.js";

export const BundleCopyEnumEndUserType = {
  Individual: "individual",
  Business: "business",
} as const;
export type BundleCopyEnumEndUserType =
  | (typeof BundleCopyEnumEndUserType)[keyof typeof BundleCopyEnumEndUserType]
  | (string & {});

export const bundleCopyEnumEndUserTypeSchema: EnumSchema<BundleCopyEnumEndUserType> =
  s.enumOf<BundleCopyEnumEndUserType>(BundleCopyEnumEndUserType);
