import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountMessageMessageFeedbackSchema,
  type ApiV2010AccountMessageMessageFeedback,
} from "../models/api-v2010-account-message-message-feedback.js";
import {
  messageFeedbackEnumOutcomeSchema,
  type MessageFeedbackEnumOutcome,
} from "../models/message-feedback-enum-outcome.js";
import type { Servers } from "../servers.js";

export class Api20100401Feedback {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Message Feedback to confirm a tracked user action was performed by the recipient of the
   * associated Message
   *
   * @remarks
   * Create Message Feedback to confirm a tracked user action was performed by the recipient of the
   * associated Message
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMessageFeedback(
    request: Api20100401Feedback.CreateMessageFeedbackRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountMessageMessageFeedback, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Outcome",
              value: request.outcome,
              schema: s.optional(s.lazy(() => messageFeedbackEnumOutcomeSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountMessageMessageFeedbackSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Feedback {
  export type CreateMessageFeedbackRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the
     * Message resource for which to create MessageFeedback.
     */
    accountSid: string;
    /** The SID of the Message resource for which to create MessageFeedback. */
    messageSid: string;
    /**
     * Reported outcome indicating whether there is confirmation that the Message recipient
     * performed a tracked user action. Can be: `unconfirmed` or `confirmed`. For more details see
     * [How to Optimize Message Deliverability with Message
     * Feedback](https://www.twilio.com/docs/messaging/guides/send-message-feedback-to-twilio).
     */
    outcome?: MessageFeedbackEnumOutcome;
  };
}
