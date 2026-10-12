import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messageFeedbackEnumOutcomeSchema,
  type MessageFeedbackEnumOutcome,
} from "./message-feedback-enum-outcome.js";

export type ApiV2010AccountMessageMessageFeedback = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with this
   * MessageFeedback resource.
   */
  accountSid?: string | null;
  /** The SID of the Message resource associated with this MessageFeedback resource. */
  messageSid?: string | null;
  /**
   * Reported outcome indicating whether there is confirmation that the Message recipient performed
   * a tracked user action. Can be: `unconfirmed` or `confirmed`. For more details see [How to
   * Optimize Message Deliverability with Message
   * Feedback](https://www.twilio.com/docs/messaging/guides/send-message-feedback-to-twilio).
   */
  outcome?: MessageFeedbackEnumOutcome;
  /**
   * The date and time in GMT when this MessageFeedback resource was created, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT when this MessageFeedback resource was last updated, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
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
