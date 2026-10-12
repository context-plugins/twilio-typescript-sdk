import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountsCallsRecordingsSidJson201041408Error1 = {
  /** Twilio-specific error code */
  code?: number;
  /** Error message */
  message?: string;
  /** Link to Error Code References */
  moreInfo?: string;
  /** HTTP response status code */
  status?: number;
};

export const accountsCallsRecordingsSidJson201041408Error1Schema: Schema<AccountsCallsRecordingsSidJson201041408Error1> =
  s.object<AccountsCallsRecordingsSidJson201041408Error1>({
    code: s.optional(s.int()),
    message: s.optional(s.string()),
    moreInfo: s.optional(s.string()),
    status: s.optional(s.int()),
    _keysMap: {
      moreInfo: "more_info",
    },
  });
