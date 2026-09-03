import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InteractionChannelAppEnumType = {
  Transcription: "transcription",
  Studio: "studio",
  Copilot: "copilot",
} as const;
export type InteractionChannelAppEnumType =
  | (typeof InteractionChannelAppEnumType)[keyof typeof InteractionChannelAppEnumType]
  | (string & {});

export const interactionChannelAppEnumTypeSchema: EnumSchema<InteractionChannelAppEnumType> =
  s.enumOf<InteractionChannelAppEnumType>(InteractionChannelAppEnumType);
