import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { listMediaResponseSchema, type ListMediaResponse } from "../models/list-media-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Media {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listMedia(
    request: Api20100401Media.ListMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMediaResponse, ResponseError> {
    return this.#rawClient.execute<ListMediaResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
        ],
        query: [
          { name: "DateCreated", value: request.dateCreated, schema: s.optional(s.dateTime()) },
          { name: "DateCreated<", value: request.dateCreatedQuery, schema: s.optional(s.dateTime()) },
          { name: "DateCreated>", value: request.dateCreatedQueryQuery, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMediaResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Media {
  export type ListMediaRequest = {
    accountSid: string;
    messageSid: string;
    dateCreated?: Date;
    dateCreatedQuery?: Date;
    dateCreatedQueryQuery?: Date;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
