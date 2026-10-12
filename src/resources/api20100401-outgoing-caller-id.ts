import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountOutgoingCallerIdSchema,
  type ApiV2010AccountOutgoingCallerId,
} from "../models/api-v2010-account-outgoing-caller-id.js";
import {
  listOutgoingCallerIdResponseSchema,
  type ListOutgoingCallerIdResponse,
} from "../models/list-outgoing-caller-id-response.js";
import type { Servers } from "../servers.js";

export class Api20100401OutgoingCallerId {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete the caller-id specified from the account
   *
   * @remarks
   * Delete the caller-id specified from the account
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteOutgoingCallerId(
    request: Api20100401OutgoingCallerId.DeleteOutgoingCallerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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
   * Fetch an outgoing-caller-id belonging to the account used to make the request
   *
   * @remarks
   * Fetch an outgoing-caller-id belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchOutgoingCallerId(
    request: Api20100401OutgoingCallerId.FetchOutgoingCallerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountOutgoingCallerId, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json"),
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
        success: { kind: "json", schema: apiV2010AccountOutgoingCallerIdSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
   *
   * @remarks
   * Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOutgoingCallerId(
    request: Api20100401OutgoingCallerId.ListOutgoingCallerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOutgoingCallerIdResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PhoneNumber", value: request.phoneNumber, schema: s.optional(s.string()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOutgoingCallerIdResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Updates the caller-id
   *
   * @remarks
   * Updates the caller-id
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateOutgoingCallerId(
    request: Api20100401OutgoingCallerId.UpdateOutgoingCallerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountOutgoingCallerId, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountOutgoingCallerIdSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401OutgoingCallerId {
  export type DeleteOutgoingCallerIdRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * OutgoingCallerId resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to delete.
     */
    sid: string;
  };

  export type FetchOutgoingCallerIdRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * OutgoingCallerId resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to fetch.
     */
    sid: string;
  };

  export type ListOutgoingCallerIdRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * OutgoingCallerId resources to read.
     */
    accountSid: string;
    /** The phone number of the OutgoingCallerId resources to read. */
    phoneNumber?: string;
    /** The string that identifies the OutgoingCallerId resources to read. */
    friendlyName?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateOutgoingCallerIdRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * OutgoingCallerId resources to update.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to update.
     */
    sid: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters
     * long.
     */
    friendlyName?: string;
  };
}
