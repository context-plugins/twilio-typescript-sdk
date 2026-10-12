import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { listServiceResponse3Schema, type ListServiceResponse3 } from "../models/list-service-response3.js";
import { proxyV1ServiceSchema, type ProxyV1Service } from "../models/proxy-v1-service.js";
import {
  serviceEnumGeoMatchLevelSchema,
  type ServiceEnumGeoMatchLevel,
} from "../models/service-enum-geo-match-level.js";
import {
  serviceEnumNumberSelectionBehaviorSchema,
  type ServiceEnumNumberSelectionBehavior,
} from "../models/service-enum-number-selection-behavior.js";
import type { Servers } from "../servers.js";

export class ProxyV1ServiceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Service for Twilio Proxy
   *
   * @remarks
   * Create a new Service for Twilio Proxy
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createService4(
    request: ProxyV1ServiceApi.CreateService4Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.string() },
            { name: "DefaultTtl", value: request.defaultTtl, schema: s.optional(s.int()) },
            { name: "CallbackUrl", value: request.callbackUrl, schema: s.optional(s.string()) },
            {
              name: "GeoMatchLevel",
              value: request.geoMatchLevel,
              schema: s.optional(s.lazy(() => serviceEnumGeoMatchLevelSchema)),
            },
            {
              name: "NumberSelectionBehavior",
              value: request.numberSelectionBehavior,
              schema: s.optional(s.lazy(() => serviceEnumNumberSelectionBehaviorSchema)),
            },
            {
              name: "InterceptCallbackUrl",
              value: request.interceptCallbackUrl,
              schema: s.optional(s.string()),
            },
            {
              name: "OutOfSessionCallbackUrl",
              value: request.outOfSessionCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "ChatInstanceSid", value: request.chatInstanceSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Service.
   *
   * @remarks
   * Delete a specific Service.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteService4(
    request: ProxyV1ServiceApi.DeleteService4Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default10("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
   * Fetch a specific Service.
   *
   * @remarks
   * Fetch a specific Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchService4(
    request: ProxyV1ServiceApi.FetchService4Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per
   * page.
   *
   * @remarks
   * Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per
   * page.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listService4(
    request: ProxyV1ServiceApi.ListService4Request,
    options?: RequestOptions,
  ): ApiPromise<ListServiceResponse3, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10("/v1/Services"),
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
        success: { kind: "json", schema: listServiceResponse3Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Service.
   *
   * @remarks
   * Update a specific Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateService3(
    request: ProxyV1ServiceApi.UpdateService3Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1Service, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "DefaultTtl", value: request.defaultTtl, schema: s.optional(s.int()) },
            { name: "CallbackUrl", value: request.callbackUrl, schema: s.optional(s.string()) },
            {
              name: "GeoMatchLevel",
              value: request.geoMatchLevel,
              schema: s.optional(s.lazy(() => serviceEnumGeoMatchLevelSchema)),
            },
            {
              name: "NumberSelectionBehavior",
              value: request.numberSelectionBehavior,
              schema: s.optional(s.lazy(() => serviceEnumNumberSelectionBehaviorSchema)),
            },
            {
              name: "InterceptCallbackUrl",
              value: request.interceptCallbackUrl,
              schema: s.optional(s.string()),
            },
            {
              name: "OutOfSessionCallbackUrl",
              value: request.outOfSessionCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "ChatInstanceSid", value: request.chatInstanceSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ProxyV1ServiceApi {
  export type CreateService4Request = {
    /**
     * An application-defined string that uniquely identifies the resource. This value must be 191
     * characters or fewer in length and be unique. **This value should not have PII.**
     */
    uniqueName: string;
    /**
     * The default `ttl` value to set for Sessions created in the Service. The TTL (time to live) is
     * measured in seconds after the Session's last create or last Interaction. The default value of
     * `0` indicates an unlimited Session length. You can override a Session's default TTL value by
     * setting its `ttl` value.
     */
    defaultTtl?: number;
    /** The URL we should call when the interaction status changes. */
    callbackUrl?: string;
    /**
     * Where a proxy number must be located relative to the participant identifier. Can be:
     * `country`, `area-code`, or `extended-area-code`. The default value is `country` and more
     * specific areas than `country` are only available in North America.
     */
    geoMatchLevel?: ServiceEnumGeoMatchLevel;
    /**
     * The preference for Proxy Number selection in the Service instance. Can be: `prefer-sticky` or
     * `avoid-sticky`. `prefer-sticky` means that we will try and select the same Proxy Number for a
     * given participant if they have previous
     * [Sessions](https://www.twilio.com/docs/proxy/api/session), but we will not fail if that Proxy
     * Number cannot be used. `avoid-sticky` means that we will try to use different Proxy Numbers
     * as long as that is possible within a given pool rather than try and use a previously assigned
     * number.
     */
    numberSelectionBehavior?: ServiceEnumNumberSelectionBehavior;
    /**
     * The URL we call on each interaction. If we receive a 403 status, we block the interaction;
     * otherwise the interaction continues.
     */
    interceptCallbackUrl?: string;
    /**
     * The URL we should call when an inbound call or SMS action occurs on a closed or non-existent
     * Session. If your server (or a Twilio
     * [function](https://www.twilio.com/en-us/serverless/functions)) responds with valid
     * [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This means it is
     * possible, for example, to play a message for a call, send an automated text message response,
     * or redirect a call to another Phone Number. See [Out-of-Session Callback Response
     * Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more
     * information.
     */
    outOfSessionCallbackUrl?: string;
    /**
     * The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy
     * to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
     */
    chatInstanceSid?: string;
  };

  export type DeleteService4Request = {
    /** The Twilio-provided string that uniquely identifies the Service resource to delete. */
    sid: string;
  };

  export type FetchService4Request = {
    /** The Twilio-provided string that uniquely identifies the Service resource to fetch. */
    sid: string;
  };

  export type ListService4Request = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateService3Request = {
    /** The Twilio-provided string that uniquely identifies the Service resource to update. */
    sid: string;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be 191
     * characters or fewer in length and be unique. **This value should not have PII.**
     */
    uniqueName?: string;
    /**
     * The default `ttl` value to set for Sessions created in the Service. The TTL (time to live) is
     * measured in seconds after the Session's last create or last Interaction. The default value of
     * `0` indicates an unlimited Session length. You can override a Session's default TTL value by
     * setting its `ttl` value.
     */
    defaultTtl?: number;
    /** The URL we should call when the interaction status changes. */
    callbackUrl?: string;
    /**
     * Where a proxy number must be located relative to the participant identifier. Can be:
     * `country`, `area-code`, or `extended-area-code`. The default value is `country` and more
     * specific areas than `country` are only available in North America.
     */
    geoMatchLevel?: ServiceEnumGeoMatchLevel;
    /**
     * The preference for Proxy Number selection in the Service instance. Can be: `prefer-sticky` or
     * `avoid-sticky`. `prefer-sticky` means that we will try and select the same Proxy Number for a
     * given participant if they have previous
     * [Sessions](https://www.twilio.com/docs/proxy/api/session), but we will not fail if that Proxy
     * Number cannot be used. `avoid-sticky` means that we will try to use different Proxy Numbers
     * as long as that is possible within a given pool rather than try and use a previously assigned
     * number.
     */
    numberSelectionBehavior?: ServiceEnumNumberSelectionBehavior;
    /**
     * The URL we call on each interaction. If we receive a 403 status, we block the interaction;
     * otherwise the interaction continues.
     */
    interceptCallbackUrl?: string;
    /**
     * The URL we should call when an inbound call or SMS action occurs on a closed or non-existent
     * Session. If your server (or a Twilio
     * [function](https://www.twilio.com/en-us/serverless/functions)) responds with valid
     * [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This means it is
     * possible, for example, to play a message for a call, send an automated text message response,
     * or redirect a call to another Phone Number. See [Out-of-Session Callback Response
     * Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more
     * information.
     */
    outOfSessionCallbackUrl?: string;
    /**
     * The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy
     * to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
     */
    chatInstanceSid?: string;
  };
}
