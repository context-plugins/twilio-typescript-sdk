import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReplaceItemsEnumEndUserType = {
  Individual: "individual",
  Business: "business",
} as const;
export type ReplaceItemsEnumEndUserType =
  | (typeof ReplaceItemsEnumEndUserType)[keyof typeof ReplaceItemsEnumEndUserType]
  | (string & {});

export const replaceItemsEnumEndUserTypeSchema: EnumSchema<ReplaceItemsEnumEndUserType> =
  s.enumOf<ReplaceItemsEnumEndUserType>(ReplaceItemsEnumEndUserType);
