import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageEnumUpdateStatus = {
  Canceled: "canceled",
} as const;
export type MessageEnumUpdateStatus =
  | (typeof MessageEnumUpdateStatus)[keyof typeof MessageEnumUpdateStatus]
  | (string & {});

export const messageEnumUpdateStatusSchema: EnumSchema<MessageEnumUpdateStatus> =
  s.enumOf<MessageEnumUpdateStatus>(MessageEnumUpdateStatus);
