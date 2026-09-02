import { s, type EnumSchema } from "../core/index.js";

export const MessageEnumUpdateStatus = {
  Canceled: "canceled",
} as const;
export type MessageEnumUpdateStatus =
  | (typeof MessageEnumUpdateStatus)[keyof typeof MessageEnumUpdateStatus]
  | (string & {});

export const messageEnumUpdateStatusSchema: EnumSchema<MessageEnumUpdateStatus> =
  s.enumOf<MessageEnumUpdateStatus>(MessageEnumUpdateStatus);
