import { s, type EnumSchema } from "../core/index.js";

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
