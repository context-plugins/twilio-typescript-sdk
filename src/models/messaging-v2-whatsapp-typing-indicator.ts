import { s, type Schema } from "../core/index.js";

export type MessagingV2WhatsappTypingIndicator = {
  channel: "whatsapp";
  messageId: string;
};

export const messagingV2WhatsappTypingIndicatorSchema: Schema<MessagingV2WhatsappTypingIndicator> =
  s.object<MessagingV2WhatsappTypingIndicator>({
    channel: s.literal("whatsapp"),
    messageId: s.string(),
  });
