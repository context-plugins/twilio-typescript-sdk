import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentV1ContentApprovalFetch = {
  /** The unique string that that we created to identify the Content resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content
   * resource.
   */
  accountSid?: string | null;
  /**
   * Contains the whatsapp approval information for the Content resource, with fields such as
   * approval status, rejection reason, and category, amongst others.
   */
  whatsapp?: Record<string, unknown> | null;
  /** The URL of the resource, relative to `https://content.twilio.com`. */
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
