import { s, type Schema } from "../../core/index.js";
import {
  appleTypingIndicatorRequestSchema,
  type AppleTypingIndicatorRequest,
} from "../apple-typing-indicator-request.js";
import {
  messagingV2WhatsappTypingIndicatorSchema,
  type MessagingV2WhatsappTypingIndicator,
} from "../messaging-v2-whatsapp-typing-indicator.js";

export type TypingIndicatorRequest =
  | (MessagingV2WhatsappTypingIndicator & { channel: "WHATSAPP" })
  | (AppleTypingIndicatorRequest & { channel: "APPLE" });

export const typingIndicatorRequestSchema: Schema<TypingIndicatorRequest> =
  s.discriminatedUnion<TypingIndicatorRequest>("channel", {
    WHATSAPP: messagingV2WhatsappTypingIndicatorSchema,
    APPLE: appleTypingIndicatorRequestSchema,
  });
