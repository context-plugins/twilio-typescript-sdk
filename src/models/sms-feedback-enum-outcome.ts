import { s, type EnumSchema } from "../core/index.js";

export const SmsFeedbackEnumOutcome = {
  Confirmed: "confirmed",
  Unconfirmed: "unconfirmed",
  Received: "received",
  NotReceived: "not-received",
  Delayed: "delayed",
} as const;
export type SmsFeedbackEnumOutcome =
  | (typeof SmsFeedbackEnumOutcome)[keyof typeof SmsFeedbackEnumOutcome]
  | (string & {});

export const smsFeedbackEnumOutcomeSchema: EnumSchema<SmsFeedbackEnumOutcome> =
  s.enumOf<SmsFeedbackEnumOutcome>(SmsFeedbackEnumOutcome);
