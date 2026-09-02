import { s, type EnumSchema } from "../core/index.js";

export const ReplaceItemsEnumEndUserType = {
  Individual: "individual",
  Business: "business",
} as const;
export type ReplaceItemsEnumEndUserType =
  | (typeof ReplaceItemsEnumEndUserType)[keyof typeof ReplaceItemsEnumEndUserType]
  | (string & {});

export const replaceItemsEnumEndUserTypeSchema: EnumSchema<ReplaceItemsEnumEndUserType> =
  s.enumOf<ReplaceItemsEnumEndUserType>(ReplaceItemsEnumEndUserType);
