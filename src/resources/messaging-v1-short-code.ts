import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createShortCode(
    request: MessagingV1ShortCode.CreateShortCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceShortCode, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceShortCode, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/ShortCodes"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ShortCodeSid", value: request.shortCodeSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceShortCodeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteShortCode(
    request: MessagingV1ShortCode.DeleteShortCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/ShortCodes/{Sid}"),
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

  fetchShortCode2(
    request: MessagingV1ShortCode.FetchShortCode2Request,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceShortCode, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceShortCode, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/ShortCodes/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceShortCodeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listShortCode2(
    request: MessagingV1ShortCode.ListShortCode2Request,
    options?: RequestOptions,
  ): ApiPromise<ListShortCodeResponse1, ResponseError> {
    return this.#rawClient.execute<ListShortCodeResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/ShortCodes"),
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
        success: { kind: "json", schema: listShortCodeResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1ShortCode {
  export type CreateShortCodeRequest = {
    serviceSid: string;
    shortCodeSid: string;
  };

  export type DeleteShortCodeRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchShortCode2Request = {
    serviceSid: string;
    sid: string;
  };

  export type ListShortCode2Request = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
