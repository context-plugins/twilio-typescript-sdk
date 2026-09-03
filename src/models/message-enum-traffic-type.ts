import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageEnumTrafficType = {
  Free: "free",
} as const;
export type MessageEnumTrafficType =
  | (typeof MessageEnumTrafficType)[keyof typeof MessageEnumTrafficType]
  | (string & {});

export const messageEnumTrafficTypeSchema: EnumSchema<MessageEnumTrafficType> =
  s.enumOf<MessageEnumTrafficType>(MessageEnumTrafficType);
