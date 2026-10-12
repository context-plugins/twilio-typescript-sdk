import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InteractionInteractionChannelInteractionChannelInvite = {
  /** The unique string created by Twilio to identify an Interaction Channel Invite resource. */
  sid?: string | null;
  /** The Interaction SID for this Channel. */
  interactionSid?: string | null;
  /** The Channel SID for this Invite. */
  channelSid?: string | null;
  /**
   * A JSON object representing the routing rules for the Interaction Channel. See [Outbound SMS
   * Example](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions)
   * for an example Routing object. The Interactions resource uses TaskRouter for all routing
   * functionality. All attributes in the Routing object on your Interaction request body are added
   * “as is” to the task. For a list of known attributes consumed by the Flex UI and/or Flex
   * Insights, see [Known Task
   * Attributes](https://www.twilio.com/docs/flex/developer/conversations/interactions-api#task-attributes).
   */
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
