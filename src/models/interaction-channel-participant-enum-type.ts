import { s, type EnumSchema } from "../core/index.js";

export const InteractionChannelParticipantEnumType = {
  Supervisor: "supervisor",
  Customer: "customer",
  External: "external",
  Agent: "agent",
  Unknown: "unknown",
} as const;
export type InteractionChannelParticipantEnumType =
  | (typeof InteractionChannelParticipantEnumType)[keyof typeof InteractionChannelParticipantEnumType]
  | (string & {});

export const interactionChannelParticipantEnumTypeSchema: EnumSchema<InteractionChannelParticipantEnumType> =
  s.enumOf<InteractionChannelParticipantEnumType>(InteractionChannelParticipantEnumType);
