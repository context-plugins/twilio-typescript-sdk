import { s, type EnumSchema } from "../core/index.js";

export const AccountEnumStatus = {
  Active: "active",
  Suspended: "suspended",
  Closed: "closed",
} as const;
export type AccountEnumStatus = (typeof AccountEnumStatus)[keyof typeof AccountEnumStatus] | (string & {});

export const accountEnumStatusSchema: EnumSchema<AccountEnumStatus> =
  s.enumOf<AccountEnumStatus>(AccountEnumStatus);
