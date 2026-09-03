import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceParticipantConversationEnumStateSchema,
  type ServiceParticipantConversationEnumState,
} from "./service-participant-conversation-enum-state.js";

export type ConversationsV1ServiceServiceParticipantConversation = {
  accountSid?: string | null;
  chatServiceSid?: string | null;
  participantSid?: string | null;
  participantUserSid?: string | null;
  participantIdentity?: string | null;
  participantMessagingBinding?: Record<string, unknown> | null;
  conversationSid?: string | null;
  conversationUniqueName?: string | null;
  conversationFriendlyName?: string | null;
  conversationAttributes?: string | null;
  conversationDateCreated?: Date | null;
  conversationDateUpdated?: Date | null;
  conversationCreatedBy?: string | null;
  conversationState?: ServiceParticipantConversationEnumState;
  conversationTimers?: Record<string, unknown> | null;
  links?: Record<string, unknown> | null;
};

export const conversationsV1ServiceServiceParticipantConversationSchema: Schema<ConversationsV1ServiceServiceParticipantConversation> =
  s.object<ConversationsV1ServiceServiceParticipantConversation>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    participantSid: s.optionalNullable(s.string()),
    participantUserSid: s.optionalNullable(s.string()),
    participantIdentity: s.optionalNullable(s.string()),
    participantMessagingBinding: s.optionalNullable(s.record(s.string(), s.unknown())),
    conversationSid: s.optionalNullable(s.string()),
    conversationUniqueName: s.optionalNullable(s.string()),
    conversationFriendlyName: s.optionalNullable(s.string()),
    conversationAttributes: s.optionalNullable(s.string()),
    conversationDateCreated: s.optionalNullable(s.dateTime()),
    conversationDateUpdated: s.optionalNullable(s.dateTime()),
    conversationCreatedBy: s.optionalNullable(s.string()),
    conversationState: s.optional(s.lazy(() => serviceParticipantConversationEnumStateSchema)),
    conversationTimers: s.optionalNullable(s.record(s.string(), s.unknown())),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      participantSid: "participant_sid",
      participantUserSid: "participant_user_sid",
      participantIdentity: "participant_identity",
      participantMessagingBinding: "participant_messaging_binding",
      conversationSid: "conversation_sid",
      conversationUniqueName: "conversation_unique_name",
      conversationFriendlyName: "conversation_friendly_name",
      conversationAttributes: "conversation_attributes",
      conversationDateCreated: "conversation_date_created",
      conversationDateUpdated: "conversation_date_updated",
      conversationCreatedBy: "conversation_created_by",
      conversationState: "conversation_state",
      conversationTimers: "conversation_timers",
    },
  });
