import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  listContentAndApprovalsResponseSchema,
  type ListContentAndApprovalsResponse,
} from "../models/list-content-and-approvals-response.js";
import type { Servers } from "../servers.js";

export class ContentV2ContentAndApprovals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a list of Contents with approval statuses belonging to the account used to make the
   * request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContentAndApprovals2(
    request: ContentV2ContentAndApprovals.ListContentAndApprovals2Request,
    options?: RequestOptions,
  ): ApiPromise<ListContentAndApprovalsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default2("/v2/ContentAndApprovals"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listContentAndApprovalsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ContentV2ContentAndApprovals {
  export type ListContentAndApprovals2Request = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
    /** Whether to sort by ascending or descending date updated */
    sortByDate?: string;
    /** Whether to sort by ascending or descending content name */
    sortByContentName?: string;
    /** Filter by >=[date-time] */
    dateCreatedAfter?: Date;
    /** Filter by <=[date-time] */
    dateCreatedBefore?: Date;
    /** Filter by Regex Pattern in content name */
    contentName?: string;
    /** Filter by Regex Pattern in template content */
    content?: string;
    /** Filter by array of valid language(s) */
    language?: string[];
    /** Filter by array of contentType(s) */
    contentType?: string[];
    /** Filter by array of ChannelEligibility(s), where ChannelEligibility=<channel>:<status> */
    channelEligibility?: string[];
  };
}
