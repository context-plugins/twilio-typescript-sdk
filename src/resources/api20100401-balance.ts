import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected
   * immediately. Child accounts do not contain balance information
   *
   * @remarks
   * Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected
   * immediately. Child accounts do not contain balance information
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchBalance(
    request: Api20100401Balance.FetchBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountBalance, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Balance.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountBalanceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Balance {
  export type FetchBalanceRequest = {
    /** The unique SID identifier of the Account. */
    accountSid: string;
  };
}
