import { s, type Schema } from "../core/index.js";
import {
  recordingAddOnResultEnumStatusSchema,
  type RecordingAddOnResultEnumStatus,
} from "./recording-add-on-result-enum-status.js";

export type ApiV2010AccountRecordingRecordingAddOnResult = {
  sid?: string | null;
  accountSid?: string | null;
  status?: RecordingAddOnResultEnumStatus;
  addOnSid?: string | null;
  addOnConfigurationSid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  dateCompleted?: string | null;
  referenceSid?: string | null;
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
