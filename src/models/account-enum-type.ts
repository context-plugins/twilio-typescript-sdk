import { s, type EnumSchema } from "../core/index.js";

export const AccountEnumType = {
  Trial: "Trial",
  Full: "Full",
} as const;
export type AccountEnumType = (typeof AccountEnumType)[keyof typeof AccountEnumType] | (string & {});

export const accountEnumTypeSchema: EnumSchema<AccountEnumType> = s.enumOf<AccountEnumType>(AccountEnumType);
