import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelSettings1Schema, type ChannelSettings1 } from "./channel-settings1.js";
import {
  conversationGroupingType3Schema,
  type ConversationGroupingType3,
} from "./conversation-grouping-type3.js";
import { statusCallback1Schema, type StatusCallback1 } from "./status-callback1.js";

export type V2ControlPlaneConfigurationsRequest1 = {
  /** A human-readable name for the configuration. Limited to 32 characters. */
  displayName?: string;
  /** Human-readable description for the configuration. */
  description: string;
  /** The strategy Conversation Orchestrator uses to assign communications to conversations. */
  conversationGroupingType: ConversationGroupingType3;
  /** The Memory Store ID for profile resolution. */
  memoryStoreId: string;
  channelSettings: Record<string, ChannelSettings1>;
  statusCallbacks?: StatusCallback1[];
  /** A list of Conversational Intelligence configuration IDs. */
  intelligenceConfigurationIds?: string[];
  /**
   * Whether memory extraction is enabled for conversations under this configuration. Defaults to
   * false.
   *
   * @default false
   */
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
    memoryExtractionEnabled: s.defaulted(s.boolean(), false),
  });
