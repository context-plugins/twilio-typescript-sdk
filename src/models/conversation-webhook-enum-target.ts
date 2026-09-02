import { s, type EnumSchema } from "../core/index.js";

export const ConversationWebhookEnumTarget = {
  Webhook: "webhook",
  Flex: "flex",
} as const;
export type ConversationWebhookEnumTarget =
  | (typeof ConversationWebhookEnumTarget)[keyof typeof ConversationWebhookEnumTarget]
  | (string & {});

export const conversationWebhookEnumTargetSchema: EnumSchema<ConversationWebhookEnumTarget> =
  s.enumOf<ConversationWebhookEnumTarget>(ConversationWebhookEnumTarget);
