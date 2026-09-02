import { s, type Schema } from "../core/index.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import { recordingEnumCodecSchema, type RecordingEnumCodec } from "./recording-enum-codec.js";
import { recordingEnumFormatSchema, type RecordingEnumFormat } from "./recording-enum-format.js";
import { recordingEnumStatus1Schema, type RecordingEnumStatus1 } from "./recording-enum-status1.js";
import { recordingEnumTypeSchema, type RecordingEnumType } from "./recording-enum-type.js";

export type VideoV1Recording = {
  accountSid?: string | null;
  status?: RecordingEnumStatus1;
  dateCreated?: Date | null;
  sid?: string | null;
  sourceSid?: string | null;
  size?: number | null;
  url?: string | null;
  type?: RecordingEnumType;
  duration?: number | null;
  containerFormat?: RecordingEnumFormat;
  codec?: RecordingEnumCodec;
  groupingSids?: Record<string, unknown> | null;
  trackName?: string | null;
  offset?: number | null;
  mediaExternalLocation?: string | null;
  statusCallback?: string | null;
  statusCallbackMethod?: AmdStatusCallbackMethod | null;
  links?: Record<string, unknown> | null;
};

export const videoV1RecordingSchema: Schema<VideoV1Recording> = s.object<VideoV1Recording>({
  accountSid: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => recordingEnumStatus1Schema)),
  dateCreated: s.optionalNullable(s.dateTime()),
  sid: s.optionalNullable(s.string()),
  sourceSid: s.optionalNullable(s.string()),
  size: s.optionalNullable(s.number()),
  url: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => recordingEnumTypeSchema)),
  duration: s.optionalNullable(s.number()),
  containerFormat: s.optional(s.lazy(() => recordingEnumFormatSchema)),
  codec: s.optional(s.lazy(() => recordingEnumCodecSchema)),
  groupingSids: s.optionalNullable(s.record(s.string(), s.unknown())),
  trackName: s.optionalNullable(s.string()),
  offset: s.optionalNullable(s.number()),
  mediaExternalLocation: s.optionalNullable(s.string()),
  statusCallback: s.optionalNullable(s.string()),
  statusCallbackMethod: s.optionalNullable(s.lazy(() => amdStatusCallbackMethodSchema)),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    dateCreated: "date_created",
    sourceSid: "source_sid",
    containerFormat: "container_format",
    groupingSids: "grouping_sids",
    trackName: "track_name",
    mediaExternalLocation: "media_external_location",
    statusCallback: "status_callback",
    statusCallbackMethod: "status_callback_method",
  },
});
