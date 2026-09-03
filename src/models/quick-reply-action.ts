import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quickReplyActionTypeSchema, type QuickReplyActionType } from "./quick-reply-action-type.js";

export type QuickReplyAction = {
  type?: QuickReplyActionType;
  title: string;
  id?: string;
};

export const quickReplyActionSchema: Schema<QuickReplyAction> = s.object<QuickReplyAction>({
  type: s.optional(s.lazy(() => quickReplyActionTypeSchema)),
  title: s.string(),
  id: s.optional(s.string()),
});
