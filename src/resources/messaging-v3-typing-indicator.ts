import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import {
  accountsCallsRecordingsSidJson201041408Error1Schema,
  type AccountsCallsRecordingsSidJson201041408Error1,
} from "../models/accounts-calls-recordings-sid-json201041408-error1.js";
import {
  typingIndicatorRequestSchema,
  type TypingIndicatorRequest,
} from "../models/unions/typing-indicator-request.js";
import {
  v2IndicatorsTypingJsonResponseSchema,
  type V2IndicatorsTypingJsonResponse,
} from "../models/v2-indicators-typing-json-response.js";
import type { Servers } from "../servers.js";

export class MessagingV3TypingIndicator {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createV3TypingIndicator(
    request: MessagingV3TypingIndicator.CreateV3TypingIndicatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V2IndicatorsTypingJsonResponse, MessagingV3TypingIndicator.CreateV3TypingIndicatorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/v3/Indicators/Typing.json"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: typingIndicatorRequestSchema },
      },
      {
        success: { kind: "json", schema: v2IndicatorsTypingJsonResponseSchema },
        errorFactory: MessagingV3TypingIndicator.CreateV3TypingIndicatorError,
      },
      options,
    );
  }
}

export namespace MessagingV3TypingIndicator {
  export type CreateV3TypingIndicatorRequest = {
    body: TypingIndicatorRequest;
  };

  export class CreateV3TypingIndicatorError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error12",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error13",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<CreateV3TypingIndicatorError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 401,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 403,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }
}
