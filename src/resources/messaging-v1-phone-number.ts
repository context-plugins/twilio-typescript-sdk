import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listPhoneNumberResponseSchema,
  type ListPhoneNumberResponse,
} from "../models/list-phone-number-response.js";
import {
  messagingV1ServicePhoneNumberSchema,
  type MessagingV1ServicePhoneNumber,
} from "../models/messaging-v1-service-phone-number.js";
import type { Servers } from "../servers.js";

export class MessagingV1PhoneNumber {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * A Messaging Service resource to add, fetch or remove phone numbers from a Messaging Service.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPhoneNumber(
    request: MessagingV1PhoneNumber.CreatePhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServicePhoneNumber, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/PhoneNumbers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "PhoneNumberSid", value: request.phoneNumberSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServicePhoneNumberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add, fetch or remove phone numbers from a Messaging Service.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePhoneNumber(
    request: MessagingV1PhoneNumber.DeletePhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}"),
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
   * A Messaging Service resource to add, fetch or remove phone numbers from a Messaging Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPhoneNumber(
    request: MessagingV1PhoneNumber.FetchPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServicePhoneNumber, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}"),
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
        success: { kind: "json", schema: messagingV1ServicePhoneNumberSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Messaging Service resource to add, fetch or remove phone numbers from a Messaging Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPhoneNumber(
    request: MessagingV1PhoneNumber.ListPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPhoneNumberResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{ServiceSid}/PhoneNumbers"),
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
        success: { kind: "json", schema: listPhoneNumberResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1PhoneNumber {
  export type CreatePhoneNumberRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create
     * the resource under.
     */
    serviceSid: string;
    /** The SID of the Phone Number being added to the Service. */
    phoneNumberSid: string;
  };

  export type DeletePhoneNumberRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to delete
     * the resource from.
     */
    serviceSid: string;
    /** The SID of the PhoneNumber resource to delete. */
    sid: string;
  };

  export type FetchPhoneNumberRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the
     * resource from.
     */
    serviceSid: string;
    /** The SID of the PhoneNumber resource to fetch. */
    sid: string;
  };

  export type ListPhoneNumberRequest = {
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
