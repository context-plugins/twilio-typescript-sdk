import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1Interaction = {
  /** The unique string created by Twilio to identify an Interaction resource, prefixed with KD. */
  sid?: string | null;
  /**
   * A JSON object that defines the Interaction’s communication channel and includes details about
   * the channel. See the [Outbound
   * SMS](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions)
   * and [inbound
   * (API-initiated)](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#api-initiated-contact)
   * Channel object examples.
   */
  channel?: Record<string, unknown> | null;
  /**
   * A JSON Object representing the routing rules for the Interaction Channel. See [Outbound SMS
   * Example](https://www.twilio.com/docs/flex/developer/conversations/interactions-api/interactions#agent-initiated-outbound-interactions)
   * for an example Routing object. The Interactions resource uses TaskRouter for all routing
   * functionality. All attributes in the Routing object on your Interaction request body are added
   * “as is” to the task. For a list of known attributes consumed by the Flex UI and/or Flex
   * Insights, see [Known Task
   * Attributes](https://www.twilio.com/docs/flex/developer/conversations/interactions-api#task-attributes).
   */
  routing?: Record<string, unknown> | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
  interactionContextSid?: string | null;
  webhookTtid?: string | null;
};

export const flexV1InteractionSchema: Schema<FlexV1Interaction> = s.object<FlexV1Interaction>({
  sid: s.optionalNullable(s.string()),
  channel: s.optionalNullable(s.record(s.string(), s.unknown())),
  routing: s.optionalNullable(s.record(s.string(), s.unknown())),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  interactionContextSid: s.optionalNullable(s.string()),
  webhookTtid: s.optionalNullable(s.string()),
  _keysMap: {
    interactionContextSid: "interaction_context_sid",
    webhookTtid: "webhook_ttid",
  },
});
