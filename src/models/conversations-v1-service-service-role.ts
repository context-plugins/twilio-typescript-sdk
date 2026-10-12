import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceRoleEnumRoleTypeSchema,
  type ServiceRoleEnumRoleType,
} from "./service-role-enum-role-type.js";

export type ConversationsV1ServiceServiceRole = {
  /** The unique string that we created to identify the Role resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Role
   * resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Role resource is
   * associated with.
   */
  chatServiceSid?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /**
   * The type of role. Can be: `conversation` for
   * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) roles or
   * `service` for [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) roles.
   */
  type?: ServiceRoleEnumRoleType;
  /** An array of the permissions the role has been granted. */
  permissions?: string[] | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** An absolute API resource URL for this user role. */
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
