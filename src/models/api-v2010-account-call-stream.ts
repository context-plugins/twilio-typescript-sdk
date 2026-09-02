import { s, type Schema } from "../core/index.js";
import { streamEnumStatusSchema, type StreamEnumStatus } from "./stream-enum-status.js";

export type ApiV2010AccountCallStream = {
  sid?: string | null;
  accountSid?: string | null;
  callSid?: string | null;
  name?: string | null;
  status?: StreamEnumStatus;
  dateUpdated?: string | null;
  uri?: string | null;
};

export const apiV2010AccountCallStreamSchema: Schema<ApiV2010AccountCallStream> =
  s.object<ApiV2010AccountCallStream>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => streamEnumStatusSchema)),
    dateUpdated: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      callSid: "call_sid",
      dateUpdated: "date_updated",
    },
  });
