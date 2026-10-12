import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountRecordingRecordingAddOnResultSchema,
  type ApiV2010AccountRecordingRecordingAddOnResult,
} from "../models/api-v2010-account-recording-recording-add-on-result.js";
import {
  listRecordingAddOnResultResponseSchema,
  type ListRecordingAddOnResultResponse,
} from "../models/list-recording-add-on-result-response.js";
import type { Servers } from "../servers.js";

export class Api20100401AddOnResult {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a result and purge all associated Payloads
   *
   * @remarks
   * Delete a result and purge all associated Payloads
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRecordingAddOnResult(
    request: Api20100401AddOnResult.DeleteRecordingAddOnResultRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
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
   * Fetch an instance of an AddOnResult
   *
   * @remarks
   * Fetch an instance of an AddOnResult
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRecordingAddOnResult(
    request: Api20100401AddOnResult.FetchRecordingAddOnResultRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountRecordingRecordingAddOnResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountRecordingRecordingAddOnResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of results belonging to the recording
   *
   * @remarks
   * Retrieve a list of results belonging to the recording
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecordingAddOnResult(
    request: Api20100401AddOnResult.ListRecordingAddOnResultRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRecordingAddOnResultResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
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
        success: { kind: "json", schema: listRecordingAddOnResultResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401AddOnResult {
  export type DeleteRecordingAddOnResultRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording AddOnResult resources to delete.
     */
    accountSid: string;
    /** The SID of the recording to which the result to delete belongs. */
    referenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording AddOnResult resource to
     * delete.
     */
    sid: string;
  };

  export type FetchRecordingAddOnResultRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording AddOnResult resource to fetch.
     */
    accountSid: string;
    /** The SID of the recording to which the result to fetch belongs. */
    referenceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording AddOnResult resource to
     * fetch.
     */
    sid: string;
  };

  export type ListRecordingAddOnResultRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording AddOnResult resources to read.
     */
    accountSid: string;
    /** The SID of the recording to which the result to read belongs. */
    referenceSid: string;
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
