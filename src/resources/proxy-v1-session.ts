import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listSessionResponseSchema, type ListSessionResponse } from "../models/list-session-response.js";
import {
  proxyV1ServiceSessionSchema,
  type ProxyV1ServiceSession,
} from "../models/proxy-v1-service-session.js";
import { sessionEnumModeSchema, type SessionEnumMode } from "../models/session-enum-mode.js";
import { sessionEnumStatusSchema, type SessionEnumStatus } from "../models/session-enum-status.js";
import type { Servers } from "../servers.js";

export class ProxyV1Session {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSession(
    request: ProxyV1Session.CreateSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSession, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServiceSession, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "UniqueName", value: request.uniqueName, schema: s.optional(s.string()) },
            { name: "DateExpiry", value: request.dateExpiry, schema: s.optional(s.dateTime()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
            { name: "Mode", value: request.mode, schema: s.optional(s.lazy(() => sessionEnumModeSchema)) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => sessionEnumStatusSchema)),
            },
            {
              name: "Participants",
              value: request.participants,
              schema: s.optional(s.array(s.record(s.string(), s.unknown()))),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSession(
    request: ProxyV1Session.DeleteSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchSession(
    request: ProxyV1Session.FetchSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSession, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServiceSession, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSession(
    request: ProxyV1Session.ListSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSessionResponse, ResponseError> {
    return this.#rawClient.execute<ListSessionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSessionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSession(
    request: ProxyV1Session.UpdateSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSession, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServiceSession, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "DateExpiry", value: request.dateExpiry, schema: s.optional(s.dateTime()) },
            { name: "Ttl", value: request.ttl, schema: s.optional(s.number()) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => sessionEnumStatusSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ProxyV1Session {
  export type CreateSessionRequest = {
    serviceSid: string;
    uniqueName?: string;
    dateExpiry?: Date;
    ttl?: number;
    mode?: SessionEnumMode;
    status?: SessionEnumStatus;
    participants?: Record<string, unknown>[];
  };

  export type DeleteSessionRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchSessionRequest = {
    serviceSid: string;
    sid: string;
  };

  export type ListSessionRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSessionRequest = {
    serviceSid: string;
    sid: string;
    dateExpiry?: Date;
    ttl?: number;
    status?: SessionEnumStatus;
  };
}
