import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { listContentResponseSchema, type ListContentResponse } from "../models/list-content-response.js";
import type { Servers } from "../servers.js";

export class ContentV2Content {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listContent2(
    request: ContentV2Content.ListContent2Request,
    options?: RequestOptions,
  ): ApiPromise<ListContentResponse, ResponseError> {
    return this.#rawClient.execute<ListContentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default2("/v2/Content"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "SortByDate", value: request.sortByDate, schema: s.optional(s.string()) },
          { name: "SortByContentName", value: request.sortByContentName, schema: s.optional(s.string()) },
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          { name: "ContentName", value: request.contentName, schema: s.optional(s.string()) },
          { name: "Content", value: request.content, schema: s.optional(s.string()) },
          { name: "Language", value: request.language, schema: s.optional(s.array(s.string())) },
          { name: "ContentType", value: request.contentType, schema: s.optional(s.array(s.string())) },
          {
            name: "ChannelEligibility",
            value: request.channelEligibility,
            schema: s.optional(s.array(s.string())),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listContentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ContentV2Content {
  export type ListContent2Request = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
    sortByDate?: string;
    sortByContentName?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    contentName?: string;
    content?: string;
    language?: string[];
    contentType?: string[];
    channelEligibility?: string[];
  };
}
