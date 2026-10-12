import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Determines if the message content can be stored or redacted based on privacy settings */
export const MessageEnumContentRetention = {
  Retain: "retain",
  Discard: "discard",
} as const;
export type MessageEnumContentRetention =
  | (typeof MessageEnumContentRetention)[keyof typeof MessageEnumContentRetention]
  | (string & {});

export const messageEnumContentRetentionSchema: EnumSchema<MessageEnumContentRetention> =
  s.enumOf<MessageEnumContentRetention>(MessageEnumContentRetention);
