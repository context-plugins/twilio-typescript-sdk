import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Create a new Entity for the Service
   *
   * @remarks
   * Create a new Entity for the Service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEntity(
    request: VerifyV2Entity.CreateEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntity, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Identity", value: request.identity, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Entity.
   *
   * @remarks
   * Delete a specific Entity.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEntity(
    request: VerifyV2Entity.DeleteEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a specific Entity.
   *
   * @remarks
   * Fetch a specific Entity.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchEntity(
    request: VerifyV2Entity.FetchEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntity, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntitySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Entities for a Service.
   *
   * @remarks
   * Retrieve a list of all Entities for a Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEntity(
    request: VerifyV2Entity.ListEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEntityResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEntityResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2Entity {
  export type CreateEntityRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * The unique external identifier for the Entity of the Service. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
  };

  export type DeleteEntityRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * The unique external identifier for the Entity of the Service. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
  };

  export type FetchEntityRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * The unique external identifier for the Entity of the Service. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
  };

  export type ListEntityRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
