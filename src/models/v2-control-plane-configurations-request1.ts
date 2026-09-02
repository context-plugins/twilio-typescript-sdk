import { s, type Schema } from "../core/index.js";
import { channelSettings1Schema, type ChannelSettings1 } from "./channel-settings1.js";
import {
  conversationGroupingType3Schema,
  type ConversationGroupingType3,
} from "./conversation-grouping-type3.js";
import { statusCallback1Schema, type StatusCallback1 } from "./status-callback1.js";

export type V2ControlPlaneConfigurationsRequest1 = {
  displayName?: string;
  description: string;
  conversationGroupingType: ConversationGroupingType3;
  memoryStoreId: string;
  channelSettings: Record<string, ChannelSettings1>;
  statusCallbacks?: StatusCallback1[];
  intelligenceConfigurationIds?: string[];
  memoryExtractionEnabled?: boolean;
};

export const v2ControlPlaneConfigurationsRequest1Schema: Schema<V2ControlPlaneConfigurationsRequest1> =
  s.object<V2ControlPlaneConfigurationsRequest1>({
    displayName: s.optional(s.string()),
    description: s.string(),
    conversationGroupingType: conversationGroupingType3Schema,
    memoryStoreId: s.string(),
    channelSettings: s.record(
      s.string(),
      s.lazy(() => channelSettings1Schema),
    ),
    statusCallbacks: s.optional(s.array(s.lazy(() => statusCallback1Schema))),
    intelligenceConfigurationIds: s.optional(s.array(s.string())),
    memoryExtractionEnabled: s.optional(s.boolean()),
  });
