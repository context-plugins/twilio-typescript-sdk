import { s, type Schema } from "../core/index.js";

export type FlexV1InteractionInteractionChannelInteractionChannelInvite = {
  sid?: string | null;
  interactionSid?: string | null;
  channelSid?: string | null;
  routing?: Record<string, unknown> | null;
  url?: string | null;
};

export const flexV1InteractionInteractionChannelInteractionChannelInviteSchema: Schema<FlexV1InteractionInteractionChannelInteractionChannelInvite> =
  s.object<FlexV1InteractionInteractionChannelInteractionChannelInvite>({
    sid: s.optionalNullable(s.string()),
    interactionSid: s.optionalNullable(s.string()),
    channelSid: s.optionalNullable(s.string()),
    routing: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      interactionSid: "interaction_sid",
      channelSid: "channel_sid",
    },
  });
