import { s, type Schema } from "../core/index.js";

export type ConversationsV2SendMessageContent = {
  text?: string;
  contentId?: string;
  variables?: Record<string, string>;
  mediaUrls?: string[];
};

export const conversationsV2SendMessageContentSchema: Schema<ConversationsV2SendMessageContent> =
  s.object<ConversationsV2SendMessageContent>({
    text: s.optional(s.string()),
    contentId: s.optional(s.string()),
    variables: s.optional(s.record(s.string(), s.string())),
    mediaUrls: s.optional(s.array(s.string())),
  });
