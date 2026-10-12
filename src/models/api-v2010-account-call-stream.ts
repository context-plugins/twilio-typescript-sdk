import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { streamEnumStatusSchema, type StreamEnumStatus } from "./stream-enum-status.js";

export type ApiV2010AccountCallStream = {
  /** The SID of the Stream resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Stream
   * resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Stream resource
   * is associated with.
   */
  callSid?: string | null;
  /**
   * The user-specified name of this Stream, if one was given when the Stream was created. This can
   * be used to stop the Stream.
   */
  name?: string | null;
  /** The status of the Stream. Possible values are `stopped` and `in-progress`. */
  status?: StreamEnumStatus;
  /**
   * The date and time in GMT that this resource was last updated, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
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
