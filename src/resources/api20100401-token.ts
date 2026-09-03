import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createToken(
    request: Api20100401Token.CreateTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountToken, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountToken, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Tokens.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Ttl", value: request.ttl, schema: s.optional(s.number()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountTokenSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Token {
  export type CreateTokenRequest = {
    accountSid: string;
    ttl?: number;
  };
}
