import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV2ParticipantAddressSchema,
  type ConversationsV2ParticipantAddress,
} from "./conversations-v2-participant-address.js";
import { recipientSchema, type Recipient } from "./recipient.js";
import { contentSchema, type Content } from "./unions/content.js";

export type ConversationsV2Communication = {
  /** Communication ID. */
  id: string;
  /** Conversation ID. */
  conversationId: string;
  /** Account ID. */
  accountId: string;
  author: ConversationsV2ParticipantAddress;
  /** The content of the Communication using type field for discrimination. */
  content: Content;
  /** Channel-specific reference ID. */
  channelId?: string;
  /**
   * External resource identifier for this Communication (e.g. MessageSid for SMS/RCS/WhatsApp,
   * TranscriptionSid + MessageIndex for Voice). When set, used for Communication
   * deduplication/uniqueness within a Conversation.
   */
  resourceId?: string;
  /** Communication recipients. */
  recipients: Recipient[];
  /** Timestamp when this Communication was created. */
  createdAt?: Date;
  /** Timestamp when this Communication was last updated. */
  updatedAt?: Date;
  /** ISO 8601 timestamp when the communication occurred. */
  occurredAt?: Date;
};

export const conversationsV2CommunicationSchema: Schema<ConversationsV2Communication> =
  s.object<ConversationsV2Communication>({
    id: s.string(),
    conversationId: s.string(),
    accountId: s.string(),
    author: conversationsV2ParticipantAddressSchema,
    content: contentSchema,
    channelId: s.optional(s.string()),
    resourceId: s.optional(s.string()),
    recipients: s.array(s.lazy(() => recipientSchema)),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    occurredAt: s.optional(s.dateTime()),
  });
