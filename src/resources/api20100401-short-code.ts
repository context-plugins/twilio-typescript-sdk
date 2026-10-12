import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountShortCodeSchema,
  type ApiV2010AccountShortCode,
} from "../models/api-v2010-account-short-code.js";
import {
  listShortCodeResponseSchema,
  type ListShortCodeResponse,
} from "../models/list-short-code-response.js";
import { smsFallbackMethod14Schema, type SmsFallbackMethod14 } from "../models/sms-fallback-method14.js";
import { smsMethod14Schema, type SmsMethod14 } from "../models/sms-method14.js";
import type { Servers } from "../servers.js";

export class Api20100401ShortCode {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch an instance of a short code
   *
   * @remarks
   * Fetch an instance of a short code
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchShortCode(
    request: Api20100401ShortCode.FetchShortCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountShortCode, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountShortCodeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of short-codes belonging to the account used to make the request
   *
   * @remarks
   * Retrieve a list of short-codes belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listShortCode(
    request: Api20100401ShortCode.ListShortCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ListShortCodeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "ShortCode", value: request.shortCode, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listShortCodeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a short code with the following parameters
   *
   * @remarks
   * Update a short code with the following parameters
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateShortCode(
    request: Api20100401ShortCode.UpdateShortCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountShortCode, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "ApiVersion", value: request.apiVersion, schema: s.optional(s.string()) },
            { name: "SmsUrl", value: request.smsUrl, schema: s.optional(s.string()) },
            {
              name: "SmsMethod",
              value: request.smsMethod,
              schema: s.optional(s.lazy(() => smsMethod14Schema)),
            },
            { name: "SmsFallbackUrl", value: request.smsFallbackUrl, schema: s.optional(s.string()) },
            {
              name: "SmsFallbackMethod",
              value: request.smsFallbackMethod,
              schema: s.optional(s.lazy(() => smsFallbackMethod14Schema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountShortCodeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401ShortCode {
  export type FetchShortCodeRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * ShortCode resource(s) to fetch.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the ShortCode resource to fetch */
    sid: string;
  };

  export type ListShortCodeRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * ShortCode resource(s) to read.
     */
    accountSid: string;
    /** The string that identifies the ShortCode resources to read. */
    friendlyName?: string;
    /**
     * Only show the ShortCode resources that match this pattern. You can specify partial numbers
     * and use '*' as a wildcard for any digit.
     */
    shortCode?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateShortCodeRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * ShortCode resource(s) to update.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the ShortCode resource to update */
    sid: string;
    /**
     * A descriptive string that you created to describe this resource. It can be up to 64
     * characters long. By default, the `FriendlyName` is the short code.
     */
    friendlyName?: string;
    /**
     * The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`.
     */
    apiVersion?: string;
    /** The URL we should call when receiving an incoming SMS message to this short code. */
    smsUrl?: string;
    /** The HTTP method we should use when calling the `sms_url`. Can be: `GET` or `POST`. */
    smsMethod?: SmsMethod14;
    /**
     * The URL that we should call if an error occurs while retrieving or executing the TwiML from
     * `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method that we should use to call the `sms_fallback_url`. Can be: `GET` or `POST`.
     */
    smsFallbackMethod?: SmsFallbackMethod14;
  };
}
