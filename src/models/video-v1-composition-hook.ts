import { s, type Schema } from "../core/index.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  compositionHookEnumFormatSchema,
  type CompositionHookEnumFormat,
} from "./composition-hook-enum-format.js";

export type VideoV1CompositionHook = {
  accountSid?: string | null;
  friendlyName?: string | null;
  enabled?: boolean | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  sid?: string | null;
  audioSources?: string[] | null;
  audioSourcesExcluded?: string[] | null;
  videoLayout?: Record<string, unknown> | null;
  resolution?: string | null;
  trim?: boolean | null;
  format?: CompositionHookEnumFormat;
  statusCallback?: string | null;
  statusCallbackMethod?: AmdStatusCallbackMethod | null;
  url?: string | null;
};

export const videoV1CompositionHookSchema: Schema<VideoV1CompositionHook> = s.object<VideoV1CompositionHook>({
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  enabled: s.optionalNullable(s.boolean()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  sid: s.optionalNullable(s.string()),
  audioSources: s.optionalNullable(s.array(s.string())),
  audioSourcesExcluded: s.optionalNullable(s.array(s.string())),
  videoLayout: s.optionalNullable(s.record(s.string(), s.unknown())),
  resolution: s.optionalNullable(s.string()),
  trim: s.optionalNullable(s.boolean()),
  format: s.optional(s.lazy(() => compositionHookEnumFormatSchema)),
  statusCallback: s.optionalNullable(s.string()),
  statusCallbackMethod: s.optionalNullable(s.lazy(() => amdStatusCallbackMethodSchema)),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    accountSid: "account_sid",
    friendlyName: "friendly_name",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    audioSources: "audio_sources",
    audioSourcesExcluded: "audio_sources_excluded",
    videoLayout: "video_layout",
    statusCallback: "status_callback",
    statusCallbackMethod: "status_callback_method",
  },
});
