import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  brandVettingEnumVettingProviderSchema,
  type BrandVettingEnumVettingProvider,
} from "../models/brand-vetting-enum-vetting-provider.js";
import {
  listBrandVettingResponseSchema,
  type ListBrandVettingResponse,
} from "../models/list-brand-vetting-response.js";
import {
  messagingV1BrandRegistrationsBrandVettingSchema,
  type MessagingV1BrandRegistrationsBrandVetting,
} from "../models/messaging-v1-brand-registrations-brand-vetting.js";
import type { Servers } from "../servers.js";

export class MessagingV1BrandVetting {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createBrandVetting(
    request: MessagingV1BrandVetting.CreateBrandVettingRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrationsBrandVetting, ResponseError> {
    return this.#rawClient.execute<MessagingV1BrandRegistrationsBrandVetting, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/a2p/BrandRegistrations/{BrandSid}/Vettings"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BrandSid", value: request.brandSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "VettingProvider",
              value: request.vettingProvider,
              schema: brandVettingEnumVettingProviderSchema,
            },
            { name: "VettingId", value: request.vettingId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1BrandRegistrationsBrandVettingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchBrandVetting(
    request: MessagingV1BrandVetting.FetchBrandVettingRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrationsBrandVetting, ResponseError> {
    return this.#rawClient.execute<MessagingV1BrandRegistrationsBrandVetting, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/a2p/BrandRegistrations/{BrandSid}/Vettings/{BrandVettingSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "BrandSid", value: request.brandSid, schema: s.string() },
          { name: "BrandVettingSid", value: request.brandVettingSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1BrandRegistrationsBrandVettingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listBrandVetting(
    request: MessagingV1BrandVetting.ListBrandVettingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBrandVettingResponse, ResponseError> {
    return this.#rawClient.execute<ListBrandVettingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/a2p/BrandRegistrations/{BrandSid}/Vettings"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BrandSid", value: request.brandSid, schema: s.string() }],
        query: [
          {
            name: "VettingProvider",
            value: request.vettingProvider,
            schema: s.optional(s.lazy(() => brandVettingEnumVettingProviderSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBrandVettingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1BrandVetting {
  export type CreateBrandVettingRequest = {
    brandSid: string;
    vettingProvider: BrandVettingEnumVettingProvider;
    vettingId?: string;
  };

  export type FetchBrandVettingRequest = {
    brandSid: string;
    brandVettingSid: string;
  };

  export type ListBrandVettingRequest = {
    brandSid: string;
    vettingProvider?: BrandVettingEnumVettingProvider;
  };
}
