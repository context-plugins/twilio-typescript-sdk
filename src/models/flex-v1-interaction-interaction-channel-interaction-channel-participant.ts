import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  interactionChannelParticipantEnumTypeSchema,
  type InteractionChannelParticipantEnumType,
} from "./interaction-channel-participant-enum-type.js";

export type FlexV1InteractionInteractionChannelInteractionChannelParticipant = {
  /**
   * The unique string created by Twilio to identify an Interaction Channel Participant resource.
   */
  sid?: string | null;
  /** Participant type. Can be: `agent`, `customer`, `supervisor`, `external`, `unknown` */
  type?: InteractionChannelParticipantEnumType;
  /** The Interaction Sid for this channel. */
  interactionSid?: string | null;
  /** The Channel Sid for this Participant. */
  channelSid?: string | null;
  url?: string | null;
  /** The Participant's routing properties. */
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
