import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The account type for ISV Account Type Migration. Set to 'ISV' or 'ISVSubAccount' to configure,
 * empty string to clear, or omit to preserve the existing value.
 */
export const AccountType = {
  Isv: "ISV",
  IsvSubAccount: "ISVSubAccount",
} as const;
export type AccountType = (typeof AccountType)[keyof typeof AccountType] | (string & {});

export const accountTypeSchema: EnumSchema<AccountType> = s.enumOf<AccountType>(AccountType);
