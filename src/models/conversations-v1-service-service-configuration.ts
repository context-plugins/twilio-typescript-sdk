import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsV1ServiceServiceConfiguration = {
  chatServiceSid?: string | null;
  defaultConversationCreatorRoleSid?: string | null;
  defaultConversationRoleSid?: string | null;
  defaultChatServiceRoleSid?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
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
