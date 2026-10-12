import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiV2010AccountTokenSchema, type ApiV2010AccountToken } from "../models/api-v2010-account-token.js";
import type { Servers } from "../servers.js";

export class Api20100401Token {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new token for ICE servers
   *
   * @remarks
   * Create a new token for ICE servers
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createToken(
    request: Api20100401Token.CreateTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountToken, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Tokens.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Ttl", value: request.ttl, schema: s.optional(s.int()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountTokenSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Token {
  export type CreateTokenRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /**
     * The duration in seconds for which the generated credentials are valid. The default value is
     * 86400 (24 hours).
     */
    ttl?: number;
  };
}
