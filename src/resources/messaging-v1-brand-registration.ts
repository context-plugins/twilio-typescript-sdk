import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listBrandRegistrationsResponseSchema,
  type ListBrandRegistrationsResponse,
} from "../models/list-brand-registrations-response.js";
import {
  messagingV1BrandRegistrationsSchema,
  type MessagingV1BrandRegistrations,
} from "../models/messaging-v1-brand-registrations.js";
import type { Servers } from "../servers.js";

export class MessagingV1BrandRegistration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * A Messaging Service resource to add and fetch Brand Registrations.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBrandRegistrations(
    request: MessagingV1BrandRegistration.CreateBrandRegistrationsRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrations, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/a2p/BrandRegistrations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "CustomerProfileBundleSid", value: request.customerProfileBundleSid, schema: s.string() },
            { name: "A2PProfileBundleSid", value: request.a2PProfileBundleSid, schema: s.string() },
            { name: "BrandType", value: request.brandType, schema: s.optional(s.string()) },
            { name: "Mock", value: request.mock, schema: s.optional(s.boolean()) },
            {
              name: "SkipAutomaticSecVet",
              value: request.skipAutomaticSecVet,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1BrandRegistrationsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add and fetch Brand Registrations.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchBrandRegistrations(
    request: MessagingV1BrandRegistration.FetchBrandRegistrationsRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrations, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/a2p/BrandRegistrations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1BrandRegistrationsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add and fetch Brand Registrations.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBrandRegistrations(
    request: MessagingV1BrandRegistration.ListBrandRegistrationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBrandRegistrationsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/a2p/BrandRegistrations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBrandRegistrationsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add and fetch Brand Registrations.
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBrandRegistrations(
    request: MessagingV1BrandRegistration.UpdateBrandRegistrationsRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrations, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/a2p/BrandRegistrations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1BrandRegistrationsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1BrandRegistration {
  export type CreateBrandRegistrationsRequest = {
    /** Customer Profile Bundle Sid. */
    customerProfileBundleSid: string;
    /** A2P Messaging Profile Bundle Sid. */
    a2PProfileBundleSid: string;
    /**
     * Type of brand being created. One of: "STANDARD", "SOLE_PROPRIETOR". SOLE_PROPRIETOR is for
     * low volume, SOLE_PROPRIETOR use cases. STANDARD is for all other use cases.
     */
    brandType?: string;
    /**
     * A boolean that specifies whether brand should be a mock or not. If true, brand will be
     * registered as a mock brand. Defaults to false if no value is provided.
     */
    mock?: boolean;
    /**
     * A flag to disable automatic secondary vetting for brands which it would otherwise be done.
     */
    skipAutomaticSecVet?: boolean;
  };

  export type FetchBrandRegistrationsRequest = {
    /** The SID of the Brand Registration resource to fetch. */
    sid: string;
  };

  export type ListBrandRegistrationsRequest = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateBrandRegistrationsRequest = {
    /** The SID of the Brand Registration resource to update. */
    sid: string;
  };
}
