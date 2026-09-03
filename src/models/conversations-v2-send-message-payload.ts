import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV2SendMessageContentSchema,
  type ConversationsV2SendMessageContent,
} from "./conversations-v2-send-message-content.js";
import {
  conversationsV2SendMessageParticipantSchema,
  type ConversationsV2SendMessageParticipant,
} from "./conversations-v2-send-message-participant.js";

export type ConversationsV2SendMessagePayload = {
  from: ConversationsV2SendMessageParticipant;
  to: ConversationsV2SendMessageParticipant[];
  content: ConversationsV2SendMessageContent;
  channelSettings?: Record<string, unknown>;
};

export const conversationsV2SendMessagePayloadSchema: Schema<ConversationsV2SendMessagePayload> =
  s.object<ConversationsV2SendMessagePayload>({
    from: conversationsV2SendMessageParticipantSchema,
    to: s.array(s.lazy(() => conversationsV2SendMessageParticipantSchema)),
    content: conversationsV2SendMessageContentSchema,
    channelSettings: s.optional(s.record(s.string(), s.unknown())),
  });
