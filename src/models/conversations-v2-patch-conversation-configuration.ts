import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV2StatusCallbackConfigSchema,
  type ConversationsV2StatusCallbackConfig,
} from "./conversations-v2-status-callback-config.js";

export type ConversationsV2PatchConversationConfiguration = {
  statusCallbacks?: ConversationsV2StatusCallbackConfig[];
};

export const conversationsV2PatchConversationConfigurationSchema: Schema<ConversationsV2PatchConversationConfiguration> =
  s.object<ConversationsV2PatchConversationConfiguration>({
    statusCallbacks: s.optional(s.array(s.lazy(() => conversationsV2StatusCallbackConfigSchema))),
  });
