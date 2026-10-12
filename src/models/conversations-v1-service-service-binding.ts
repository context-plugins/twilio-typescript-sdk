import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceBindingEnumBindingTypeSchema,
  type ServiceBindingEnumBindingType,
} from "./service-binding-enum-binding-type.js";

export type ConversationsV1ServiceServiceBinding = {
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this binding.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Binding resource
   * is associated with.
   */
  chatServiceSid?: string | null;
  /**
   * The SID of the [Credential](https://www.twilio.com/docs/conversations/api/credential-resource)
   * for the binding. See [push notification
   * configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
   */
  credentialSid?: string | null;
  /** The date that this resource was created. */
  dateCreated?: Date | null;
  /** The date that this resource was last updated. */
  dateUpdated?: Date | null;
  /**
   * The unique endpoint identifier for the Binding. The format of this value depends on the
   * `binding_type`.
   */
  endpoint?: string | null;
  /**
   * The application-defined string that uniquely identifies the [Conversation
   * User](https://www.twilio.com/docs/conversations/api/user-resource) within the [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource). See [access
   * tokens](https://www.twilio.com/docs/conversations/create-tokens) for more info.
   */
  identity?: string | null;
  /**
   * The push technology to use for the Binding. Can be: `apn`, `gcm`, `fcm`, or `twilsock`. See
   * [push notification
   * configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
   */
  bindingType?: ServiceBindingEnumBindingType;
  /**
   * The [Conversation message
   * types](https://www.twilio.com/docs/chat/push-notification-configuration#push-types) the binding
   * is subscribed to.
   */
  messageTypes?: string[] | null;
  /** An absolute API resource URL for this binding. */
  url?: string | null;
};

export const conversationsV1ServiceServiceBindingSchema: Schema<ConversationsV1ServiceServiceBinding> =
  s.object<ConversationsV1ServiceServiceBinding>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    credentialSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    endpoint: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    bindingType: s.optional(s.lazy(() => serviceBindingEnumBindingTypeSchema)),
    messageTypes: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      chatServiceSid: "chat_service_sid",
      credentialSid: "credential_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      bindingType: "binding_type",
      messageTypes: "message_types",
    },
  });
