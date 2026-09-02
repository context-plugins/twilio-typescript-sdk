import { s, type EnumSchema } from "../core/index.js";

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
