import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountBalance = {
  accountSid?: string | null;
  balance?: string | null;
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
