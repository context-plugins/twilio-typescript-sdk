import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BundleCopyEnumEndUserType = {
  Individual: "individual",
  Business: "business",
} as const;
export type BundleCopyEnumEndUserType =
  | (typeof BundleCopyEnumEndUserType)[keyof typeof BundleCopyEnumEndUserType]
  | (string & {});

export const bundleCopyEnumEndUserTypeSchema: EnumSchema<BundleCopyEnumEndUserType> =
  s.enumOf<BundleCopyEnumEndUserType>(BundleCopyEnumEndUserType);
