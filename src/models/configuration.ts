import { s, type Schema } from "../core/index.js";
import {
  conversationGroupingTypeSchema,
  type ConversationGroupingType,
} from "./conversation-grouping-type.js";
import {
  conversationsV2ConversationsV1BridgeSchema,
  type ConversationsV2ConversationsV1Bridge,
} from "./conversations-v2-conversations-v1-bridge.js";
import {
  conversationsV2StatusCallbackConfigSchema,
  type ConversationsV2StatusCallbackConfig,
} from "./conversations-v2-status-callback-config.js";

export type Configuration = {
  displayName?: string;
  description?: string;
  conversationGroupingType?: ConversationGroupingType;
  memoryStoreId?: string;
  channelSettings?: Record<string, unknown>;
  statusCallbacks?: ConversationsV2StatusCallbackConfig[];
  intelligenceConfigurationIds?: string[];
  memoryExtractionEnabled?: boolean;
  conversationsV1Bridge?: ConversationsV2ConversationsV1Bridge;
};

export const configurationSchema: Schema<Configuration> = s.object<Configuration>({
  displayName: s.optional(s.string()),
  description: s.optional(s.string()),
  conversationGroupingType: s.optional(s.lazy(() => conversationGroupingTypeSchema)),
  memoryStoreId: s.optional(s.string()),
  channelSettings: s.optional(s.record(s.string(), s.unknown())),
  statusCallbacks: s.optional(s.array(s.lazy(() => conversationsV2StatusCallbackConfigSchema))),
  intelligenceConfigurationIds: s.optional(s.array(s.string())),
  memoryExtractionEnabled: s.optional(s.boolean()),
  conversationsV1Bridge: s.optional(s.lazy(() => conversationsV2ConversationsV1BridgeSchema)),
});
