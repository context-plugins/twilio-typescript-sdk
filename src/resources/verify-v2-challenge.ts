import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  challengeEnumChallengeStatusesSchema,
  type ChallengeEnumChallengeStatuses,
} from "../models/challenge-enum-challenge-statuses.js";
import {
  challengeEnumListOrdersSchema,
  type ChallengeEnumListOrders,
} from "../models/challenge-enum-list-orders.js";
import {
  listChallengeResponseSchema,
  type ListChallengeResponse,
} from "../models/list-challenge-response.js";
import {
  verifyV2ServiceEntityChallengeSchema,
  type VerifyV2ServiceEntityChallenge,
} from "../models/verify-v2-service-entity-challenge.js";
import type { Servers } from "../servers.js";

export class VerifyV2Challenge {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createChallenge(
    request: VerifyV2Challenge.CreateChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityChallenge, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceEntityChallenge, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FactorSid", value: request.factorSid, schema: s.string() },
            { name: "ExpirationDate", value: request.expirationDate, schema: s.optional(s.dateTime()) },
            { name: "Details.Message", value: request.detailsMessage, schema: s.optional(s.string()) },
            {
              name: "Details.Fields",
              value: request.detailsFields,
              schema: s.optional(s.array(s.record(s.string(), s.unknown()))),
            },
            {
              name: "HiddenDetails",
              value: request.hiddenDetails,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            { name: "AuthPayload", value: request.authPayload, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityChallengeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchChallenge(
    request: VerifyV2Challenge.FetchChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityChallenge, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceEntityChallenge, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityChallengeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listChallenge(
    request: VerifyV2Challenge.ListChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChallengeResponse, ResponseError> {
    return this.#rawClient.execute<ListChallengeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [
          { name: "FactorSid", value: request.factorSid, schema: s.optional(s.string()) },
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => challengeEnumChallengeStatusesSchema)),
          },
          {
            name: "Order",
            value: request.order,
            schema: s.optional(s.lazy(() => challengeEnumListOrdersSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChallengeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateChallenge(
    request: VerifyV2Challenge.UpdateChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityChallenge, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceEntityChallenge, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}"),
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
            {
              name: "Metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityChallengeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2Challenge {
  export type CreateChallengeRequest = {
    serviceSid: string;
    identity: string;
    factorSid: string;
    expirationDate?: Date;
    detailsMessage?: string;
    detailsFields?: Record<string, unknown>[];
    hiddenDetails?: Record<string, unknown>;
    authPayload?: string;
  };

  export type FetchChallengeRequest = {
    serviceSid: string;
    identity: string;
    sid: string;
  };

  export type ListChallengeRequest = {
    serviceSid: string;
    identity: string;
    factorSid?: string;
    status?: ChallengeEnumChallengeStatuses;
    order?: ChallengeEnumListOrders;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateChallengeRequest = {
    serviceSid: string;
    identity: string;
    sid: string;
    authPayload?: string;
    metadata?: Record<string, unknown>;
  };
}
