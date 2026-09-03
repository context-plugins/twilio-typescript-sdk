import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceRoleEnumRoleTypeSchema,
  type ServiceRoleEnumRoleType,
} from "./service-role-enum-role-type.js";

export type ConversationsV1ServiceServiceRole = {
  sid?: string | null;
  accountSid?: string | null;
  chatServiceSid?: string | null;
  friendlyName?: string | null;
  type?: ServiceRoleEnumRoleType;
  permissions?: string[] | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const conversationsV1ServiceServiceRoleSchema: Schema<ConversationsV1ServiceServiceRole> =
  s.object<ConversationsV1ServiceServiceRole>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => serviceRoleEnumRoleTypeSchema)),
    permissions: s.optionalNullable(s.array(s.string())),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      friendlyName: "friendly_name",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
