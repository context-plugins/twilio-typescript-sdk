import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of this account. Usually `active`, but can be `suspended` or `closed`. */
export const AccountEnumStatus = {
  Active: "active",
  Suspended: "suspended",
  Closed: "closed",
} as const;
export type AccountEnumStatus = (typeof AccountEnumStatus)[keyof typeof AccountEnumStatus] | (string & {});

export const accountEnumStatusSchema: EnumSchema<AccountEnumStatus> =
  s.enumOf<AccountEnumStatus>(AccountEnumStatus);
