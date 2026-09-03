import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createBrandRegistrations(
    request: MessagingV1BrandRegistration.CreateBrandRegistrationsRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrations, ResponseError> {
    return this.#rawClient.execute<MessagingV1BrandRegistrations, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/a2p/BrandRegistrations"),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchBrandRegistrations(
    request: MessagingV1BrandRegistration.FetchBrandRegistrationsRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrations, ResponseError> {
    return this.#rawClient.execute<MessagingV1BrandRegistrations, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/a2p/BrandRegistrations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1BrandRegistrationsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listBrandRegistrations(
    request: MessagingV1BrandRegistration.ListBrandRegistrationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBrandRegistrationsResponse, ResponseError> {
    return this.#rawClient.execute<ListBrandRegistrationsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/a2p/BrandRegistrations"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBrandRegistrationsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateBrandRegistrations(
    request: MessagingV1BrandRegistration.UpdateBrandRegistrationsRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrations, ResponseError> {
    return this.#rawClient.execute<MessagingV1BrandRegistrations, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/a2p/BrandRegistrations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1BrandRegistrationsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1BrandRegistration {
  export type CreateBrandRegistrationsRequest = {
    customerProfileBundleSid: string;
    a2PProfileBundleSid: string;
    brandType?: string;
    mock?: boolean;
    skipAutomaticSecVet?: boolean;
  };

  export type FetchBrandRegistrationsRequest = {
    sid: string;
  };

  export type ListBrandRegistrationsRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateBrandRegistrationsRequest = {
    sid: string;
  };
}
