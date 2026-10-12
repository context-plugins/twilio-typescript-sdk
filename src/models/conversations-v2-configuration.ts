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

/** Configuration for Conversations. */
export type ConversationsV2Configuration = {
  /** Configuration ID. */
  id: string;
  /** A human-readable name for the configuration. Limited to 32 characters. */
  displayName: string;
  /**
   * Human-readable description for the Configuration. Allows spaces and special characters,
   * typically limited to a paragraph of text. This serves as a descriptive field rather than just a
   * name.
   */
  description: string;
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
  conversationGroupingType: ConversationGroupingType;
  /** Memory Store ID for Profile resolution. */
  memoryStoreId: string;
  /**
   * Channel-specific configuration settings by channel type. Keys should be valid channel types
   * (`VOICE`, `SMS`, `RCS`, `WHATSAPP`, `CHAT`).
   */
  channelSettings?: Record<string, ConversationsV2ChannelSetting>;
  /** List of default webhook configurations applied to Conversations under this Configuration. */
  statusCallbacks?: ConversationsV2StatusCallbackConfig[];
  /** A list of Conversational Intelligence configuration IDs. */
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
  /** Timestamp when this Configuration was created. */
  createdAt?: Date;
  /** Timestamp when this Configuration was last updated. */
  updatedAt?: Date;
  /** Version number used for optimistic locking. */
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
    memoryExtractionEnabled: s.defaulted(s.boolean(), false),
    conversationsV1Bridge: s.optional(s.lazy(() => conversationsV2ConversationsV1BridgeSchema)),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    version: s.optional(s.int()),
  });
