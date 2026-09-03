import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV2SendContent = {
  text?: string;
  contentId?: string;
  variables?: Record<string, string>;
  mediaUrls?: string[];
};

export const conversationsV2SendContentSchema: Schema<ConversationsV2SendContent> =
  s.object<ConversationsV2SendContent>({
    text: s.optional(s.string()),
    contentId: s.optional(s.string()),
    variables: s.optional(s.record(s.string(), s.string())),
    mediaUrls: s.optional(s.array(s.string())),
  });
