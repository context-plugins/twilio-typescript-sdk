import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of Conversation grouping strategy:
 * - `GROUP_BY_PROFILE`: Groups Communications by resolved Profile from the Memory Store. A Profile
 *   is looked up or created for `CUSTOMER` Participant types. All Communications from the same
 *   Profile are in the same Conversation, regardless of address or channel.
 * - `GROUP_BY_PARTICIPANT_ADDRESSES`: Groups Communications by Participant addresses across all
 *   channels. A customer using +18005550100 will be in the same Conversation whether they contact
 *   by SMS, WhatsApp, or RCS.
 * - `GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE`: Groups Communications by both Participant
 *   addresses AND channel. A customer using +18005550100 by SMS will be in a different Conversation
 *   than the same customer by Voice.
 */
export const ConversationGroupingType = {
  GroupByProfile: "GROUP_BY_PROFILE",
  GroupByParticipantAddresses: "GROUP_BY_PARTICIPANT_ADDRESSES",
  GroupByParticipantAddressesAndChannelType: "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE",
} as const;
export type ConversationGroupingType =
  | (typeof ConversationGroupingType)[keyof typeof ConversationGroupingType]
  | (string & {});

export const conversationGroupingTypeSchema: EnumSchema<ConversationGroupingType> =
  s.enumOf<ConversationGroupingType>(ConversationGroupingType);
