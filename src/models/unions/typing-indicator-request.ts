import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  appleTypingIndicatorRequestSchema,
  type AppleTypingIndicatorRequest,
} from "../apple-typing-indicator-request.js";
import {
  messagingV2WhatsappTypingIndicatorSchema,
  type MessagingV2WhatsappTypingIndicator,
} from "../messaging-v2-whatsapp-typing-indicator.js";

/**
 * Request body for sending a typing indicator. The schema varies by channel. Use the `channel`
 * field to determine which properties are required.
 */
export type TypingIndicatorRequest =
  | (MessagingV2WhatsappTypingIndicator & { channel: "WHATSAPP" })
  | (AppleTypingIndicatorRequest & { channel: "APPLE" });

export const typingIndicatorRequestSchema: Schema<TypingIndicatorRequest> =
  s.discriminatedUnion<TypingIndicatorRequest>("channel", {
    WHATSAPP: messagingV2WhatsappTypingIndicatorSchema,
    APPLE: appleTypingIndicatorRequestSchema,
  });
