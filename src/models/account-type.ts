import { s, type EnumSchema } from "../core/index.js";

export const AccountType = {
  Isv: "ISV",
  IsvSubAccount: "ISVSubAccount",
} as const;
export type AccountType = (typeof AccountType)[keyof typeof AccountType] | (string & {});

export const accountTypeSchema: EnumSchema<AccountType> = s.enumOf<AccountType>(AccountType);
