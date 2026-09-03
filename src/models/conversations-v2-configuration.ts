import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationGroupingTypeSchema,
  type ConversationGroupingType,
} from "./conversation-grouping-type.js";
import {
  conversationsV2ChannelSettingSchema,
  type ConversationsV2ChannelSetting,
} from "./conversations-v2-channel-setting.js";
import {
  conversationsV2ConversationsV1BridgeSchema,
  type ConversationsV2ConversationsV1Bridge,
} from "./conversations-v2-conversations-v1-bridge.js";
import {
  conversationsV2StatusCallbackConfigSchema,
  type ConversationsV2StatusCallbackConfig,
} from "./conversations-v2-status-callback-config.js";

export type ConversationsV2Configuration = {
  id: string;
  displayName: string;
  description: string;
  conversationGroupingType: ConversationGroupingType;
  memoryStoreId: string;
  channelSettings?: Record<string, ConversationsV2ChannelSetting>;
  statusCallbacks?: ConversationsV2StatusCallbackConfig[];
  intelligenceConfigurationIds?: string[];
  memoryExtractionEnabled?: boolean;
  conversationsV1Bridge?: ConversationsV2ConversationsV1Bridge;
  createdAt?: Date;
  updatedAt?: Date;
  version?: number;
};

export const conversationsV2ConfigurationSchema: Schema<ConversationsV2Configuration> =
  s.object<ConversationsV2Configuration>({
    id: s.string(),
    displayName: s.string(),
    description: s.string(),
    conversationGroupingType: conversationGroupingTypeSchema,
    memoryStoreId: s.string(),
    channelSettings: s.optional(
      s.record(
        s.string(),
        s.lazy(() => conversationsV2ChannelSettingSchema),
      ),
    ),
    statusCallbacks: s.optional(s.array(s.lazy(() => conversationsV2StatusCallbackConfigSchema))),
    intelligenceConfigurationIds: s.optional(s.array(s.string())),
    memoryExtractionEnabled: s.optional(s.boolean()),
    conversationsV1Bridge: s.optional(s.lazy(() => conversationsV2ConversationsV1BridgeSchema)),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    version: s.optional(s.number()),
  });
