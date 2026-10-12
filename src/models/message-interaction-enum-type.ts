import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Type of Message Interaction. This value is always `message`. */
export const MessageInteractionEnumType = {
  Message: "message",
  Voice: "voice",
  Unknown: "unknown",
} as const;
export type MessageInteractionEnumType =
  | (typeof MessageInteractionEnumType)[keyof typeof MessageInteractionEnumType]
  | (string & {});

export const messageInteractionEnumTypeSchema: EnumSchema<MessageInteractionEnumType> =
  s.enumOf<MessageInteractionEnumType>(MessageInteractionEnumType);
