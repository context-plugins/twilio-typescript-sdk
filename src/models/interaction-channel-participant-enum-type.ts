import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
