import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Content for a send action. Supports text, templates, and media. */
export type ConversationsV2SendContent = {
  /** Plain text message body. */
  text?: string;
  /**
   * Content template ID (HX... format). When provided, the template is rendered with the variables
   * map and sent to the recipient.
   */
  contentId?: string;
  /**
   * Variables to substitute into the content template. Keys must match placeholders defined in the
   * template.
   */
  variables?: Record<string, string>;
  /** URLs of media attachments to include with the message. */
  mediaUrls?: string[];
};

export const conversationsV2SendContentSchema: Schema<ConversationsV2SendContent> =
  s.object<ConversationsV2SendContent>({
    text: s.optional(s.string()),
    contentId: s.optional(s.string()),
    variables: s.optional(s.record(s.string(), s.string())),
    mediaUrls: s.optional(s.array(s.string())),
  });
