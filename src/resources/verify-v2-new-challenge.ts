import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createPasskeysChallengeRequestSchema,
  type CreatePasskeysChallengeRequest,
} from "../models/create-passkeys-challenge-request.js";
import {
  v2ServicesPasskeysChallengesResponseSchema,
  type V2ServicesPasskeysChallengesResponse,
} from "../models/v2-services-passkeys-challenges-response.js";
import type { Servers } from "../servers.js";

export class VerifyV2NewChallenge {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Passkeys Challenge
   *
   * @remarks
   * Create a Passkeys Challenge
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createChallengePasskeys(
    request: VerifyV2NewChallenge.CreateChallengePasskeysRequest,
    options?: RequestOptions,
  ): ApiPromise<V2ServicesPasskeysChallengesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Passkeys/Challenges"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createPasskeysChallengeRequestSchema },
      },
      {
        success: { kind: "json", schema: v2ServicesPasskeysChallengesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2NewChallenge {
  export type CreateChallengePasskeysRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    body: CreatePasskeysChallengeRequest;
  };
}
