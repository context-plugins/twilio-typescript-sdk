import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload = {
  /**
   * The unique string that that we created to identify the Recording AddOnResult Payload resource.
   */
  sid?: string | null;
  /** The SID of the AddOnResult to which the payload belongs. */
  addOnResultSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Recording AddOnResult Payload resource.
   */
  accountSid?: string | null;
  /** The string provided by the vendor that describes the payload. */
  label?: string | null;
  /** The SID of the Add-on to which the result belongs. */
  addOnSid?: string | null;
  /** The SID of the Add-on configuration. */
  addOnConfigurationSid?: string | null;
  /** The MIME type of the payload. */
  contentType?: string | null;
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
   * The SID of the recording to which the AddOnResult resource that contains the payload belongs.
   */
  referenceSid?: string | null;
  /** A list of related resources identified by their relative URIs. */
  subresourceUris?: Record<string, unknown> | null;
};

export const apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayloadSchema: Schema<ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload> =
  s.object<ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload>({
    sid: s.optionalNullable(s.string()),
    addOnResultSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    label: s.optionalNullable(s.string()),
    addOnSid: s.optionalNullable(s.string()),
    addOnConfigurationSid: s.optionalNullable(s.string()),
    contentType: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    referenceSid: s.optionalNullable(s.string()),
    subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      addOnResultSid: "add_on_result_sid",
      accountSid: "account_sid",
      addOnSid: "add_on_sid",
      addOnConfigurationSid: "add_on_configuration_sid",
      contentType: "content_type",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      referenceSid: "reference_sid",
      subresourceUris: "subresource_uris",
    },
  });
