import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleEnumRoleTypeSchema, type RoleEnumRoleType } from "./role-enum-role-type.js";

export type ConversationsV1Role = {
  sid?: string | null;
  accountSid?: string | null;
  chatServiceSid?: string | null;
  friendlyName?: string | null;
  type?: RoleEnumRoleType;
  permissions?: string[] | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const conversationsV1RoleSchema: Schema<ConversationsV1Role> = s.object<ConversationsV1Role>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  chatServiceSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => roleEnumRoleTypeSchema)),
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
