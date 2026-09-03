import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelSettingsSchema, type ChannelSettings } from "./channel-settings.js";
import {
  conversationGroupingType3Schema,
  type ConversationGroupingType3,
} from "./conversation-grouping-type3.js";
import { statusCallbackSchema, type StatusCallback } from "./status-callback.js";

export type V2ControlPlaneConfigurationsRequest = {
  displayName: string;
  description: string;
  conversationGroupingType: ConversationGroupingType3;
  memoryStoreId: string;
  channelSettings?: Record<string, ChannelSettings>;
  statusCallbacks?: StatusCallback[];
  intelligenceConfigurationIds?: string[];
  memoryExtractionEnabled?: boolean;
};

export const v2ControlPlaneConfigurationsRequestSchema: Schema<V2ControlPlaneConfigurationsRequest> =
  s.object<V2ControlPlaneConfigurationsRequest>({
    displayName: s.string(),
    description: s.string(),
    conversationGroupingType: conversationGroupingType3Schema,
    memoryStoreId: s.string(),
    channelSettings: s.optional(
      s.record(
        s.string(),
        s.lazy(() => channelSettingsSchema),
      ),
    ),
    statusCallbacks: s.optional(s.array(s.lazy(() => statusCallbackSchema))),
    intelligenceConfigurationIds: s.optional(s.array(s.string())),
    memoryExtractionEnabled: s.optional(s.boolean()),
  });
