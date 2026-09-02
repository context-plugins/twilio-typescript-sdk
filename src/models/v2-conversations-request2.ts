import { s, type Schema } from "../core/index.js";
import {
  conversationsV2PatchConversationConfigurationSchema,
  type ConversationsV2PatchConversationConfiguration,
} from "./conversations-v2-patch-conversation-configuration.js";
import { status7Schema, type Status7 } from "./status7.js";

export type V2ConversationsRequest2 = {
  name?: string;
  status?: Status7;
  configuration?: ConversationsV2PatchConversationConfiguration;
};

export const v2ConversationsRequest2Schema: Schema<V2ConversationsRequest2> =
  s.object<V2ConversationsRequest2>({
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => status7Schema)),
    configuration: s.optional(s.lazy(() => conversationsV2PatchConversationConfigurationSchema)),
  });
