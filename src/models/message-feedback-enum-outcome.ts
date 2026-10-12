import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reported outcome indicating whether there is confirmation that the Message recipient performed a
 * tracked user action. Can be: `unconfirmed` or `confirmed`. For more details see [How to Optimize
 * Message Deliverability with Message
 * Feedback](https://www.twilio.com/docs/messaging/guides/send-message-feedback-to-twilio).
 */
export const MessageFeedbackEnumOutcome = {
  Confirmed: "confirmed",
  Unconfirmed: "unconfirmed",
} as const;
export type MessageFeedbackEnumOutcome =
  | (typeof MessageFeedbackEnumOutcome)[keyof typeof MessageFeedbackEnumOutcome]
  | (string & {});

export const messageFeedbackEnumOutcomeSchema: EnumSchema<MessageFeedbackEnumOutcome> =
  s.enumOf<MessageFeedbackEnumOutcome>(MessageFeedbackEnumOutcome);
