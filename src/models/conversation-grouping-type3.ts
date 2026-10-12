import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The strategy Conversation Orchestrator uses to assign communications to conversations. */
export const ConversationGroupingType3 = {
  GroupByProfile: "GROUP_BY_PROFILE",
  GroupByParticipantAddresses: "GROUP_BY_PARTICIPANT_ADDRESSES",
  GroupByParticipantAddressesAndChannelType: "GROUP_BY_PARTICIPANT_ADDRESSES_AND_CHANNEL_TYPE",
} as const;
export type ConversationGroupingType3 =
  | (typeof ConversationGroupingType3)[keyof typeof ConversationGroupingType3]
  | (string & {});

export const conversationGroupingType3Schema: EnumSchema<ConversationGroupingType3> =
  s.enumOf<ConversationGroupingType3>(ConversationGroupingType3);
