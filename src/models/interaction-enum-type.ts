import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
