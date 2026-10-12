import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountCallUserDefinedMessage = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created User Defined
   * Message.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined
   * Message is associated with.
   */
  callSid?: string | null;
  /** The SID that uniquely identifies this User Defined Message. */
  sid?: string | null;
  /** The date that this User Defined Message was created, given in RFC 2822 format. */
  dateCreated?: string | null;
};

export const apiV2010AccountCallUserDefinedMessageSchema: Schema<ApiV2010AccountCallUserDefinedMessage> =
  s.object<ApiV2010AccountCallUserDefinedMessage>({
    accountSid: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      callSid: "call_sid",
      dateCreated: "date_created",
    },
  });
