import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  factorEnumTotpAlgorithmsSchema,
  type FactorEnumTotpAlgorithms,
} from "../models/factor-enum-totp-algorithms.js";
import { listFactorResponseSchema, type ListFactorResponse } from "../models/list-factor-response.js";
import {
  verifyV2ServiceEntityFactorSchema,
  type VerifyV2ServiceEntityFactor,
} from "../models/verify-v2-service-entity-factor.js";
import type { Servers } from "../servers.js";

export class VerifyV2Factor {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteFactor(
    request: VerifyV2Factor.DeleteFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchFactor(
    request: VerifyV2Factor.FetchFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityFactor, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceEntityFactor, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityFactorSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listFactor(
    request: VerifyV2Factor.ListFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<ListFactorResponse, ResponseError> {
    return this.#rawClient.execute<ListFactorResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Factors"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFactorResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateFactor(
    request: VerifyV2Factor.UpdateFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityFactor, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceEntityFactor, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "AuthPayload", value: request.authPayload, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "Config.NotificationToken",
              value: request.configNotificationToken,
              schema: s.optional(s.string()),
            },
            { name: "Config.SdkVersion", value: request.configSdkVersion, schema: s.optional(s.string()) },
            { name: "Config.TimeStep", value: request.configTimeStep, schema: s.optional(s.number()) },
            { name: "Config.Skew", value: request.configSkew, schema: s.optional(s.number()) },
            { name: "Config.CodeLength", value: request.configCodeLength, schema: s.optional(s.number()) },
            {
              name: "Config.Alg",
              value: request.configAlg,
              schema: s.optional(s.lazy(() => factorEnumTotpAlgorithmsSchema)),
            },
            {
              name: "Config.NotificationPlatform",
              value: request.configNotificationPlatform,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityFactorSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2Factor {
  export type DeleteFactorRequest = {
    serviceSid: string;
    identity: string;
    sid: string;
  };

  export type FetchFactorRequest = {
    serviceSid: string;
    identity: string;
    sid: string;
  };

  export type ListFactorRequest = {
    serviceSid: string;
    identity: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateFactorRequest = {
    serviceSid: string;
    identity: string;
    sid: string;
    authPayload?: string;
    friendlyName?: string;
    configNotificationToken?: string;
    configSdkVersion?: string;
    configTimeStep?: number;
    configSkew?: number;
    configCodeLength?: number;
    configAlg?: FactorEnumTotpAlgorithms;
    configNotificationPlatform?: string;
  };
}
