import { s, type Schema } from "../core/index.js";
import {
  conversationsV2ParticipantAddressSchema,
  type ConversationsV2ParticipantAddress,
} from "./conversations-v2-participant-address.js";
import { recipientSchema, type Recipient } from "./recipient.js";
import { contentSchema, type Content } from "./unions/content.js";

export type ConversationsV2Communication = {
  id: string;
  conversationId: string;
  accountId: string;
  author: ConversationsV2ParticipantAddress;
  content: Content;
  channelId?: string;
  resourceId?: string;
  recipients: Recipient[];
  createdAt?: Date;
  updatedAt?: Date;
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
