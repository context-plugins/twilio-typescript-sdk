import { s, type EnumSchema } from "../core/index.js";

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
