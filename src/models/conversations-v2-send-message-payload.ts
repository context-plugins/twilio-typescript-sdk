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
  /**
   * Identifies a participant for an Action. Supports three resolution modes:
   * 1. participantId + channel: Resolves address from participant's registered addresses
   * 2. participantId only: Resolves when participant has exactly one address
   * 3. address + channel: Uses explicit address
   */
  from: ConversationsV2SendMessageParticipant;
  /** The recipients of this action. */
  to: ConversationsV2SendMessageParticipant[];
  /** Content for a SEND_MESSAGE action. */
  content: ConversationsV2SendMessageContent;
  /**
   * Channel-specific parameters forwarded as-is to the downstream sending service. Allows passing
   * backend-specific fields without requiring API changes.
   */
  channelSettings?: Record<string, unknown>;
};

export const conversationsV2SendMessagePayloadSchema: Schema<ConversationsV2SendMessagePayload> =
  s.object<ConversationsV2SendMessagePayload>({
    from: conversationsV2SendMessageParticipantSchema,
    to: s.array(s.lazy(() => conversationsV2SendMessageParticipantSchema)),
    content: conversationsV2SendMessageContentSchema,
    channelSettings: s.optional(s.record(s.string(), s.unknown())),
  });
