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
  numbersV1CreateEmbeddedRegistrationRequestSchema,
  type NumbersV1CreateEmbeddedRegistrationRequest,
} from "../models/numbers-v1-create-embedded-registration-request.js";
import {
  numbersV1CreateEmbeddedRegistrationResponseSchema,
  type NumbersV1CreateEmbeddedRegistrationResponse,
} from "../models/numbers-v1-create-embedded-registration-response.js";
import type { Servers } from "../servers.js";

export class NumbersV1SenderIdRegistration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Sender ID Registration
   *
   * @remarks
   * Creates a new sender ID registration and initializes an embedded Persona inquiry session.
   * Returns registration details and embedded session credentials for rendering the Compliance
   * Embeddable UI.
   *
   * @returns Created
   *
   * @throws {@link NumbersV1SenderIdRegistration.CreateSenderIdRegistrationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSenderIdRegistration(
    request: NumbersV1SenderIdRegistration.CreateSenderIdRegistrationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    NumbersV1CreateEmbeddedRegistrationResponse,
    NumbersV1SenderIdRegistration.CreateSenderIdRegistrationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v1/SenderIdRegistrations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: numbersV1CreateEmbeddedRegistrationRequestSchema },
      },
      {
        success: { kind: "json", schema: numbersV1CreateEmbeddedRegistrationResponseSchema },
        errorFactory: NumbersV1SenderIdRegistration.CreateSenderIdRegistrationError,
      },
      options,
    );
  }
}

export namespace NumbersV1SenderIdRegistration {
  export type CreateSenderIdRegistrationRequest = {
    body: NumbersV1CreateEmbeddedRegistrationRequest;
  };

  export class CreateSenderIdRegistrationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error1",
          AccountsCallsRecordingsSidJson201041408Error1
        >
      | Declared<
          "accountsCallsRecordingsSidJson201041408Error12",
          AccountsCallsRecordingsSidJson201041408Error1
        >
    >;

    static readonly errors: ErrorDecoders<CreateSenderIdRegistrationError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }
}
