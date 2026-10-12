import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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

/** Full configuration settings for this Conversation. */
export type Configuration = {
  /** A human-readable name for the configuration. Limited to 32 characters. */
  displayName?: string;
  /** Human-readable description for the Configuration. */
  description?: string;
  /**
   * Type of Conversation grouping strategy:
   * - `GROUP_BY_PROFILE`: Groups Communications by resolved Profile from the Memory Store. A
   *   Profile is looked up or created for `CUSTOMER` Participant types. All Communications from the
   *   same Profile are in the same Conversation, regardless of address or channel.
   * - `GROUP_BY_PARTICIPANT_ADDRESSES`: Groups Communications by Participant addresses across all
   *   channels. A customer using +18005550100 will be in the same Conversation whether they contact
   *   by SMS, WhatsApp, or RCS.
   * - `GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE`: Groups Communications by both Participant
   *   addresses AND channel. A customer using +18005550100 by SMS will be in a different
   *   Conversation than the same customer by Voice.
   */
  conversationGroupingType?: ConversationGroupingType;
  /** Memory Store ID for Profile resolution. */
  memoryStoreId?: string;
  /**
   * Channel-specific parameters forwarded as-is to the downstream sending service. Allows passing
   * backend-specific fields without requiring API changes.
   */
  channelSettings?: Record<string, unknown>;
  /** List of default webhook configurations applied to Conversations under this Configuration. */
  statusCallbacks?: ConversationsV2StatusCallbackConfig[];
  /** List of Intelligence Configuration IDs configured for this Configuration. */
  intelligenceConfigurationIds?: string[];
  /**
   * Whether memory extraction is enabled for conversations under this configuration. Defaults to
   * false.
   *
   * @default false
   */
  memoryExtractionEnabled?: boolean;
  /**
   * Configuration for Conversations V1 bridge. When set, messaging channels route through
   * Conversations V1. Use this to integrate with existing Conversations V1 applications.
   */
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
  memoryExtractionEnabled: s.defaulted(s.boolean(), false),
  conversationsV1Bridge: s.optional(s.lazy(() => conversationsV2ConversationsV1BridgeSchema)),
});
