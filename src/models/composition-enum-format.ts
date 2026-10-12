import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The container format of the composition's media files as specified in the POST request that
 * created the Composition resource. See [POST
 * Parameters](https://www.twilio.com/docs/video/api/compositions-resource#http-post-parameters) for
 * more information.
 */
export const CompositionEnumFormat = {
  Mp4: "mp4",
  Webm: "webm",
} as const;
export type CompositionEnumFormat =
  | (typeof CompositionEnumFormat)[keyof typeof CompositionEnumFormat]
  | (string & {});

export const compositionEnumFormatSchema: EnumSchema<CompositionEnumFormat> =
  s.enumOf<CompositionEnumFormat>(CompositionEnumFormat);
