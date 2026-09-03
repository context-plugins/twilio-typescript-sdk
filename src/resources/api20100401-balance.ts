import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountBalanceSchema,
  type ApiV2010AccountBalance,
} from "../models/api-v2010-account-balance.js";
import type { Servers } from "../servers.js";

export class Api20100401Balance {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchBalance(
    request: Api20100401Balance.FetchBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountBalance, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountBalance, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Balance.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountBalanceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Balance {
  export type FetchBalanceRequest = {
    accountSid: string;
  };
}
