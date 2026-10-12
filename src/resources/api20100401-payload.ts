import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayloadSchema,
  type ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload,
} from "../models/api-v2010-account-recording-recording-add-on-result-recording-add-on-result-payload.js";
import {
  listRecordingAddOnResultPayloadResponseSchema,
  type ListRecordingAddOnResultPayloadResponse,
} from "../models/list-recording-add-on-result-payload-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Payload {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a payload from the result along with all associated Data
   *
   * @remarks
   * Delete a payload from the result along with all associated Data
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRecordingAddOnResultPayload(
    request: Api20100401Payload.DeleteRecordingAddOnResultPayloadRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
          { name: "AddOnResultSid", value: request.addOnResultSid, schema: s.string() },
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
   * Fetch an instance of a result payload
   *
   * @remarks
   * Fetch an instance of a result payload
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRecordingAddOnResultPayload(
    request: Api20100401Payload.FetchRecordingAddOnResultPayloadRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
          { name: "AddOnResultSid", value: request.addOnResultSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayloadSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of payloads belonging to the AddOnResult
   *
   * @remarks
   * Retrieve a list of payloads belonging to the AddOnResult
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecordingAddOnResultPayload(
    request: Api20100401Payload.ListRecordingAddOnResultPayloadRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRecordingAddOnResultPayloadResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
          { name: "AddOnResultSid", value: request.addOnResultSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRecordingAddOnResultPayloadResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Payload {
  export type DeleteRecordingAddOnResultPayloadRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording AddOnResult Payload resources to delete.
     */
    accountSid: string;
    /**
     * The SID of the recording to which the AddOnResult resource that contains the payloads to
     * delete belongs.
     */
    referenceSid: string;
    /** The SID of the AddOnResult to which the payloads to delete belongs. */
    addOnResultSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording AddOnResult Payload
     * resource to delete.
     */
    sid: string;
  };

  export type FetchRecordingAddOnResultPayloadRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording AddOnResult Payload resource to fetch.
     */
    accountSid: string;
    /**
     * The SID of the recording to which the AddOnResult resource that contains the payload to fetch
     * belongs.
     */
    referenceSid: string;
    /** The SID of the AddOnResult to which the payload to fetch belongs. */
    addOnResultSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording AddOnResult Payload
     * resource to fetch.
     */
    sid: string;
  };

  export type ListRecordingAddOnResultPayloadRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording AddOnResult Payload resources to read.
     */
    accountSid: string;
    /**
     * The SID of the recording to which the AddOnResult resource that contains the payloads to read
     * belongs.
     */
    referenceSid: string;
    /** The SID of the AddOnResult to which the payloads to read belongs. */
    addOnResultSid: string;
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
