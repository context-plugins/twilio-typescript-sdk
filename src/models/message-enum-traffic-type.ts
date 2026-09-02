import { s, type EnumSchema } from "../core/index.js";

export const MessageEnumTrafficType = {
  Free: "free",
} as const;
export type MessageEnumTrafficType =
  | (typeof MessageEnumTrafficType)[keyof typeof MessageEnumTrafficType]
  | (string & {});

export const messageEnumTrafficTypeSchema: EnumSchema<MessageEnumTrafficType> =
  s.enumOf<MessageEnumTrafficType>(MessageEnumTrafficType);
