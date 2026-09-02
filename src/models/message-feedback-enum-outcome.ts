import { s, type EnumSchema } from "../core/index.js";

export const MessageFeedbackEnumOutcome = {
  Confirmed: "confirmed",
  Unconfirmed: "unconfirmed",
} as const;
export type MessageFeedbackEnumOutcome =
  | (typeof MessageFeedbackEnumOutcome)[keyof typeof MessageFeedbackEnumOutcome]
  | (string & {});

export const messageFeedbackEnumOutcomeSchema: EnumSchema<MessageFeedbackEnumOutcome> =
  s.enumOf<MessageFeedbackEnumOutcome>(MessageFeedbackEnumOutcome);
