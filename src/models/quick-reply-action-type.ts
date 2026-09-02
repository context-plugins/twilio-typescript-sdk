import { s, type EnumSchema } from "../core/index.js";

export const QuickReplyActionType = {
  QuickReply: "QUICK_REPLY",
} as const;
export type QuickReplyActionType =
  | (typeof QuickReplyActionType)[keyof typeof QuickReplyActionType]
  | (string & {});

export const quickReplyActionTypeSchema: EnumSchema<QuickReplyActionType> =
  s.enumOf<QuickReplyActionType>(QuickReplyActionType);
