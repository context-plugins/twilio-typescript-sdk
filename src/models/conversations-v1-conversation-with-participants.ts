import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationWithParticipantsEnumStateSchema,
  type ConversationWithParticipantsEnumState,
} from "./conversation-with-participants-enum-state.js";

export type ConversationsV1ConversationWithParticipants = {
  accountSid?: string | null;
  chatServiceSid?: string | null;
  messagingServiceSid?: string | null;
  sid?: string | null;
  friendlyName?: string | null;
  uniqueName?: string | null;
  attributes?: string | null;
  state?: ConversationWithParticipantsEnumState;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  timers?: Record<string, unknown> | null;
  links?: Record<string, unknown> | null;
  bindings?: Record<string, unknown> | null;
  url?: string | null;
};

export const conversationsV1ConversationWithParticipantsSchema: Schema<ConversationsV1ConversationWithParticipants> =
  s.object<ConversationsV1ConversationWithParticipants>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    uniqueName: s.optionalNullable(s.string()),
    attributes: s.optionalNullable(s.string()),
    state: s.optional(s.lazy(() => conversationWithParticipantsEnumStateSchema)),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    timers: s.optionalNullable(s.record(s.string(), s.unknown())),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    bindings: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      messagingServiceSid: "messaging_service_sid",
      friendlyName: "friendly_name",
      uniqueName: "unique_name",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
