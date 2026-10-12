import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  recordingAddOnResultEnumStatusSchema,
  type RecordingAddOnResultEnumStatus,
} from "./recording-add-on-result-enum-status.js";

export type ApiV2010AccountRecordingRecordingAddOnResult = {
  /** The unique string that that we created to identify the Recording AddOnResult resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Recording AddOnResult resource.
   */
  accountSid?: string | null;
  /**
   * The status of the result. Can be: `canceled`, `completed`, `deleted`, `failed`, `in-progress`,
   * `init`, `processing`, `queued`.
   */
  status?: RecordingAddOnResultEnumStatus;
  /** The SID of the Add-on to which the result belongs. */
  addOnSid?: string | null;
  /** The SID of the Add-on configuration. */
  addOnConfigurationSid?: string | null;
  /**
   * The date and time in GMT that the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /**
   * The date and time in GMT that the result was completed specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCompleted?: string | null;
  /** The SID of the recording to which the AddOnResult resource belongs. */
  referenceSid?: string | null;
  /** A list of related resources identified by their relative URIs. */
  subresourceUris?: Record<string, unknown> | null;
};

export const apiV2010AccountRecordingRecordingAddOnResultSchema: Schema<ApiV2010AccountRecordingRecordingAddOnResult> =
  s.object<ApiV2010AccountRecordingRecordingAddOnResult>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => recordingAddOnResultEnumStatusSchema)),
    addOnSid: s.optionalNullable(s.string()),
    addOnConfigurationSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    dateCompleted: s.optionalNullable(s.string()),
    referenceSid: s.optionalNullable(s.string()),
    subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      addOnSid: "add_on_sid",
      addOnConfigurationSid: "add_on_configuration_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      dateCompleted: "date_completed",
      referenceSid: "reference_sid",
      subresourceUris: "subresource_uris",
    },
  });
