import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentV1ContentApprovalFetch = {
  sid?: string | null;
  accountSid?: string | null;
  whatsapp?: Record<string, unknown> | null;
  url?: string | null;
};

export const contentV1ContentApprovalFetchSchema: Schema<ContentV1ContentApprovalFetch> =
  s.object<ContentV1ContentApprovalFetch>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    whatsapp: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
    },
  });
