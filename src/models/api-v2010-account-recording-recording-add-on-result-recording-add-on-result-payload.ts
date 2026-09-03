import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload = {
  sid?: string | null;
  addOnResultSid?: string | null;
  accountSid?: string | null;
  label?: string | null;
  addOnSid?: string | null;
  addOnConfigurationSid?: string | null;
  contentType?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  referenceSid?: string | null;
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
