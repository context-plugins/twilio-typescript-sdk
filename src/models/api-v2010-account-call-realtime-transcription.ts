import { s, type Schema } from "../core/index.js";
import {
  realtimeTranscriptionEnumStatusSchema,
  type RealtimeTranscriptionEnumStatus,
} from "./realtime-transcription-enum-status.js";

export type ApiV2010AccountCallRealtimeTranscription = {
  sid?: string | null;
  accountSid?: string | null;
  callSid?: string | null;
  name?: string | null;
  status?: RealtimeTranscriptionEnumStatus;
  dateUpdated?: string | null;
  uri?: string | null;
};

export const apiV2010AccountCallRealtimeTranscriptionSchema: Schema<ApiV2010AccountCallRealtimeTranscription> =
  s.object<ApiV2010AccountCallRealtimeTranscription>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => realtimeTranscriptionEnumStatusSchema)),
    dateUpdated: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      callSid: "call_sid",
      dateUpdated: "date_updated",
    },
  });
