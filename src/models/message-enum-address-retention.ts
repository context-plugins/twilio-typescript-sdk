import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageEnumAddressRetention = {
  Retain: "retain",
  Obfuscate: "obfuscate",
} as const;
export type MessageEnumAddressRetention =
  | (typeof MessageEnumAddressRetention)[keyof typeof MessageEnumAddressRetention]
  | (string & {});

export const messageEnumAddressRetentionSchema: EnumSchema<MessageEnumAddressRetention> =
  s.enumOf<MessageEnumAddressRetention>(MessageEnumAddressRetention);
