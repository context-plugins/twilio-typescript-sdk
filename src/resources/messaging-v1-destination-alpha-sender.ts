import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listDestinationAlphaSenderResponseSchema,
  type ListDestinationAlphaSenderResponse,
} from "../models/list-destination-alpha-sender-response.js";
import {
  messagingV1ServiceDestinationAlphaSenderSchema,
  type MessagingV1ServiceDestinationAlphaSender,
} from "../models/messaging-v1-service-destination-alpha-sender.js";
import type { Servers } from "../servers.js";

export class MessagingV1DestinationAlphaSender {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * A Messaging Service resource to add, fetch or remove Destination and Default Alpha Sender IDs
   * from a Messaging Service. Destination Alpha Sender can send to a particular ISO country code.
   * Default Alpha Senders can send to all countries.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDestinationAlphaSender(
    request: MessagingV1DestinationAlphaSender.CreateDestinationAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceDestinationAlphaSender, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/DestinationAlphaSenders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "AlphaSender", value: request.alphaSender, schema: s.string() },
            { name: "IsoCountryCode", value: request.isoCountryCode, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceDestinationAlphaSenderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add, fetch or remove Destination and Default Alpha Sender IDs
   * from a Messaging Service. Destination Alpha Sender can send to a particular ISO country code.
   * Default Alpha Senders can send to all countries.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDestinationAlphaSender(
    request: MessagingV1DestinationAlphaSender.DeleteDestinationAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/DestinationAlphaSenders/{Sid}"),
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
   * A Messaging Service resource to add, fetch or remove Destination and Default Alpha Sender IDs
   * from a Messaging Service. Destination Alpha Sender can send to a particular ISO country code.
   * Default Alpha Senders can send to all countries.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchDestinationAlphaSender(
    request: MessagingV1DestinationAlphaSender.FetchDestinationAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceDestinationAlphaSender, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/DestinationAlphaSenders/{Sid}"),
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
        success: { kind: "json", schema: messagingV1ServiceDestinationAlphaSenderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add, fetch or remove Destination and Default Alpha Sender IDs
   * from a Messaging Service. Destination Alpha Sender can send to a particular ISO country code.
   * Default Alpha Senders can send to all countries.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDestinationAlphaSender(
    request: MessagingV1DestinationAlphaSender.ListDestinationAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDestinationAlphaSenderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/DestinationAlphaSenders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "IsoCountryCode", value: request.isoCountryCode, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDestinationAlphaSenderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1DestinationAlphaSender {
  export type CreateDestinationAlphaSenderRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create
     * the resource under.
     */
    serviceSid: string;
    /**
     * The Alphanumeric Sender ID string. Can be up to 11 characters long. Valid characters are A-Z,
     * a-z, 0-9, space, hyphen `-`, plus `+`, underscore `_` and ampersand `&`. This value cannot
     * contain only numbers.
     */
    alphaSender: string;
    /**
     * The Optional Two Character ISO Country Code the Alphanumeric Sender ID will be used for. If
     * the IsoCountryCode is not provided, a default Alpha Sender will be created that can be used
     * across all countries.
     */
    isoCountryCode?: string;
  };

  export type DeleteDestinationAlphaSenderRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete
     * the resource from.
     */
    serviceSid: string;
    /** The SID of the AlphaSender resource to delete. */
    sid: string;
  };

  export type FetchDestinationAlphaSenderRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the
     * resource from.
     */
    serviceSid: string;
    /** The SID of the AlphaSender resource to fetch. */
    sid: string;
  };

  export type ListDestinationAlphaSenderRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the
     * resources from.
     */
    serviceSid: string;
    /**
     * Optional filter to return only alphanumeric sender IDs associated with the specified
     * two-character ISO country code.
     */
    isoCountryCode?: string;
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
