import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversationEnumStateSchema, type ConversationEnumState } from "./conversation-enum-state.js";

export type ConversationsV1Conversation = {
  accountSid?: string | null;
  chatServiceSid?: string | null;
  messagingServiceSid?: string | null;
  sid?: string | null;
  friendlyName?: string | null;
  uniqueName?: string | null;
  attributes?: string | null;
  state?: ConversationEnumState;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  timers?: Record<string, unknown> | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
  bindings?: Record<string, unknown> | null;
};

export const conversationsV1ConversationSchema: Schema<ConversationsV1Conversation> =
  s.object<ConversationsV1Conversation>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    uniqueName: s.optionalNullable(s.string()),
    attributes: s.optionalNullable(s.string()),
    state: s.optional(s.lazy(() => conversationEnumStateSchema)),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    timers: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    bindings: s.optionalNullable(s.record(s.string(), s.unknown())),
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
