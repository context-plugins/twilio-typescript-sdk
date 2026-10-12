import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * A Messaging Service resource to add and get Brand Vettings.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBrandVetting(
    request: MessagingV1BrandVetting.CreateBrandVettingRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrationsBrandVetting, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/a2p/BrandRegistrations/{BrandSid}/Vettings"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BrandSid", value: request.brandSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add and get Brand Vettings.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchBrandVetting(
    request: MessagingV1BrandVetting.FetchBrandVettingRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrationsBrandVetting, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1(
          "/v1/a2p/BrandRegistrations/{BrandSid}/Vettings/{BrandVettingSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "BrandSid", value: request.brandSid, schema: s.string() },
          { name: "BrandVettingSid", value: request.brandVettingSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1BrandRegistrationsBrandVettingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add and get Brand Vettings.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBrandVetting(
    request: MessagingV1BrandVetting.ListBrandVettingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBrandVettingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/a2p/BrandRegistrations/{BrandSid}/Vettings"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BrandSid", value: request.brandSid, schema: s.string() }],
        query: [
          {
            name: "VettingProvider",
            value: request.vettingProvider,
            schema: s.optional(s.lazy(() => brandVettingEnumVettingProviderSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBrandVettingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1BrandVetting {
  export type CreateBrandVettingRequest = {
    /** The SID of the Brand Registration resource of the vettings to create . */
    brandSid: string;
    /**
     * The third-party provider that has conducted the vetting. One of “CampaignVerify” (Campaign
     * Verify tokens) or “AEGIS” (Secondary Vetting).
     */
    vettingProvider: BrandVettingEnumVettingProvider;
    /** The unique ID of the vetting */
    vettingId?: string;
  };

  export type FetchBrandVettingRequest = {
    /** The SID of the Brand Registration resource of the vettings to read . */
    brandSid: string;
    /** The Twilio SID of the third-party vetting record. */
    brandVettingSid: string;
  };

  export type ListBrandVettingRequest = {
    /** The SID of the Brand Registration resource of the vettings to read . */
    brandSid: string;
    /** The third-party provider of the vettings to read */
    vettingProvider?: BrandVettingEnumVettingProvider;
  };
}
