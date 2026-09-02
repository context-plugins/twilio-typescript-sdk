import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { listEntityResponseSchema, type ListEntityResponse } from "../models/list-entity-response.js";
import {
  verifyV2ServiceEntitySchema,
  type VerifyV2ServiceEntity,
} from "../models/verify-v2-service-entity.js";
import type { Servers } from "../servers.js";

export class VerifyV2Entity {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createEntity(
    request: VerifyV2Entity.CreateEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntity, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceEntity, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Identity", value: request.identity, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntitySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteEntity(
    request: VerifyV2Entity.DeleteEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
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

  fetchEntity(
    request: VerifyV2Entity.FetchEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntity, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceEntity, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntitySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEntity(
    request: VerifyV2Entity.ListEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEntityResponse, ResponseError> {
    return this.#rawClient.execute<ListEntityResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEntityResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2Entity {
  export type CreateEntityRequest = {
    serviceSid: string;
    identity: string;
  };

  export type DeleteEntityRequest = {
    serviceSid: string;
    identity: string;
  };

  export type FetchEntityRequest = {
    serviceSid: string;
    identity: string;
  };

  export type ListEntityRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
