import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * For Messaging Services only: Include this parameter with a value of `fixed` in conjuction with
 * the `send_time` parameter in order to [schedule a
 * Message](https://www.twilio.com/docs/messaging/features/message-scheduling).
 */
export const MessageEnumScheduleType = {
  Fixed: "fixed",
} as const;
export type MessageEnumScheduleType =
  | (typeof MessageEnumScheduleType)[keyof typeof MessageEnumScheduleType]
  | (string & {});

export const messageEnumScheduleTypeSchema: EnumSchema<MessageEnumScheduleType> =
  s.enumOf<MessageEnumScheduleType>(MessageEnumScheduleType);
