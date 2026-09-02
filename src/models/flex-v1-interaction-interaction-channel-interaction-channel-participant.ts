import { s, type Schema } from "../core/index.js";
import {
  interactionChannelParticipantEnumTypeSchema,
  type InteractionChannelParticipantEnumType,
} from "./interaction-channel-participant-enum-type.js";

export type FlexV1InteractionInteractionChannelInteractionChannelParticipant = {
  sid?: string | null;
  type?: InteractionChannelParticipantEnumType;
  interactionSid?: string | null;
  channelSid?: string | null;
  url?: string | null;
  routingProperties?: Record<string, unknown> | null;
};

export const flexV1InteractionInteractionChannelInteractionChannelParticipantSchema: Schema<FlexV1InteractionInteractionChannelInteractionChannelParticipant> =
  s.object<FlexV1InteractionInteractionChannelInteractionChannelParticipant>({
    sid: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => interactionChannelParticipantEnumTypeSchema)),
    interactionSid: s.optionalNullable(s.string()),
    channelSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    routingProperties: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      interactionSid: "interaction_sid",
      channelSid: "channel_sid",
      routingProperties: "routing_properties",
    },
  });
