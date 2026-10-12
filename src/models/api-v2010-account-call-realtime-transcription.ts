import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  realtimeTranscriptionEnumStatusSchema,
  type RealtimeTranscriptionEnumStatus,
} from "./realtime-transcription-enum-status.js";

export type ApiV2010AccountCallRealtimeTranscription = {
  /** The SID of the Transcription resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this
   * Transcription resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Transcription
   * resource is associated with.
   */
  callSid?: string | null;
  /**
   * The user-specified name of this Transcription, if one was given when the Transcription was
   * created. This may be used to stop the Transcription.
   */
  name?: string | null;
  /** The status - one of `stopped`, `in-flight` */
  status?: RealtimeTranscriptionEnumStatus;
  /**
   * The date and time in GMT that this resource was last updated, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
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
