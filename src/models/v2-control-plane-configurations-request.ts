import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelSettingsSchema, type ChannelSettings } from "./channel-settings.js";
import {
  conversationGroupingType3Schema,
  type ConversationGroupingType3,
} from "./conversation-grouping-type3.js";
import { statusCallbackSchema, type StatusCallback } from "./status-callback.js";

export type V2ControlPlaneConfigurationsRequest = {
  /** A human-readable name for the configuration. Limited to 32 characters. */
  displayName: string;
  /** Human-readable description for the configuration. */
  description: string;
  /** The strategy Conversation Orchestrator uses to assign communications to conversations. */
  conversationGroupingType: ConversationGroupingType3;
  /** The memory store ID that Conversation Orchestrator uses for profile resolution. */
  memoryStoreId: string;
  channelSettings?: Record<string, ChannelSettings>;
  /** A list of webhook configurations. */
  statusCallbacks?: StatusCallback[];
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
    memoryExtractionEnabled: s.defaulted(s.boolean(), false),
  });
