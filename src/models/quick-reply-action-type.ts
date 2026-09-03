import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const QuickReplyActionType = {
  QuickReply: "QUICK_REPLY",
} as const;
export type QuickReplyActionType =
  | (typeof QuickReplyActionType)[keyof typeof QuickReplyActionType]
  | (string & {});

export const quickReplyActionTypeSchema: EnumSchema<QuickReplyActionType> =
  s.enumOf<QuickReplyActionType>(QuickReplyActionType);
