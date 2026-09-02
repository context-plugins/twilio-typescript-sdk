import { s, type Schema } from "../core/index.js";
import {
  messageFeedbackEnumOutcomeSchema,
  type MessageFeedbackEnumOutcome,
} from "./message-feedback-enum-outcome.js";

export type ApiV2010AccountMessageMessageFeedback = {
  accountSid?: string | null;
  messageSid?: string | null;
  outcome?: MessageFeedbackEnumOutcome;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  uri?: string | null;
};

export const apiV2010AccountMessageMessageFeedbackSchema: Schema<ApiV2010AccountMessageMessageFeedback> =
  s.object<ApiV2010AccountMessageMessageFeedback>({
    accountSid: s.optionalNullable(s.string()),
    messageSid: s.optionalNullable(s.string()),
    outcome: s.optional(s.lazy(() => messageFeedbackEnumOutcomeSchema)),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      messageSid: "message_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
