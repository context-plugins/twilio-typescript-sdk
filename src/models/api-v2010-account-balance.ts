import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountBalance = {
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  /**
   * The balance of the Account, in units specified by the unit parameter. Balance changes may not
   * be reflected immediately. Child accounts do not contain balance information
   */
  balance?: string | null;
  /** The units of currency for the account balance */
  currency?: string | null;
};

export const apiV2010AccountBalanceSchema: Schema<ApiV2010AccountBalance> = s.object<ApiV2010AccountBalance>({
  accountSid: s.optionalNullable(s.string()),
  balance: s.optionalNullable(s.string()),
  currency: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
  },
});
