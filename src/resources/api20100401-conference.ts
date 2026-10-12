import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { announceMethodSchema, type AnnounceMethod } from "../models/announce-method.js";
import {
  apiV2010AccountConferenceSchema,
  type ApiV2010AccountConference,
} from "../models/api-v2010-account-conference.js";
import { conferenceEnumStatusSchema, type ConferenceEnumStatus } from "../models/conference-enum-status.js";
import {
  conferenceEnumUpdateStatusSchema,
  type ConferenceEnumUpdateStatus,
} from "../models/conference-enum-update-status.js";
import {
  listConferenceResponseSchema,
  type ListConferenceResponse,
} from "../models/list-conference-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Conference {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch an instance of a conference
   *
   * @remarks
   * Fetch an instance of a conference
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConference(
    request: Api20100401Conference.FetchConferenceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConference, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json"),
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
        success: { kind: "json", schema: apiV2010AccountConferenceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of conferences belonging to the account used to make the request
   *
   * @remarks
   * Retrieve a list of conferences belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConference(
    request: Api20100401Conference.ListConferenceRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConferenceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Conferences.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateOnly()) },
          { name: "DateCreated<", value: request.dateCreatedQuery, schema: s.optional(s.dateOnly()) },
          { name: "DateCreated>", value: request.dateCreatedQueryQuery, schema: s.optional(s.dateOnly()) },
          { name: "DateUpdated", value: request.dateUpdated, schema: s.optional(s.dateOnly()) },
          { name: "DateUpdated<", value: request.dateUpdatedQuery, schema: s.optional(s.dateOnly()) },
          { name: "DateUpdated>", value: request.dateUpdatedQueryQuery, schema: s.optional(s.dateOnly()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => conferenceEnumStatusSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConferenceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Voice call conferences
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConference(
    request: Api20100401Conference.UpdateConferenceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConference, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json"),
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
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => conferenceEnumUpdateStatusSchema)),
            },
            { name: "AnnounceUrl", value: request.announceUrl, schema: s.optional(s.string()) },
            {
              name: "AnnounceMethod",
              value: request.announceMethod,
              schema: s.optional(s.lazy(() => announceMethodSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConferenceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Conference {
  export type FetchConferenceRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Conference resource(s) to fetch.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Conference resource to fetch */
    sid: string;
  };

  export type ListConferenceRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Conference resource(s) to read.
     */
    accountSid: string;
    /**
     * Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in
     * UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You
     * can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that
     * were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read
     * conferences that were created on or after midnight of this date.
     */
    dateCreated?: string;
    /**
     * Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in
     * UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You
     * can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that
     * were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read
     * conferences that were created on or after midnight of this date.
     */
    dateCreatedQuery?: string;
    /**
     * Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in
     * UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You
     * can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that
     * were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read
     * conferences that were created on or after midnight of this date.
     */
    dateCreatedQueryQuery?: string;
    /**
     * Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD`
     * in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this
     * date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read
     * conferences that were last updated on or before midnight of this date, and
     * `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of
     * this date.
     */
    dateUpdated?: string;
    /**
     * Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD`
     * in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this
     * date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read
     * conferences that were last updated on or before midnight of this date, and
     * `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of
     * this date.
     */
    dateUpdatedQuery?: string;
    /**
     * Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD`
     * in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this
     * date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read
     * conferences that were last updated on or before midnight of this date, and
     * `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of
     * this date.
     */
    dateUpdatedQueryQuery?: string;
    /** The string that identifies the Conference resources to read. */
    friendlyName?: string;
    /** The status of the resources to read. Can be: `init`, `in-progress`, or `completed`. */
    status?: ConferenceEnumStatus;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateConferenceRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Conference resource(s) to update.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the Conference resource to update */
    sid: string;
    status?: ConferenceEnumUpdateStatus;
    /**
     * The URL we should call to announce something into the conference. The URL may return an MP3
     * file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or
     * `<Redirect>` verbs.
     */
    announceUrl?: string;
    /**
     * The HTTP method used to call `announce_url`. Can be: `GET` or `POST` and the default is
     * `POST`
     */
    announceMethod?: AnnounceMethod;
  };
}
