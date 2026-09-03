import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageFeedbackEnumOutcome = {
  Confirmed: "confirmed",
  Unconfirmed: "unconfirmed",
} as const;
export type MessageFeedbackEnumOutcome =
  | (typeof MessageFeedbackEnumOutcome)[keyof typeof MessageFeedbackEnumOutcome]
  | (string & {});

export const messageFeedbackEnumOutcomeSchema: EnumSchema<MessageFeedbackEnumOutcome> =
  s.enumOf<MessageFeedbackEnumOutcome>(MessageFeedbackEnumOutcome);
