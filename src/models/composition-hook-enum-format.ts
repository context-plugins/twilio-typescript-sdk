import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The container format of the media files used by the compositions created by the composition hook.
 * If `mp4` or `webm`, `audio_sources` must have one or more tracks and/or a `video_layout` element
 * must contain a valid `video_sources` list, otherwise an error occurs.
 */
export const CompositionHookEnumFormat = {
  Mp4: "mp4",
  Webm: "webm",
} as const;
export type CompositionHookEnumFormat =
  | (typeof CompositionHookEnumFormat)[keyof typeof CompositionHookEnumFormat]
  | (string & {});

export const compositionHookEnumFormatSchema: EnumSchema<CompositionHookEnumFormat> =
  s.enumOf<CompositionHookEnumFormat>(CompositionHookEnumFormat);
