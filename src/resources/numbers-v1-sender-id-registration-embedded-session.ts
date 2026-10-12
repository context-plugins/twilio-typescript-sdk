import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create Embedded Session
   *
   * @remarks
   * Creates a new embedded Persona inquiry session for an existing registration in DRAFT or
   * TWILIO_REJECTED status. Use this to resume an incomplete registration or resubmit a rejected
   * one.
   *
   * @returns Created
   *
   * @throws {@link
   * NumbersV1SenderIdRegistrationEmbeddedSession.CreateSenderIdRegistrationEmbeddedSessionError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default5("/v1/SenderIdRegistrations/{BundleSid}/EmbeddedSessions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the registration (BU-prefixed). */
    bundleSid: string;
    body: NumbersV1CreateEmbeddedSessionRequest;
  };

  export class CreateSenderIdRegistrationEmbeddedSessionError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error1",
          AccountsCallsRecordingsSidJson201041408Error1
        >
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
    >;

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
