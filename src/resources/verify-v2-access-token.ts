import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  accessTokenEnumFactorTypesSchema,
  type AccessTokenEnumFactorTypes,
} from "../models/access-token-enum-factor-types.js";
import {
  verifyV2ServiceAccessTokenSchema,
  type VerifyV2ServiceAccessToken,
} from "../models/verify-v2-service-access-token.js";
import type { Servers } from "../servers.js";

export class VerifyV2AccessToken {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createAccessToken(
    request: VerifyV2AccessToken.CreateAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceAccessToken, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceAccessToken, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/AccessTokens"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Identity", value: request.identity, schema: s.string() },
            { name: "FactorType", value: request.factorType, schema: accessTokenEnumFactorTypesSchema },
            { name: "FactorFriendlyName", value: request.factorFriendlyName, schema: s.optional(s.string()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceAccessTokenSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchAccessToken(
    request: VerifyV2AccessToken.FetchAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceAccessToken, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceAccessToken, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/AccessTokens/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceAccessTokenSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2AccessToken {
  export type CreateAccessTokenRequest = {
    serviceSid: string;
    identity: string;
    factorType: AccessTokenEnumFactorTypes;
    factorFriendlyName?: string;
    ttl?: number;
  };

  export type FetchAccessTokenRequest = {
    serviceSid: string;
    sid: string;
  };
}
