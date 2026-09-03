import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  accountsCallsRecordingsSidJson201041408Error1Schema,
  type AccountsCallsRecordingsSidJson201041408Error1,
} from "../models/accounts-calls-recordings-sid-json201041408-error1.js";
import {
  numbersV1CreateEmbeddedSessionRequestSchema,
  type NumbersV1CreateEmbeddedSessionRequest,
} from "../models/numbers-v1-create-embedded-session-request.js";
import {
  numbersV1CreateEmbeddedSessionResponseSchema,
  type NumbersV1CreateEmbeddedSessionResponse,
} from "../models/numbers-v1-create-embedded-session-response.js";
import type { Servers } from "../servers.js";

export class NumbersV1SenderIdRegistrationEmbeddedSession {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSenderIdRegistrationEmbeddedSession(
    request: NumbersV1SenderIdRegistrationEmbeddedSession.CreateSenderIdRegistrationEmbeddedSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    NumbersV1CreateEmbeddedSessionResponse,
    NumbersV1SenderIdRegistrationEmbeddedSession.CreateSenderIdRegistrationEmbeddedSessionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default5("/v1/SenderIdRegistrations/{BundleSid}/EmbeddedSessions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: numbersV1CreateEmbeddedSessionRequestSchema },
      },
      {
        success: { kind: "json", schema: numbersV1CreateEmbeddedSessionResponseSchema },
        errorFactory:
          NumbersV1SenderIdRegistrationEmbeddedSession.CreateSenderIdRegistrationEmbeddedSessionError,
      },
      options,
    );
  }
}

export namespace NumbersV1SenderIdRegistrationEmbeddedSession {
  export type CreateSenderIdRegistrationEmbeddedSessionRequest = {
    bundleSid: string;
    body: NumbersV1CreateEmbeddedSessionRequest;
  };

  export class CreateSenderIdRegistrationEmbeddedSessionError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error12",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error13",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error14",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<CreateSenderIdRegistrationEmbeddedSessionError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 409,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }
}
