import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceConversationEnumStateSchema,
  type ServiceConversationEnumState,
} from "./service-conversation-enum-state.js";

export type ConversationsV1ServiceServiceConversation = {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this conversation.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the [Conversation
   * Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation
   * belongs to.
   */
  chatServiceSid?: string | null;
  /**
   * The unique ID of the [Messaging
   * Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation belongs
   * to.
   */
  messagingServiceSid?: string | null;
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /** The human-readable name of this conversation, limited to 256 characters. Optional. */
  friendlyName?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource. It can be used to address
   * the resource in place of the resource's `sid` in the URL.
   */
  uniqueName?: string | null;
  /**
   * An optional string metadata field you can use to store any data you wish. The string value must
   * contain structurally valid JSON if specified. **Note** that if the attributes are not set "{}"
   * will be returned.
   */
  attributes?: string | null;
  /**
   * Current state of this conversation. Can be either `initializing`, `active`, `inactive` or
   * `closed` and defaults to `active`
   */
  state?: ServiceConversationEnumState;
  /** The date that this resource was created. */
  dateCreated?: Date | null;
  /** The date that this resource was last updated. */
  dateUpdated?: Date | null;
  /** Timer date values representing state update for this conversation. */
  timers?: Record<string, unknown> | null;
  /** An absolute API resource URL for this conversation. */
  url?: string | null;
  /**
   * Contains absolute URLs to access the
   * [participants](https://www.twilio.com/docs/conversations/api/conversation-participant-resource),
   * [messages](https://www.twilio.com/docs/conversations/api/conversation-message-resource) and
   * [webhooks](https://www.twilio.com/docs/conversations/api/conversation-scoped-webhook-resource)
   * of this conversation.
   */
  links?: Record<string, unknown> | null;
  bindings?: Record<string, unknown> | null;
};

export const conversationsV1ServiceServiceConversationSchema: Schema<ConversationsV1ServiceServiceConversation> =
  s.object<ConversationsV1ServiceServiceConversation>({
    accountSid: s.optionalNullable(s.string()),
    chatServiceSid: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    uniqueName: s.optionalNullable(s.string()),
    attributes: s.optionalNullable(s.string()),
    state: s.optional(s.lazy(() => serviceConversationEnumStateSchema)),
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
