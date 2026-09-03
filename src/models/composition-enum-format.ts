import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CompositionEnumFormat = {
  Mp4: "mp4",
  Webm: "webm",
} as const;
export type CompositionEnumFormat =
  | (typeof CompositionEnumFormat)[keyof typeof CompositionEnumFormat]
  | (string & {});

export const compositionEnumFormatSchema: EnumSchema<CompositionEnumFormat> =
  s.enumOf<CompositionEnumFormat>(CompositionEnumFormat);
