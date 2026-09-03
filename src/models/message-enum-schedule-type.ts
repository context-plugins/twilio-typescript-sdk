import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageEnumScheduleType = {
  Fixed: "fixed",
} as const;
export type MessageEnumScheduleType =
  | (typeof MessageEnumScheduleType)[keyof typeof MessageEnumScheduleType]
  | (string & {});

export const messageEnumScheduleTypeSchema: EnumSchema<MessageEnumScheduleType> =
  s.enumOf<MessageEnumScheduleType>(MessageEnumScheduleType);
