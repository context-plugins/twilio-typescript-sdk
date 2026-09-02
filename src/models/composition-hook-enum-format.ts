import { s, type EnumSchema } from "../core/index.js";

export const CompositionHookEnumFormat = {
  Mp4: "mp4",
  Webm: "webm",
} as const;
export type CompositionHookEnumFormat =
  | (typeof CompositionHookEnumFormat)[keyof typeof CompositionHookEnumFormat]
  | (string & {});

export const compositionHookEnumFormatSchema: EnumSchema<CompositionHookEnumFormat> =
  s.enumOf<CompositionHookEnumFormat>(CompositionHookEnumFormat);
