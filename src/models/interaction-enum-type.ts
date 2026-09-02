import { s, type EnumSchema } from "../core/index.js";

export const InteractionEnumType = {
  Message: "message",
  Voice: "voice",
  Unknown: "unknown",
} as const;
export type InteractionEnumType =
  | (typeof InteractionEnumType)[keyof typeof InteractionEnumType]
  | (string & {});

export const interactionEnumTypeSchema: EnumSchema<InteractionEnumType> =
  s.enumOf<InteractionEnumType>(InteractionEnumType);
