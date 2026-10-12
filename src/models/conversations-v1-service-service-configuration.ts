import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1ServiceServiceConfiguration = {
  /** The unique string that we created to identify the Service configuration resource. */
  chatServiceSid?: string | null;
  /**
   * The conversation-level role assigned to a conversation creator when they join a new
   * conversation. See [Conversation
   * Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
   */
  defaultConversationCreatorRoleSid?: string | null;
  /**
   * The conversation-level role assigned to users when they are added to a conversation. See
   * [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info
   * about roles.
   */
  defaultConversationRoleSid?: string | null;
  /**
   * The service-level role assigned to users when they are added to the service. See [Conversation
   * Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
   */
  defaultChatServiceRoleSid?: string | null;
  /** An absolute API resource URL for this service configuration. */
  url?: string | null;
  /**
   * Contains an absolute API resource URL to access the push notifications configuration of this
   * service.
   */
  links?: Record<string, unknown> | null;
  /**
   * Whether the [Reachability Indicator](https://www.twilio.com/docs/conversations/reachability) is
   * enabled for this Conversations Service. The default is `false`.
   */
  reachabilityEnabled?: boolean | null;
};

export const conversationsV1ServiceServiceConfigurationSchema: Schema<ConversationsV1ServiceServiceConfiguration> =
  s.object<ConversationsV1ServiceServiceConfiguration>({
    chatServiceSid: s.optionalNullable(s.string()),
    defaultConversationCreatorRoleSid: s.optionalNullable(s.string()),
    defaultConversationRoleSid: s.optionalNullable(s.string()),
    defaultChatServiceRoleSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    reachabilityEnabled: s.optionalNullable(s.boolean()),
    _keysMap: {
      chatServiceSid: "chat_service_sid",
      defaultConversationCreatorRoleSid: "default_conversation_creator_role_sid",
      defaultConversationRoleSid: "default_conversation_role_sid",
      defaultChatServiceRoleSid: "default_chat_service_role_sid",
      reachabilityEnabled: "reachability_enabled",
    },
  });
