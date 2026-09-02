import { s, type Schema } from "../core/index.js";

export type AccountsCallsRecordingsSidJson201041408Error = {
  code?: number;
  message?: string;
  moreInfo?: string;
  status?: number;
};

export const accountsCallsRecordingsSidJson201041408ErrorSchema: Schema<AccountsCallsRecordingsSidJson201041408Error> =
  s.object<AccountsCallsRecordingsSidJson201041408Error>({
    code: s.optional(s.number()),
    message: s.optional(s.string()),
    moreInfo: s.optional(s.string()),
    status: s.optional(s.number()),
    _keysMap: {
      moreInfo: "more_info",
    },
  });
