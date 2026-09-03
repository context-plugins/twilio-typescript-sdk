import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { verifyV2SafelistSchema, type VerifyV2Safelist } from "../models/verify-v2-safelist.js";
import type { Servers } from "../servers.js";

export class VerifyV2SafelistApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSafelist(
    request: VerifyV2SafelistApi.CreateSafelistRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Safelist, ResponseError> {
    return this.#rawClient.execute<VerifyV2Safelist, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/SafeList/Numbers"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "PhoneNumber", value: request.phoneNumber, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2SafelistSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSafelist(
    request: VerifyV2SafelistApi.DeleteSafelistRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default3("/v2/SafeList/Numbers/{PhoneNumber}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PhoneNumber", value: request.phoneNumber, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchSafelist(
    request: VerifyV2SafelistApi.FetchSafelistRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2Safelist, ResponseError> {
    return this.#rawClient.execute<VerifyV2Safelist, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/SafeList/Numbers/{PhoneNumber}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PhoneNumber", value: request.phoneNumber, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2SafelistSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2SafelistApi {
  export type CreateSafelistRequest = {
    phoneNumber: string;
  };

  export type DeleteSafelistRequest = {
    phoneNumber: string;
  };

  export type FetchSafelistRequest = {
    phoneNumber: string;
  };
}
