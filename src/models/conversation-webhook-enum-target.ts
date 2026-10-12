import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The routing target of the webhook. Can be ordinary or route internally to Flex */
export const ConversationWebhookEnumTarget = {
  Webhook: "webhook",
  Flex: "flex",
} as const;
export type ConversationWebhookEnumTarget =
  | (typeof ConversationWebhookEnumTarget)[keyof typeof ConversationWebhookEnumTarget]
  | (string & {});

export const conversationWebhookEnumTargetSchema: EnumSchema<ConversationWebhookEnumTarget> =
  s.enumOf<ConversationWebhookEnumTarget>(ConversationWebhookEnumTarget);
