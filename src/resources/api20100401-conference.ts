import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  fetchConference(
    request: Api20100401Conference.FetchConferenceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConference, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountConference, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConferenceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConference(
    request: Api20100401Conference.ListConferenceRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConferenceResponse, ResponseError> {
    return this.#rawClient.execute<ListConferenceResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Conferences.json"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConferenceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConference(
    request: Api20100401Conference.UpdateConferenceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConference, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountConference, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Conference {
  export type FetchConferenceRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListConferenceRequest = {
    accountSid: string;
    dateCreated?: string;
    dateCreatedQuery?: string;
    dateCreatedQueryQuery?: string;
    dateUpdated?: string;
    dateUpdatedQuery?: string;
    dateUpdatedQueryQuery?: string;
    friendlyName?: string;
    status?: ConferenceEnumStatus;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateConferenceRequest = {
    accountSid: string;
    sid: string;
    status?: ConferenceEnumUpdateStatus;
    announceUrl?: string;
    announceMethod?: AnnounceMethod;
  };
}
