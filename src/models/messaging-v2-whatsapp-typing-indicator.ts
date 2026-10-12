import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * - Payload for typing indicator request, Typing indicator request for WhatsApp channel. Requires a
 *   messageId from a recent inbound message.
 */
export type MessagingV2WhatsappTypingIndicator = {
  /** Shared channel identifier @default "whatsapp" */
  channel?: "whatsapp";
  /**
   * Message SID that identifies the conversation thread for the typing indicator. Must be a valid
   * Twilio Message SID (SM*) or Media SID (MM*) from an existing WhatsApp conversation.
   */
  messageId: string;
};

export const messagingV2WhatsappTypingIndicatorSchema: Schema<MessagingV2WhatsappTypingIndicator> =
  s.object<MessagingV2WhatsappTypingIndicator>({
    channel: s.defaulted(s.literal("whatsapp"), "whatsapp"),
    messageId: s.string(),
  });
