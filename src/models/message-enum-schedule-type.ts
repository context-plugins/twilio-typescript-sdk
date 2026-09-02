import { s, type EnumSchema } from "../core/index.js";

export const MessageEnumScheduleType = {
  Fixed: "fixed",
} as const;
export type MessageEnumScheduleType =
  | (typeof MessageEnumScheduleType)[keyof typeof MessageEnumScheduleType]
  | (string & {});

export const messageEnumScheduleTypeSchema: EnumSchema<MessageEnumScheduleType> =
  s.enumOf<MessageEnumScheduleType>(MessageEnumScheduleType);
