import { s, type EnumSchema } from "../core/index.js";

export const MessageEnumAddressRetention = {
  Retain: "retain",
  Obfuscate: "obfuscate",
} as const;
export type MessageEnumAddressRetention =
  | (typeof MessageEnumAddressRetention)[keyof typeof MessageEnumAddressRetention]
  | (string & {});

export const messageEnumAddressRetentionSchema: EnumSchema<MessageEnumAddressRetention> =
  s.enumOf<MessageEnumAddressRetention>(MessageEnumAddressRetention);
