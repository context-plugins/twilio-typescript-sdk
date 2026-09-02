import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createChallengePasskeys(
    request: VerifyV2NewChallenge.CreateChallengePasskeysRequest,
    options?: RequestOptions,
  ): ApiPromise<V2ServicesPasskeysChallengesResponse, ResponseError> {
    return this.#rawClient.execute<V2ServicesPasskeysChallengesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Passkeys/Challenges"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createPasskeysChallengeRequestSchema },
      },
      {
        success: { kind: "json", schema: v2ServicesPasskeysChallengesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2NewChallenge {
  export type CreateChallengePasskeysRequest = {
    serviceSid: string;
    body: CreatePasskeysChallengeRequest;
  };
}
