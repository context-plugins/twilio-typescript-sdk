import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountEnumType = {
  Trial: "Trial",
  Full: "Full",
} as const;
export type AccountEnumType = (typeof AccountEnumType)[keyof typeof AccountEnumType] | (string & {});

export const accountEnumTypeSchema: EnumSchema<AccountEnumType> = s.enumOf<AccountEnumType>(AccountEnumType);
