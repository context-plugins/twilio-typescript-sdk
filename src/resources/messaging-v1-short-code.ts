import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listShortCodeResponse1Schema,
  type ListShortCodeResponse1,
} from "../models/list-short-code-response1.js";
import {
  messagingV1ServiceShortCodeSchema,
  type MessagingV1ServiceShortCode,
} from "../models/messaging-v1-service-short-code.js";
import type { Servers } from "../servers.js";

export class MessagingV1ShortCode {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * A Messaging Service resource to add, fetch or remove short code numbers from a Messaging
   * Service.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createShortCode(
    request: MessagingV1ShortCode.CreateShortCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceShortCode, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/ShortCodes"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ShortCodeSid", value: request.shortCodeSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceShortCodeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add, fetch or remove short code numbers from a Messaging
   * Service.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteShortCode(
    request: MessagingV1ShortCode.DeleteShortCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/ShortCodes/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
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
   * A Messaging Service resource to add, fetch or remove short code numbers from a Messaging
   * Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchShortCode2(
    request: MessagingV1ShortCode.FetchShortCode2Request,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceShortCode, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/ShortCodes/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceShortCodeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add, fetch or remove short code numbers from a Messaging
   * Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listShortCode2(
    request: MessagingV1ShortCode.ListShortCode2Request,
    options?: RequestOptions,
  ): ApiPromise<ListShortCodeResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/ShortCodes"),
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
        success: { kind: "json", schema: listShortCodeResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1ShortCode {
  export type CreateShortCodeRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create
     * the resource under.
     */
    serviceSid: string;
    /** The SID of the ShortCode resource being added to the Service. */
    shortCodeSid: string;
  };

  export type DeleteShortCodeRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete
     * the resource from.
     */
    serviceSid: string;
    /** The SID of the ShortCode resource to delete. */
    sid: string;
  };

  export type FetchShortCode2Request = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the
     * resource from.
     */
    serviceSid: string;
    /** The SID of the ShortCode resource to fetch. */
    sid: string;
  };

  export type ListShortCode2Request = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the
     * resources from.
     */
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
