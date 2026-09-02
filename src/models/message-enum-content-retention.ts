import { s, type EnumSchema } from "../core/index.js";

export const MessageEnumContentRetention = {
  Retain: "retain",
  Discard: "discard",
} as const;
export type MessageEnumContentRetention =
  | (typeof MessageEnumContentRetention)[keyof typeof MessageEnumContentRetention]
  | (string & {});

export const messageEnumContentRetentionSchema: EnumSchema<MessageEnumContentRetention> =
  s.enumOf<MessageEnumContentRetention>(MessageEnumContentRetention);
