import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of this account. Either `Trial` or `Full` if it's been upgraded */
export const AccountEnumType = {
  Trial: "Trial",
  Full: "Full",
} as const;
export type AccountEnumType = (typeof AccountEnumType)[keyof typeof AccountEnumType] | (string & {});

export const accountEnumTypeSchema: EnumSchema<AccountEnumType> = s.enumOf<AccountEnumType>(AccountEnumType);
