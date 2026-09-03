import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentV1ContentApprovalFetch1 = {
  sid?: string | null;
  accountSid?: string | null;
  whatsapp?: Record<string, unknown> | null;
  url?: string | null;
};

export const contentV1ContentApprovalFetch1Schema: Schema<ContentV1ContentApprovalFetch1> =
  s.object<ContentV1ContentApprovalFetch1>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    whatsapp: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
    },
  });
