import { s, type Schema } from "../core/index.js";

export type ConversationsV1ServiceServiceUser = {
  sid?: string | null;
  accountSid?: string | null;
  chatServiceSid?: string | null;
  roleSid?: string | null;
  identity?: string | null;
  friendlyName?: string | null;
  attributes?: string | null;
  isOnline?: boolean | null;
  isNotifiable?: boolean | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const conversationsV1ServiceServiceUserSchema: Schema<ConversationsV1ServiceServiceUser> =
  s.object<ConversationsV1ServiceServiceUser>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    roleSid: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    attributes: s.optionalNullable(s.string()),
    isOnline: s.optionalNullable(s.boolean()),
    isNotifiable: s.optionalNullable(s.boolean()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      roleSid: "role_sid",
      friendlyName: "friendly_name",
      isOnline: "is_online",
      isNotifiable: "is_notifiable",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
