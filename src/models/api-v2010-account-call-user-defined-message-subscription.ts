import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountCallUserDefinedMessageSubscription = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the
   * User Defined Messages.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined
   * Message Subscription is associated with. This refers to the Call SID that is producing the User
   * Defined Messages.
   */
  callSid?: string | null;
  /** The SID that uniquely identifies this User Defined Message Subscription. */
  sid?: string | null;
  /** The date that this User Defined Message Subscription was created, given in RFC 2822 format. */
  dateCreated?: string | null;
  /**
   * The URI of the User Defined Message Subscription Resource, relative to
   * `https://api.twilio.com`.
   */
  uri?: string | null;
};

export const apiV2010AccountCallUserDefinedMessageSubscriptionSchema: Schema<ApiV2010AccountCallUserDefinedMessageSubscription> =
  s.object<ApiV2010AccountCallUserDefinedMessageSubscription>({
    accountSid: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      callSid: "call_sid",
      dateCreated: "date_created",
    },
  });
