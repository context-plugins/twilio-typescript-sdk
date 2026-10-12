import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1ServiceServiceUser = {
  /** The unique string that we created to identify the User resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the User
   * resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) the User resource is
   * associated with.
   */
  chatServiceSid?: string | null;
  /**
   * The SID of a service-level [Role](https://www.twilio.com/docs/conversations/api/role-resource)
   * assigned to the user.
   */
  roleSid?: string | null;
  /**
   * The application-defined string that uniquely identifies the resource's User within the
   * [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource). This
   * value is often a username or an email address, and is case-sensitive.
   */
  identity?: string | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /**
   * The JSON Object string that stores application-specific data. If attributes have not been set,
   * `{}` is returned.
   */
  attributes?: string | null;
  /**
   * Whether the User is actively connected to this Conversations Service and online. This value is
   * only returned by Fetch actions that return a single resource and `null` is always returned by a
   * Read action. This value is `null` if the Service's `reachability_enabled` is `false`, if the
   * User has never been online for this Conversations Service, even if the Service's
   * `reachability_enabled` is `true`.
   */
  isOnline?: boolean | null;
  /**
   * Whether the User has a potentially valid Push Notification registration (APN or GCM) for this
   * Conversations Service. If at least one registration exists, `true`; otherwise `false`. This
   * value is only returned by Fetch actions that return a single resource and `null` is always
   * returned by a Read action. This value is `null` if the Service's `reachability_enabled` is
   * `false`, and if the User has never had a notification registration, even if the Service's
   * `reachability_enabled` is `true`.
   */
  isNotifiable?: boolean | null;
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
  /** An absolute API resource URL for this user. */
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
