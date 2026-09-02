import { s, type Schema } from "../core/index.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import { compositionEnumFormatSchema, type CompositionEnumFormat } from "./composition-enum-format.js";
import { compositionEnumStatusSchema, type CompositionEnumStatus } from "./composition-enum-status.js";

export type VideoV1Composition = {
  accountSid?: string | null;
  status?: CompositionEnumStatus;
  dateCreated?: Date | null;
  dateCompleted?: Date | null;
  dateDeleted?: Date | null;
  sid?: string | null;
  roomSid?: string | null;
  audioSources?: string[] | null;
  audioSourcesExcluded?: string[] | null;
  videoLayout?: Record<string, unknown> | null;
  resolution?: string | null;
  trim?: boolean | null;
  format?: CompositionEnumFormat;
  bitrate?: number;
  size?: number | null;
  duration?: number;
  mediaExternalLocation?: string | null;
  statusCallback?: string | null;
  statusCallbackMethod?: AmdStatusCallbackMethod | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const videoV1CompositionSchema: Schema<VideoV1Composition> = s.object<VideoV1Composition>({
  accountSid: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => compositionEnumStatusSchema)),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateCompleted: s.optionalNullable(s.dateTime()),
  dateDeleted: s.optionalNullable(s.dateTime()),
  sid: s.optionalNullable(s.string()),
  roomSid: s.optionalNullable(s.string()),
  audioSources: s.optionalNullable(s.array(s.string())),
  audioSourcesExcluded: s.optionalNullable(s.array(s.string())),
  videoLayout: s.optionalNullable(s.record(s.string(), s.unknown())),
  resolution: s.optionalNullable(s.string()),
  trim: s.optionalNullable(s.boolean()),
  format: s.optional(s.lazy(() => compositionEnumFormatSchema)),
  bitrate: s.optional(s.number()),
  size: s.optionalNullable(s.number()),
  duration: s.optional(s.number()),
  mediaExternalLocation: s.optionalNullable(s.string()),
  statusCallback: s.optionalNullable(s.string()),
  statusCallbackMethod: s.optionalNullable(s.lazy(() => amdStatusCallbackMethodSchema)),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    dateCreated: "date_created",
    dateCompleted: "date_completed",
    dateDeleted: "date_deleted",
    roomSid: "room_sid",
    audioSources: "audio_sources",
    audioSourcesExcluded: "audio_sources_excluded",
    videoLayout: "video_layout",
    mediaExternalLocation: "media_external_location",
    statusCallback: "status_callback",
    statusCallbackMethod: "status_callback_method",
  },
});
