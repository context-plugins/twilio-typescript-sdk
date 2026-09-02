import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createMessageFeedback(
    request: Api20100401Feedback.CreateMessageFeedbackRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountMessageMessageFeedback, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountMessageMessageFeedback, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Feedback {
  export type CreateMessageFeedbackRequest = {
    accountSid: string;
    messageSid: string;
    outcome?: MessageFeedbackEnumOutcome;
  };
}
